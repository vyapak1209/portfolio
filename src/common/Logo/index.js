import "./logo.css";

import React from "react";

import codeIcon from "./images/code_icon_freya.png";

function Logo() {
  return (
    <div className="logo887MainDiv">
      <img src={codeIcon} width={64} height={64} alt="</>"/>
      <div className="logo887MainText">
        Vyapak Khare
      </div>
    </div>
  )
}

export default Logo;
