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
import React, { useRef, useEffect, useState } from "react";
import transformIntoPartionData from "./transformIntoPartionData.js";

export default function SunBurst(props) {
  //i want two modes modify and zoom
  const [sunData, setData] = useState({
    name: "gitdata",
    children: [
      {
        name: "python",
        children: [
          { name: "1 star", size: 4 },
          { name: "2 star", size: 4 },
        ],
      },
      {
        name: "java",
        children: [
          { name: "1 star", size: 3 },
          { name: "2 star", size: 3 },
          {
            name: "Sub B3",
            size: 3,
          },
        ],
      },
      {
        name: "brainfuck",
        children: [
          { name: "1 star", size: 4 },
          { name: "2 star", size: 4 },
        ],
      },
      {
        name: "fuck",
        children: [
          { name: "1 star", size: 6 },
          { name: "2 star", size: 4 },
        ],
      },
    ],
  });
  const svgRef = useRef(null);

  useEffect(() => {
    //initial variables
    setData(transformIntoPartionData(props.queryResult, props.queryString));
    let width = 500;
    let height = 500;
    let radius = width / 2;
    //lets build our diagram
    const root = partition().size([2 * Math.PI, radius])(
      hierarchy(sunData)
        .sum((d) => d.size)
        .sort((a, b) => b.size - a.size)
    );
    const svg = select(svgRef.current);

    svg
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .attr("fill-opacity", 0.6)
      .selectAll("path")
      .data(root.descendants().filter((d) => d.depth)) //filters out the 0 depth node
      .join("path")
      .style("fill", (d) => {
        while (d.depth > 1) d = d.parent;
        return scaleOrdinal(
          quantize(interpolateRainbow, sunData.children.length + 1)
        )(d.data.name);
      })
      .attr(
        "d",
        arc()
          .startAngle((d) => d.x0)
          .endAngle((d) => d.x1)
          .innerRadius((d) => d.y0)
          .outerRadius((d) => d.y1)
      )
      .append("title")
      .text(
        (d) =>
          `${d
            .ancestors()
            .map((d) => d.data.name)
            .reverse()
            .join("/")}\n${format(",d")(d.size)}`
      );

    svg
      .append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .attr("font-size", 10)
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
        return `rotate(${
          x - 90
        }) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
      })
      .attr("dy", "0.35em")
      .text((d) => d.data.name);

    svg.node();
  }, [props.queryResult, props.queryString]);
  return (
    <div id="SunBurst">
      <svg id="d3container" ref={svgRef}></svg>
    </div>
  );
}
