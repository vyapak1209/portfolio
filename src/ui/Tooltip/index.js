import "./tooltip.css";

import React from "react";

function Tooltip({ children, text, width = 100, borderRadius = 12, parentStyle = {} }) {
  return (
    <div className="ui-tooltip" style={parentStyle}>
      {children}
      <span className="ui-tooltiptext ui-tooltip-bottom" style={{ width, marginLeft: -width/2, borderRadius }} >{text}</span>
    </div>
  )
}

export default Tooltip;

