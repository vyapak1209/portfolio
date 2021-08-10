import "./navigationBar.css";

import React, { PureComponent } from "react";

import Logo from "../Logo";
import DirectLinks from "./DirectLinks";
import QuickLinks from "./QuickLinks";

export class NavigationBar extends PureComponent {
  render() {
    return (
      <div className="container nav665MainDiv animated animatedFadeInDown fadeInDown">
        <div className="row">
          <div className="four columns">
            <Logo />
          </div>
          <div className="five columns">
            <DirectLinks />
          </div>
          <div className="three columns">
            <QuickLinks />
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationBar
