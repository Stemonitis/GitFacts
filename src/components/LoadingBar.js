import React from "react";

const LoadingBar = (props) => {
  return (
    <div>
      Loading {props.loadingCount[0]} out of {props.loadingCount[1]} queries
      <div className="progress">
        <div
          className="bar shadow circuit"
          style={{
            width: (100 / props.loadingCount[1]) * props.loadingCount[0] + "%",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingBar;
