import React, { useState, useEffect } from "react";
import "./accordian.css";
import Accordion from "react-bootstrap/Accordion";
import bg1 from "../../Assets/img/carb1.png";
import bg2 from "../../Assets/img/carb2.png";
import bg3 from "../../Assets/img/carb3.png";
import bg4 from "../../Assets/img/carb4.png";
import wheel1 from "../../Assets/img/wheel1.svg";
import wheel2 from "../../Assets/img/wheel2.svg";
import wheel3 from "../../Assets/img/wheel3.svg";
import interior1 from "../../Assets/img/INTERIOR1.png";
import interior2 from "../../Assets/img/INTERIOR2.png";
import interior3 from "../../Assets/img/INTERIOR3.png";
import interior4 from "../../Assets/img/INTERIOR4.png";
import interior5 from "../../Assets/img/INTERIOR5.png";
import redCar from "../../Assets/img/car-30984_960_720.png";
import { UseSlider } from "../../Hooks/UseSlider";
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
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useSearchParams } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button2 from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MainModal from "../modal";
import Services from "../../Services/Services";

const Accordian = () => {
  const { images, sliderNum, colorSwitch, dataAPI, setextColorImg } = UseSlider();
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const [showY, setShowY] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShow = () => setShow(true);
  const handleShowModal = () => setShowModal(true);
  const handleCloseY = () => setShowY(false);
  const handleShowY = () => setShowY(true);
  const [params, setParams] = useSearchParams();
  const tabs = params.get("tab");
  // console.log(tabs, "tabss");
  const [tab, setTab] = useState("0");

  useEffect(() => {
    if (tabs) {
      setTab(tabs);
    }
    // return () => {
    //   setParams({});
    // };
  }, [tabs]);

  const [yearsMain, setMainYears] = useState([
    {
      packageName: "+ 2 Years",
      price: "INR 360,000",
      checked: false,
    },
    {
      packageName: "+ 4 Years",
      price: "INR 630,000",
      checked: false,
    },
  ]);
  // check after headng
  const [years, setYears] = useState([
    {
      packageName: "+ 2 Years",
      price: "INR 69,000",
      checked: false,
    },
    {
      packageName: "+ 4 Years",
      price: "INR 108,000",
      checked: false,
    },
  ]);

  const [dummyData, setDummyData] = useState([
    {
      packageName: "Cocoon Package",
      price: "INR 8,50,000",
      checked: false,
    },
    {
      packageName: "Scenting  Package",
      price: "INR 51,000",
      checked: false,
    },
    {
      packageName: "Heating  Package",
      price: "INR 1,50,000",
      checked: false,
    },
    {
      packageName: "Fluffy Carpets  Package",
      price: "INR 51,000",
      checked: false,
    },
    {
      packageName: "Thick Vegan Leather",
      price: "INR 8,000",
      checked: false,
    },
    {
      packageName: "Wheel Aero Covers",
      price: "INR 15,000",
      checked: false,
    },
    {
      packageName: "Tyre Repair Kit",
      price: "INR 35,000",
      checked: false,
    },
    {
      packageName: "Home Fast Ceramic",
      price: "INR 45,000",
      checked: false,
    },
    {
      packageName: "PPF + Ceramic",
      price: "INR 20,000",
      checked: false,
    },
    {
      packageName: "Soft Close Doors",
      price: "INR 80,000",
      checked: false,
    },
  ]);

  const [test, setTest] = useState()

  // useEffect(() => {
  //   // const data =
  //   // setData(data)
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const { data } = await Services.getAll()
  //   data?.map((item) => {
  //     setTest(item)
  //   })
  // };
  // console.log(test);

  const colors = [
    { colorCode: "#DB301F", name: "red" },
    { colorCode: "#F1B640", name: "yellow" },
    { colorCode: "#271257", name: "purple" },
    { colorCode: "#11328F", name: "blue" },
    { colorCode: "#8C918D", name: "grey" },
    { colorCode: "#fff", name: "white" },
    { colorCode: "#004225", name: "green" },
    { colorCode: "#000", name: "black" },
    { colorCode: "#E0DBD1", name: "lightgrey" },
  ];

  const [fields, setFields] = useState([]);
  const [selectedAddon, setSelectedAddon] = useState({});
  const base_url = "http://192.168.0.179:3700/"

  const handleAcceptAddon = (e) => {
    e.preventDefault();
    dummyData.map((elem) => {
      if (elem === selectedAddon) {
        elem.checked = true;
      }
      return;
    });
    setShow(false);
  };

  const handleDeclineAddon = (e) => {
    e.preventDefault();
    years.map((elem) => {
      if (elem === selectedAddon) {
        elem.checked = false;
      }
      return;
    });

    yearsMain.map((elem) => {
      if (elem === selectedAddon) {
        elem.checked = false;
      }
      return;
    });

    dummyData.map((elem) => {
      if (elem === selectedAddon) {
        elem.checked = false;
      }
      return;
    });

    setShow(false);
  };

  // const handleCheckAddon = (selectedItem) => {
  //   const dummyDataModify = dummyData.map((elem) => {
  //     if (elem === selectedItem) {
  //       if (elem.checked === true) {
  //         elem.checked = false;
  //       } else {
  //         elem.checked = true;
  //       }
  //     }
  //     return elem;
  //   });
  //   setDummyData(dummyDataModify);
  // };

  const handleCheckAddon = (selectedItem, data, setdata) => {
    const dataModify = data.map((elem) => {
      if (elem === selectedItem) {
        if (elem.checked === true) {
          elem.checked = false;
        } else {
          elem.checked = true;
        }
      }
      return elem;
    });
    setdata(dataModify);
  };

  return (
    <div className="accordion">

      <Accordion onSelect={(eventkey) => setTab(eventkey)} activeKey={tab}>
        <Element name="model">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3 className="accordion__itemTitle">MODELS </h3>
              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="accordion__itemContent">
                <form className="models-radio">
                  <div className="form-group forColorRadio">
                    {dataAPI.models?.map((item, i) => {
                      return (
                        <div className="flx-both" key={i}>
                          <span className="oulineS">
                            <input type="radio" id="html" name="fav_language" />
                          </span>
                          <label htmlFor="html">{item.car}</label>
                        </div>
                      )
                    })}
                  </div>

                </form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Element>

        <Accordion.Item eventKey="1">
          <Element name="excolor">
            <Accordion.Header>
              <h3 className="accordion__itemTitle">Exterior Colours</h3>
              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              <form>
                <div className="form-group forColorcheckbox">
                  {dataAPI.exteriorcolors?.map((item, i) => {
                    return (
                      <>
                        <label
                          key={i}
                          htmlFor={item?.name}
                          className={item?.name}
                          onClick={() => colorSwitch(i)}
                        >
                          <input type="radio" name="gender" id={item?.name} 
                          //onClick={() =>
                            //setextColorImg({ name: "exteriorcolors", color: item?.color })}
                             />
                          <span style={{ background: item?.color }}>
                            <div className="relative">
                              <span
                                className="tick">
                                <i className="fa fa-check1" aria-hidden="true"></i>
                              </span>
                            </div>
                          </span>
                        </label>
                      </>
                    );
                  })}
                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Element name="carbon">
            <Accordion.Header>
              <h3 className="accordion__itemTitle">Carbon Edition</h3>
              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              <form>
                <div className="form-group forColorcheckbox">
                  {dataAPI?.carbonedition?.map((item, i) => {
                    return (
                      <>
                        <label htmlFor="carb1" onClick={()=> colorSwitch(i)}>
                          <input type="radio" name="gender" id="carb1" />
                          <span
                            style={{
                              backgroundImage: `url(${base_url + item?.color})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                            }}
                          >
                            <span className="tick">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </span>
                          </span>
                        </label>


                      </>
                    )
                  })}

                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Element name="wheels">
            <Accordion.Header>
              <h3 className="accordion__itemTitle">WHEELS</h3>

              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              <form>
                <div className="form-group forColorcheckbox wheel">
                  {dataAPI?.carbonedition?.map((item, i) => {
                    return (
                      <>
                        <label htmlFor="wheel1" key={i}>
                          <input type="radio" name="gender" id={item} />
                          <span
                            style={{
                              backgroundImage: `url(${base_url + item})`,
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                            }}
                          >
                            <span className="tick">
                              <i className="fa fa-check" aria-hidden="true"></i>
                            </span>
                          </span>
                        </label>
                      </>

                    )
                  })}


                  <label htmlFor="wheel2">
                    <input type="radio" name="gender" id="wheel2" />
                    <span
                      style={{
                        backgroundImage: `url(${wheel2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <span className="tick">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </span>
                  </label>

                  <label htmlFor="wheel3">
                    <input type="radio" name="gender" id="wheel3" />
                    <span
                      style={{
                        backgroundImage: `url(${wheel3})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <span className="tick">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Element name="incolor">
            <Accordion.Header>
              <h3 className="accordion__itemTitle">INTERIOR COLOURS</h3>

              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              <form>
                <div className="form-group forColorcheckbox wheel">
                  <label htmlFor="interior1">
                    <input type="radio" name="gender" id="interior1" />
                    <span
                      style={{
                        backgroundImage: `url(${interior1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <span className="tick">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </span>
                  </label>

                  <label htmlFor="interior2">
                    <input type="radio" name="gender" id="interior2" />
                    <span
                      style={{
                        backgroundImage: `url(${interior2})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <span className="tick">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </span>
                  </label>

                  <label htmlFor="interior3">
                    <input type="radio" name="gender" id="interior3" />
                    <span
                      style={{
                        backgroundImage: `url(${interior3})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <span className="tick">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </span>
                  </label>

                  <label htmlFor="interior4">
                    <input type="radio" name="gender" id="interior4" />
                    <span
                      style={{
                        backgroundImage: `url(${interior4})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <span className="tick">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </span>
                  </label>

                  <label htmlFor="interior5">
                    <input type="radio" name="gender" id="interior5" />
                    <span
                      style={{
                        backgroundImage: `url(${interior5})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <span className="tick">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                    </span>
                  </label>
                </div>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Element name="adson">
            <Accordion.Header>
              <h3 className="accordion__itemTitle">ADD ONS</h3>

              <div className="accordion__itemIconWrap">
                <svg viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    points="21,8.5 12,17.5 3,8.5 "
                    stroke="#FFF"
                  />
                </svg>
              </div>
            </Accordion.Header>
          </Element>
          <Accordion.Body>
            <div className="accordion__itemContent">
              <form className="ADD-ONS">
                {
                  dataAPI?.addons?.basic?.map((elem, index) => {
                    return (
                      <div className="form-group ONscheckbox" key={index}>
                        <div className="form-divmain">
                          <div className="checkbox-texts">
                            <input

                              type="checkbox"
                              className="inp11"
                              id={index}
                              name={elem.title}
                              onChange={() => {
                                handleCheckAddon(elem, dummyData, setDummyData);
                              }}
                              value={elem.title}
                              checked={elem.checked}
                            />
                            <label htmlFor={index}>
                              {elem.title}
                            </label>

                            <img
                              onClick={() => {
                                handleShow();
                                setSelectedAddon(elem);
                              }}
                              src={require("../../Assets/img/ii.png")}
                              alt=""
                            />
                            <br />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </form>

              <form className="ADD-ONS" >
                {dataAPI?.addons?.advance?.map((item, index) => {
                  return (
                    <>
                      <div className="form-group ADDONcheckbox" key={index}>
                        <div className="form-div">
                          <div className="checkboxConnectivity">
                            <label htmlFor="cocoon10" className="w100">
                              <span htmlFor="cocoon10">
                                {item.title}
                                <span>
                                  <a onClick={handleShowY}>
                                    <img
                                      src={require("../../Assets/img/ii.png")}
                                      alt=""
                                    />
                                  </a>
                                </span>
                              </span>
                            </label>
                            <br />
                          </div>
                        </div>
                      </div>

                      <div className="form-group ONscheckbox year">
                        <div className="form-divmain">
                          <div className="checkbox-texts">
                            <label htmlFor="cocoon11">{item.subTitle}</label>
                            <br />
                          </div>
                        </div>
                      </div>

                      {item.options?.map((item, index) => {

                        return (
                          <div className="form-group ONscheckbox " >
                            <div className="form-divmain">
                              <div className="checkbox-texts">
                                <input
                                  type="checkbox"
                                  className="inp11"
                                  id={index}
                                  name={item.title}
                                  onChange={() => {
                                    // setFields({ ...fields, item: e.target.value });
                                    handleShowModal();
                                    handleCheckAddon(item, years, setYears);
                                    setSelectedAddon(item);
                                  }}
                                  value={item.title}
                                  checked={item.checked}
                                />
                                <label htmlFor={index}>{item.title}</label>
                                <br />
                              </div>
                              <div className="price text-right justify-content-end">
                                <p>{item.price}</p>
                              </div>
                            </div>
                          </div>
                        );

                      })}
                    </>
                  );

                })}
              </form>            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* <ModalMain onhide={} handleAcceptAddon={} handleDeclineAddon={} /> */}

      {/* <!-- Modal --> */}
      {/* <Modal show={show} onHide={handleClose}>
        <div className="modalCustom">
          <div className="modal-dialog edit-mode" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={handleClose}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body inr-popup">
                <div className="row first-row sec-row">
                  <div className="col-lg-6 col-md-6">
                    <div className="car-slider">
                      <Carousel
                        // selectedItem={sliderNum}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={true}
                        showThumbs={false}
                      >
                        {images?.map((img, id) => {
                          return <img key={id} src={img} alt="" />;
                        })}
                      </Carousel>
                    </div>
                  </div>
                  <div className="col lg-6 col-md-6 m-auto">
                    <h2 className="main-text">0.00 INR</h2>
                    <div className="car-descript">
                      <h3>LED Headlights in Black </h3>

                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the.
                      </p>
                    </div>
                    <div className="car-descript">
                      <h3>Dynamic Cornering Light:</h3>
                      <p>
                        Dynamic cornering lights swivel the low beam in
                        accordance with cornering characteristics, depending on
                        the steering angle.
                      </p>
                    </div>
                    <div className="car-descript">
                      <h3>Static Cornering Light:</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the.
                      </p>
                    </div>
                    <div className="car-descript">
                      <h3>Speed-Dependent Headlight Range Control:</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the.
                      </p>
                    </div>
                    <div className="car-descript">
                      <h3>High Beam Assistant:</h3>
                      <p>
                        Dynamic cornering lights swivel the low beam in
                        accordance with cornering characteristics, depending on
                        the steering angle.
                      </p>
                    </div>
                    <div className="car-descript-btn">
                      <a onClick={(e) => handleAcceptAddon(e)}>Accept</a>
                      <a onClick={(e) => handleDeclineAddon(e) }>Decline</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> */}
      <MainModal
        images={images}
        show={show}
        onHide={handleClose}
        onAcceptAddon={handleAcceptAddon}
        onDeclineAddon={handleDeclineAddon}
      />
      <MainModal images={images} show={showY} onHide={handleCloseY} />

      <MainModal
        pricing="0.00 INR"
        headingH3="LED Headlights in Black "
        ModalP=" Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the."
        images={images}
        show={showModal}
        onHide={handleCloseModal}
        onAcceptAddon={handleAcceptAddon}
        onDeclineAddon={handleDeclineAddon} />
    </div>
  );
};

export default Accordian;
