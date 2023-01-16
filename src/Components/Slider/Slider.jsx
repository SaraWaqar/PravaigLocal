import React, { useState } from "react";
import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UseSlider } from "../../Hooks/UseSlider";

const Slider = () => {
  const { images, sliderNum } = UseSlider();
  const base_url = "http://192.168.0.179:3700/"
  //console.log("imgg" , base_url + images)

  return (
    <div>
      <div className="car-slider">      
            <img src={base_url + images} alt="" />      
      </div>
    </div>
  );
};

export default Slider;
