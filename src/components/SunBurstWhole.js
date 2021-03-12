import {
  select,
  partition,
  scaleOrdinal,
  quantize,
  interpolateRainbow,
  hierarchy,
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

    let radius = width > height ? height / 2 : width / 2;
    let color = scaleOrdinal(
      quantize(interpolateRainbow, sunData.children.length + 1)
    );
    //lets build our diagram
    const root = partition().size([2 * Math.PI, radius])(
      hierarchy(sunData)
        .sum((d) => d.size)
        .sort((a, b) => b.size - a.size)
    );

    const svg = select(sunRef.current)
      .append("svg")
      .style("width", width + "px")
      .style("height", height + "px");

    svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("fill-opacity", 0.95)
      .selectAll("path")
      .data(root.descendants().filter((d) => d.depth)) //filters out the 0 depth node
      .join("path")
      .style("fill", (d) => {
        while (d.depth > 1) d = d.parent;
        return color(d.data.name);
      })
      .attr("fill-opacity", (d) => 1 - d.depth * 0.2)
      .style("stroke", "white")
      .attr(
        "d",
        arc()
          .startAngle((d) => d.x0)
          .endAngle((d) => d.x1)
          .innerRadius((d) => d.y0)
          .outerRadius((d) => d.y1)
      )
      .on("mouseover", function () {
        select(this).transition().attr("fill-opacity", 1);
      })
      .on("mouseout", function () {
        select(this)
          .transition()
          .attr("fill-opacity", (d) => 1 - d.depth * 0.2);
      })
      .append("title")
      .text((d) => {
        let labelsArray = props.queryString.map((l) =>
          Object.keys(l).reverse()
        );
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
    svg
      .append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .attr("font-size", "1px")
      .attr("font-family", "sans-serif")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll("text")
      .data(
        root
          .descendants()
          .filter((d) => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 10)
      )
      .join("text")
      .attr("transform", function (d) {
        const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI;
        const y = (d.y0 + d.y1) / 2;
        let arcThickness = d.y1 - d.y0;
        //current font size(height of the font) is set in the previous font attributes (1px)
        //and the average height to width ratio is about 2
        let currentSize = d.data.name.length * 0.6;
        //shrinking coefficient
        let shrinCo = arcThickness / currentSize;
        if (d.data.name.length < 5) {
          shrinCo = arcThickness / 4;
        }
        //now add the scale factor to fit the names into the sunburst sectors perfectly
        return (
          `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})` +
          `scale(${shrinCo})`
        );
      })
      .attr("dy", "0.1em")
      .text((d) => d.data.name);

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
