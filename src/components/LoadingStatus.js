import React from "react";
import LoadingBar from "./LoadingBar";

const LoadingStatus = (props) => {
  return (
    <div id="SunBurstStatus">
      {props.loading ? (
        <LoadingBar loadingCount={props.loadingCount} />
      ) : props.error ? (
        <p>Error. Please, resubmit your search or try later</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoadingStatus;
