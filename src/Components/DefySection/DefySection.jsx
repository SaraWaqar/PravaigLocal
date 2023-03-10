import React from "react";
import Accordian from "../Accordian/Accordian";
import Slider from "../Slider/Slider";
import Summary from "../Summary/Summary";
import "./defySection.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const DefySection = () => {
  return (
    <div className="defySec">
      <div className="container-1490">
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="Models-tab"
            role="tabpanel"
            aria-labelledby="Models-tab"
          >
           
            <div className="row first-row">
              <div className="col-lg-8 col-md-12">
                <Slider />
                <h2 className="main-text">DEFY</h2>
                <div className="car-content">
                  <h3>0.00 INR</h3>
                </div>
                <div className="summaryDesk">
                  <Element name="summary">
                    <Summary />
                  </Element>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <Accordian />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="summaryMbl">
                  <Element name="summary1">
                    <Summary />
                  </Element>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefySection;
