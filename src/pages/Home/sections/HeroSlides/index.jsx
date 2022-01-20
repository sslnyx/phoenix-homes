import { useState } from "react";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import slides from "./slideData";
import { ThumbnailPlugin } from "./plugin";

import "keen-slider/keen-slider.min.css";
import "./index.scss";

const HeroSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      //   rtl: true,
      // initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    []
  );

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
      vertical: true,
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="hero-slides bg-blue">
      <div className="content-w h-100 slider-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {slides.map(({ img, name, des }, i) => (
            <div className="keen-slider__slide" key={i}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>

        <div className="slider-side-control">
          <div ref={thumbnailRef} className="keen-slider thumbnails">
            {slides.map(({ img }, i) => (
              <div key={i} className={`keen-slider__slide number-slide${i}`}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>

          {loaded && instanceRef.current && (
            <div className="dataBar">
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
                      className={
                        "dot" + (currentSlide === idx ? " active" : "")
                      }
                    ></button>
                  );
                })}
              </div>
              <div className="currentSlide">
                <span>{`0${currentSlide + 1}`}</span> / 04
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
