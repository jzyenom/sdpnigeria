import React from "react";
import ComingSoonAnimation from "./../../components/ComingSoon";

const Souvenirs = () => {
  return (
    <>
      <section className="page-header @@extraClassName">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(../src/assets/images/backgroundpage-header-bg-1-1.jpg)",
          }}
        ></div>
        {/* <!-- /.page-header__bg --> */}
        <div className="container">
          <h2 className="page-header__title">Souvenirs</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Souvenirs</span>
            </li>
          </ul>
          {/* <!-- /.thm-breadcrumb list-unstyled --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.page-header --> */}

      {/* <section className="error-404 section-space">
        <div className="container">
          <div className="error-404__content">
            <div className="error-404__content__top">
              <img
                src="src/assets/images/coming_soon.jpg"
                alt="coming_soon"
                className="error-404__image"
              />
            
            </div>

            <h3
              className="sec-title__title error-404__sub-title wow fadeInUp"
              data-wow-duration="1500ms"
            >
              Sorry we can't find that page you’re looking for.
            </h3>

            <a
              href="/"
              className="cleenhearts-btn wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="cleenhearts-btn__icon-box">
                <div className="cleenhearts-btn__icon-box__inner">
                  <span className="icon-duble-arrow"></span>
                </div>
              </div>
              <span className="cleenhearts-btn__text">back to home</span>
            </a>
          </div>

        </div>
      </section> */}
      <ComingSoonAnimation />
    </>
  );
};

export default Souvenirs;
