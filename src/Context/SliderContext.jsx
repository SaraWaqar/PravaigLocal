import React, { createContext, useEffect, useState } from "react";
import Services from "../Services/Services"
const SliderContext = createContext();



const SliderProvider = ({ children }) => {

  const [sliderNum, setSliderNum] = useState(0);
  const [dataAPI, setdataAPI] = useState([]);
  const [images, setimages] = useState('');
  const [extColorImg, setextColorImg] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await Services.getAll();
    let data = res?.data;
    console.log("ressssssssssssssss", data);
    setdataAPI(data);
    setimages(data.exteriorcolors[0]?.mainImage)
    setextColorImg(data.exteriorcolors)
  }

  const colorSwitch = (param) => {
    setimages(dataAPI.exteriorcolors[param]?.mainImage)
  };


  const values = {
    images,
    colorSwitch,
    sliderNum,
    dataAPI,
    extColorImg,
    setextColorImg
  };

  return (
    <SliderContext.Provider value={values}>{children}</SliderContext.Provider>
  );
};

export { SliderContext, SliderProvider };
