import "./homePage.css";

import React, { PureComponent } from "react";

import Button from "../../ui/Button";
import buildTool from "./animation/build_tool.gif";
import coverDrawing from "./animation/cover_drawing.gif";
import coverImage from "./images/cover_image.png";

export class HomePage extends PureComponent {

  state = {
    componentMounted: false
  }

  componentDidMount() {
    this.setState({
      componentMounted: true
    })
  }

  render() {

    const { componentMounted } = this.state;

    return (
      <div className="container home888MainDiv">
        <div className="row">
          <div className="eight columns">
          <div className="home888Heading animated animatedFadeInUp fadeInUp">
            <div className="home888HeadingText">
              Hi, I'm Vyapak
            </div>
            <div className={`home888Hrule ${componentMounted ? "home888HruleShow" : ""}`} />
          </div>
          <div className="home888SubHeading animated animatedFadeInUp fadeInUp">
            <h2>
              I create for the web.
            </h2>
            <img src={buildTool} alt="man_gif" className="home888BuildTool" />
          </div>
          <p className="home888Para animated animatedFadeInUp fadeInUp">
            I am a Software Engineer based out of Bangalore, currently working as an SDE2 at Groww, India.
          </p>
          <div className="home888Button animated animatedFadeInUp fadeInUp" style={{ marginTop: 40, maxWidth: 150 }}>
            <Button
              width={150}
              height={50}
              buttonText="Get in touch.."
            />
          </div>
          </div>

          <div className="four columns">
            <div className="home888CoverImageDiv">
              <img src={coverImage} alt="Cover" width={300} />
              <img className="home888CoverDrawing" src={coverDrawing} alt="Drawing" width={300} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;
