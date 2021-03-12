import {
  select,
  partition,
  scaleOrdinal,
  quantize,
  interpolateRainbow,
  hierarchy,
  interpolate,
  format,
  arc,
} from "d3";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import transformIntoPartionData from "./transformIntoPartionData.js";

export default function SunBurstZoomable(props) {
  const sunRef = useRef(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [size, resize] = useState(0);
  //happens synchronously with the render
  useLayoutEffect(() => {
    setWidth(sunRef.current.clientWidth);
    setHeight(sunRef.current.clientHeight);
  });
  //kind of renders two time as it takes time to measure the components
  //with the layout effect
  useEffect(() => {
    let sunData;
    if (props.queryResult.name === "allData") {
      sunData = props.queryResult;
    } else {
      sunData = transformIntoPartionData(props.queryResult, props.queryString);
    }

    //define color
    let color = scaleOrdinal(
      quantize(interpolateRainbow, sunData.children.length + 1)
    );
    //making image responsive and not going out of the borders
    let widthN = width > height ? height : width;
    let radius = widthN / 6;
    //define auxiliary functions
    function arcVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
    }

    function labelVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
    }

    //this is performed on the d.current and not on the d!!!!
    function labelTransform(d) {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
      const y = ((d.y0 + d.y1) / 2) * radius;
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
    }
    const partitionN = (data) => {
      const root = hierarchy(data)
        .sum((d) => d.size)
        .sort((a, b) => b.size - a.size);
      return partition().size([2 * Math.PI, root.height + 1])(root);
    };
    const arcC = arc()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .innerRadius((d) => d.y0 * radius)
      .outerRadius((d) => Math.max(d.y0 * radius, d.y1 * radius - 1));

    //lets build our diagram
    const root = partitionN(sunData);

    root.each((d) => (d.current = d));

    const svg = select(sunRef.current)
      .append("svg")
      .style("width", widthN + "px")
      .style("height", widthN + "px");
    const g = svg
      .append("g")
      .attr("transform", `translate(${widthN / 2},${widthN / 2})`);

    const path = g
      .append("g")
      .selectAll("path")
      .data(root.descendants().slice(1))
      .join("path")
      .attr("fill", (d) => {
        while (d.depth > 1) d = d.parent;
        return color(d.data.name);
      })
      .attr("fill-opacity", (d) =>
        arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0
      )
      .attr("d", (d) => arcC(d.current));

    path
      .filter((d) => d.children)
      .style("cursor", "pointer")
      .on("click", clicked);

    path.append("title").text((d) => {
      let labelsArray = props.queryString.map((l) => Object.keys(l).reverse());
      return `${d
        .ancestors()
        //here we take away the root object name
        .map((d, i, array) =>
          i === array.length - 1
            ? ""
            : labelsArray[d.depth - 1] + " : " + d.data.name
        )
        .reverse()
        .join("\n")}\n repository count : ${format(",d")(d.value)}`;
    });

    const label = g
      .append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .style("user-select", "none")
      .selectAll("text")
      .data(root.descendants().slice(1))
      .join("text")
      .attr("font-size", (d) => {
        return d.data.name.length > 7
          ? Math.floor(100 / d.data.name.length)
          : 12;
      })
      .attr("dy", "0.35em")
      .attr("fill-opacity", (d) => +labelVisible(d.current))
      .attr("transform", (d) => labelTransform(d.current))
      .text((d) => d.data.name);

    const parent = g
      .append("circle")
      .datum(root)
      .attr("r", radius)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("click", clicked);

    function clicked(event, p) {
      parent.datum(p.parent || root);

      root.each(
        (d) =>
          (d.target = {
            x0:
              Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) *
              2 *
              Math.PI,
            x1:
              Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) *
              2 *
              Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth),
          })
      );

      const t = g.transition().duration(750);

      // Transition the data on all arcs, even the ones that aren’t visible,
      // so that if this transition is interrupted, entering arcs will start
      // the next transition from the desired position.
      path
        .transition(t)
        .tween("data", (d) => {
          const i = interpolate(d.current, d.target);
          return (t) => (d.current = i(t));
        })
        .filter(function (d) {
          return +this.getAttribute("fill-opacity") || arcVisible(d.target);
        })
        .attr("fill-opacity", (d) =>
          arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0
        )
        .attrTween("d", (d) => () => arcC(d.current));

      label
        .filter(function (d) {
          return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        })
        .transition(t)
        .attr("fill-opacity", (d) => +labelVisible(d.target))
        .attrTween("transform", (d) => () => labelTransform(d.current));
    }

    svg.node();
    //if you don`t write the clean-out function it will just continue appending svgs
    //on the top of each other
    return () => svg.remove();
  }, [props.queryResult, props.queryString, width, height]);
  //this effect is for resizing the svg if we change the window frame
  useEffect(() => {
    window.addEventListener("resize", resize);
  }, [size, resize]);

  return <div className="SunBurst" ref={sunRef}></div>;
}
