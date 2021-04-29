import React, { useState } from "react";
import SunBurst from "./SunBurst";
import LoadingStatus from "./LoadingStatus";
const DataDisplay = (props) => {
  const [toZoomOrNotToZoom, toggleSunburst] = useState(true);

  return (
    <div className="SunBurstContainer">
      <div className="buttonWrapper">
        <div>
          <div className="toggle1">
            <input
              className="toggle-state"
              type="checkbox"
              checked={toZoomOrNotToZoom}
              onChange={() => {
                return;
              }}
              onBlur={() => {
                return;
              }}
            />
            <div
              className="indicator"
              onClick={function () {
                toggleSunburst(!toZoomOrNotToZoom);
              }}
            ></div>
          </div>
          <div id="toggler">
            {toZoomOrNotToZoom
              ? "Toggle to zoomable diagram"
              : "Toggle to the whole diagram"}
          </div>
        </div>
      </div>
      <LoadingStatus
        loadingCount={props.loadingCount}
        loading={props.loading}
        error={props.error}
      />
      <SunBurst
        key={[toZoomOrNotToZoom, props.loadingCount]}
        zoom={toZoomOrNotToZoom}
        queryResult={props.queryResult}
        queryString={props.queryString}
      />
    </div>
  );
};

export default DataDisplay;
