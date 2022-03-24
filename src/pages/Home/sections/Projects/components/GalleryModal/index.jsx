import { useState, useEffect } from "react";
import { Modal, Spinner } from "react-bootstrap";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ThumbnailPlugin, ResizePlugin } from "./galleryPlugins";
import Arrow from "./Arrow";
import "./index.scss";

const GalleryModal = ({ galleryArr, gshow, handleClose, loadingGallery }) => {
  // console.log(projectGallery);
  const [loadedImg, setLoadedImg] = useState([]);

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentMainSlide, setCurrentMainSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged(slider) {
        setCurrentMainSlide(slider.track.details.rel);
      },
    },
    [ResizePlugin()]
  );

  const [thumbnailRef, thumbInst] = useKeenSlider(
    {
      animationEnded(s) {
        setCurrentSlide(s.track.details.rel);
      },
      slides: {
        perView: 4,
        spacing: 10,
      },
      created(s) {
        setLoaded(true);
      },
      destroyed() {
        setLoaded(false);
      },
    },
    [ResizePlugin(), ThumbnailPlugin(instanceRef)]
  );

  useEffect(() => {
    const new_loaded = [...loadedImg];

    // const slides = []

    Array(5)
      .fill(null)
      .forEach((el, i) => {
        !new_loaded[currentSlide + i]
          ? ((new_loaded[currentSlide + i] = true), setLoadedImg(new_loaded))
          : "";
      });

    console.log(new_loaded);
  }, [currentSlide]);

  // useEffect(() => {
  //   return () => {
  //     console.log("close modal");
  //     galleryArr = [];
  //   };
  // }, [galleryArr]);

  // console.log(galleryArr)

  return (
    <Modal centered show={gshow} onHide={handleClose}>
      <Modal.Body>
        {!loadingGallery ? (
          <div className="gallery-slider">
            <div ref={sliderRef} className="keen-slider main-slider">
              {galleryArr?.map((imgUrl, i) => (
                <div key={i} className="keen-slider__slide">
                  {loadedImg[i] ? <img src={imgUrl} /> : ""}
                </div>
              ))}
            </div>

            <div className="thumbnail-wrapper d-flex align-items-center">
              <div ref={thumbnailRef} className="keen-slider thumbnail">
                {galleryArr?.map((imgUrl, i) => (
                  <div key={i} className="keen-slider__slide lazy__slide">
                    {loadedImg[i] ? (
                      <img src={imgUrl} />
                    ) : (
                      <div
                        style={{
                          background: "#ccc",
                          width: "100%",
                          height: "150px",
                        }}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              {loaded && thumbInst.current && (
                <>
                  <Arrow
                    left
                    onClick={(e) =>
                      e.stopPropagation() || thumbInst.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <Arrow
                    onClick={(e) =>
                      e.stopPropagation() || thumbInst.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      thumbInst.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="gallery-loadder">
            <Spinner animation="grow" />
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default GalleryModal;
