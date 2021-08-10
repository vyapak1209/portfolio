import "./button.css";

import React from "react";

function Button({ buttonText, buttonType, width, height }) {
  return (
    <div style={{ width, height, position: 'relative' }}>
      <div className="btn555MainDiv" style={{ width, height }}>
        {buttonText}
      </div>
      <div
        className="btn555BackgroundDiv"
        style={{ width, height }}
      />
    </div>
  )
}

export default Button;
