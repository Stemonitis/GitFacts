import { select, partition, hierarchy } from "d3";
import React, { useRef, useEffect, useState } from "react";
import transformIntoPartionData from "./transformIntoPartionData.js";

export default function SunBurst(props) {
  //i want two modes modify and zoom
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();

  useEffect(() => {
    let sunData = transformIntoPartionData(
      props.queryResult,
      props.queryString
    );
    const root = partition(sunData);
    const svg = select(svgRef.current);
    svg.selectAll("g").data(sunData).enter().append("g").append("path");
    .attr("d", arc);
  });
  return (
    <div id="SunBurst">
      <svg ref={svgRef}></svg>
    </div>
  );
}
