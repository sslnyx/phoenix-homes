import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./index.scss";

import React from "react";

const NewsModal = ({ show, handleClose, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const ResizePlugin = (slider) => {
    const observer = new ResizeObserver(function () {
      slider.update();
    });

    slider.on("created", () => {
      observer.observe(slider.container);
    });
    slider.on("destroyed", () => {
      observer.unobserve(slider.container);
    });
  };

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      destroyed() {
        setLoaded(false);
      },
    },
    [ResizePlugin]
  );
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Body>
        <div ref={sliderRef} className="keen-slider">
          {slides?.map((imgUrl, i) => (
            <div key={i} className="keen-slider__slide">
              <div className="img-wrapper">
                <img src={imgUrl} />
              </div>
            </div>
          ))}
        </div>

        {instanceRef?.current?.track.details.slides.length > 1 &&
          loaded &&
          instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
      </Modal.Body>
    </Modal>
  );
};

export default NewsModal;
