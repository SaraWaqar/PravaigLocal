import React from "react";
import Modal from "react-bootstrap/Modal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { UseSlider } from "../../Hooks/UseSlider";


const MainModal = (props) => {
  const { images, sliderNum } = UseSlider();

   
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <div className="modalCustom">
          <div className="modal-dialog edit-mode" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={props.onHide}
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
                     
                          <img  src={images} alt="" />;
                 
                    </div>
                  </div>
                  <div className="col lg-6 col-md-6 m-auto">
                  <h2 className="main-text">{props.pricing}</h2>
                    <div className="car-descript">
                      <h3>{props.headingH3} </h3>
                      <p>{props.ModalP} </p>
                    </div>
{/*                     
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
                    </div> */}
                   {
                    props?.onAcceptAddon  && props?.onDeclineAddon ?(
                        <>
                         <div className="car-descript-btn" >
                      <a onClick={(e) => props.onAcceptAddon(e)}>Accept</a>
                      <a onClick={(e) => props.onDeclineAddon(e)}>Decline</a>
                    </div>
                        </>
                    ): null
                   }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MainModal;
