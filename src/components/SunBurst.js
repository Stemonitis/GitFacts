import React from "react";
export default function SunBurst(props) {
  return (
    <div id="SunBurst">
      <p>{JSON.stringify(props.queryResult)}</p>
    </div>
  );
}
