import React from "react";
import ResizePanel from "react-resize-panel";

function Test() {
  return (
    <div>
      <ResizePanel direction="e">
        <div className="panel sidebar">left panel</div>
      </ResizePanel>
    </div>
  );
}

export default Test;
