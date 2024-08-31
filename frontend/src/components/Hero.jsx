// import "../assets/css/agrion.css";

const Hero = () => {
  // const image1 = () => <img src="../src/assets/images/slider_bg2.jpg" />;
  return (
    // <!-- Start slider-area -->
    <>
      {/* <!--Main Slider Start--> */}
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
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/slider-bg1.jpg)",
                  }}
                ></div>
                <div
                  className="main-slider-one__shape-one"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/shape/slider-1-shape-1.png)",
                  }}
                ></div>
                <div
                  className="main-slider-one__shape-two"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/shape/slider-1-shape-2.png)",
                  }}
                ></div>
                <div className="main-slider-one__content">
                  <h4 className="main-slider-one__sub-title">
                    Change is coming..
                  </h4>
                  {/* <!-- slider-sub-title --> */}
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
                  {/* <!-- slider-title --> */}
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
                    {/* <!-- slider-btn --> */}
                    <div className="volunteer-group">
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-1.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-2.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-3.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                    </div>
                    {/* <!-- /.volunteer-group --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- item --> */}
            <div className="item">
              <div className="main-slider-one__item">
                <div
                  className="main-slider-one__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/slider-bg2.jpg)",
                  }}
                ></div>
                <div
                  className="main-slider-one__shape-one"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/shape/slider-1-shape-1.png)",
                  }}
                ></div>
                <div
                  className="main-slider-one__shape-two"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/shape/slider-1-shape-2.png)",
                  }}
                ></div>
                <div className="main-slider-one__content">
                  <h5 className="main-slider-one__sub-title">Fix Nigeria </h5>
                  {/* <!-- slider-sub-title --> */}
                  <h2 className="main-slider-one__title">
                    <span className="main-slider-one__title__text">
                      Let’s Get Edo &amp; Ondo Working Again{" "}
                    </span>
                    <br />
                    <span className="main-slider-one__title__text">
                      Let's REBUILD Nigeria together.{" "}
                    </span>
                  </h2>
                  {/* <!-- slider-title --> */}
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
                    {/* <!-- slider-btn --> */}
                    <div className="volunteer-group">
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-1.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-2.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-3.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                    </div>
                    {/* <!-- /.volunteer-group --> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- item --> */}
            <div className="item">
              <div className="main-slider-one__item">
                <div
                  className="main-slider-one__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/slider-1-3.jpg)",
                  }}
                ></div>
                <div
                  className="main-slider-one__shape-one"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/shape/slider-1-shape-1.png)",
                  }}
                ></div>
                <div
                  className="main-slider-one__shape-two"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/shape/slider-1-shape-2.png)",
                  }}
                ></div>
                <div className="main-slider-one__content">
                  <h5 className="main-slider-one__sub-title">Lets Fix Edo </h5>
                  {/* <!-- slider-sub-title --> */}
                  <h2 className="main-slider-one__title">
                    <span className="main-slider-one__title__text">
                      EDO must work for EDO People
                    </span>
                    <br />
                    <span className="main-slider-one__title__text">
                      ...Let's REBUILD Nigeria together.{" "}
                    </span>
                  </h2>
                  {/* <!-- slider-title --> */}
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
                    {/* <!-- slider-btn --> */}
                    <div className="volunteer-group">
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-1.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-2.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                      <a
                        href="volunteer-details.html"
                        className="volunteer-group__link"
                      >
                        <img
                          src="src/assets/images/volunteer/volunteer-image-3.png"
                          alt="volunteer"
                          className="volunteer-group__image"
                        />
                      </a>
                      {/* <!-- /.volunteer-group__link --> */}
                    </div>
                    {/* <!-- /.volunteer-group --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- item --> */}
          </div>
        </div>
      </section>
      {/* <!-- main-slider-end --> */}

      {/* <!--Main Slider End--> */}
    </>
  );
};

export default Hero;
