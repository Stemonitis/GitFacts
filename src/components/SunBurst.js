import React from "react";
export default function SunBurst(props) {
  console.log(props.queryResult);
  return (
    <div id="SunBurst">
      <p>{JSON.stringify(props.queryResult)}</p>
    </div>
  );
}
