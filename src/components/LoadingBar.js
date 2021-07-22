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
        <div>If you wish to stop loading, please refresh the page</div>
      </div>
    </div>
  );
};

export default LoadingBar;
