import React, { useState, useEffect } from "react";
import bImg_1 from "../assets/images/SdpBg/bg1.jpg";
import bImg_2 from "../assets/images/SdpBg/bg2.jpg";
import bImg_3 from "../assets/images/SdpBg/bg3.jpg";
import bShap_1 from "../assets/images/shapes/slider-1-shape-1.png";
import bShap_2 from "../assets/images/shapes/slider-1-shape-2.png";

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    const imageList = [bImg_1, bImg_2, bImg_3, bShap_1, bShap_2];
    const loadImages = imageList.map((img) => {
      const image = new Image();
      image.src = img;
      return new Promise((resolve) => {
        image.onload = resolve;
      });
    });

    Promise.all(loadImages).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  return (
    <>
      {imagesLoaded ? (
        <section className="main-slider-one">
          <div className="main-slider-one__wrapper">
            <div
              className="main-slider-one__carousel cleenhearts-owl__carousel owl-carousel"
              data-owl-options='{
                "loop": true,
                "animateOut": "fadeOut",
                "animateIn": "fadeIn",
                "items": 1,
                "autoplay": true,
                "autoplayTimeout": 7000,
                "smartSpeed": 1000,
                "nav": false,
                "navText": ["<span className=\"icon-left-arrow\"></span>","<span className=\"icon-right-arrow\"></span>"],
                "dots": true,
                "margin": 0
              }'
            >
              <div className="item">
                <div className="main-slider-one__item">
                  <div
                    className="main-slider-one__bg"
                    style={{ backgroundImage: `url(${bImg_1})` }}
                  ></div>
                  <div
                    className="main-slider-one__shape-one"
                    style={{ backgroundImage: `url(${bShap_1})` }}
                  ></div>
                  <div
                    className="main-slider-one__shape-two"
                    style={{ backgroundImage: `url(${bShap_2})` }}
                  ></div>
                  <div className="main-slider-one__content">
                    <h4 className="main-slider-one__sub-title">
                      Change is coming..
                    </h4>
                    <h2
                      className="main-slider-one__title"
                      style={{ color: "orange" }}
                    >
                      <span className="main-slider-one__title__text">
                        SDP is Leading a new way{" "}
                      </span>
                      <br />
                      <span className="main-slider-one__title__text">
                        to those need it
                      </span>
                    </h2>
                    <div className="main-slider-one__btn">
                      <a
                        href="become-a-volunteer.html"
                        className="cleenhearts-btn"
                      >
                        <div className="cleenhearts-btn__icon-box">
                          <div className="cleenhearts-btn__icon-box__inner">
                            <span className="icon-duble-arrow"></span>
                          </div>
                        </div>
                        <span className="cleenhearts-btn__text">
                          join with us
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="main-slider-one__item">
                  <div
                    className="main-slider-one__bg"
                    style={{ backgroundImage: `url(${bImg_2})` }}
                  ></div>
                  <div
                    className="main-slider-one__shape-one"
                    style={{ backgroundImage: `url(${bShap_1})` }}
                  ></div>
                  <div
                    className="main-slider-one__shape-two"
                    style={{ backgroundImage: `url(${bShap_2})` }}
                  ></div>
                  <div className="main-slider-one__content">
                    <h5 className="main-slider-one__sub-title">Fix Nigeria </h5>
                    <h2 className="main-slider-one__title">
                      <span className="main-slider-one__title__text">
                        Let’s Get Edo &amp; Ondo Working Again{" "}
                      </span>
                      <br />
                      <span className="main-slider-one__title__text">
                        Let's REBUILD Nigeria together.{" "}
                      </span>
                    </h2>
                    <div className="main-slider-one__btn">
                      <a
                        href="become-a-volunteer.html"
                        className="cleenhearts-btn"
                      >
                        <div className="cleenhearts-btn__icon-box">
                          <div className="cleenhearts-btn__icon-box__inner">
                            <span className="icon-duble-arrow"></span>
                          </div>
                        </div>
                        <span className="cleenhearts-btn__text">
                          join with us
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="main-slider-one__item">
                  <div
                    className="main-slider-one__bg"
                    style={{ backgroundImage: `url(${bImg_3})` }}
                  ></div>
                  <div
                    className="main-slider-one__shape-one"
                    style={{ backgroundImage: `url(${bShap_1})` }}
                  ></div>
                  <div
                    className="main-slider-one__shape-two"
                    style={{ backgroundImage: `url(${bShap_2})` }}
                  ></div>
                  <div className="main-slider-one__content">
                    <h5 className="main-slider-one__sub-title">
                      Let's Fix Edo{" "}
                    </h5>
                    <h2 className="main-slider-one__title">
                      <span className="main-slider-one__title__text">
                        EDO must work for EDO People
                      </span>
                      <br />
                      <span className="main-slider-one__title__text">
                        ...Let's REBUILD Nigeria together.{" "}
                      </span>
                    </h2>
                    <div className="main-slider-one__btn">
                      <a
                        href="become-a-volunteer.html"
                        className="cleenhearts-btn"
                      >
                        <div className="cleenhearts-btn__icon-box">
                          <div className="cleenhearts-btn__icon-box__inner">
                            <span className="icon-duble-arrow"></span>
                          </div>
                        </div>
                        <span className="cleenhearts-btn__text">
                          join with us
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Hero;
