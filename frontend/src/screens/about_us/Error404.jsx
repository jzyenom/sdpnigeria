import React from "react";

const Error404 = () => {
  return (
    <>
      <section className="error-404 section-space">
        <div className="container">
          <div className="error-404__content">
            <div className="error-404__content__top">
              <img
                src="src/assets/images/error/error-image-1-1.png"
                alt="error-image"
                className="error-404__image"
              />
              <h2 className="error-404__title error-404__title--one">4</h2>
              <h2 className="error-404__title error-404__title--two">0</h2>
              <h2 className="error-404__title error-404__title--three">4</h2>
            </div>
            {/* <!-- /.error-404__content__top --> */}
            <h3
              className="sec-title__title error-404__sub-title wow fadeInUp"
              data-wow-duration="1500ms"
            >
              Sorry we can't find that page you’re looking for.
            </h3>
            {/* <!-- /.error-404__sub-title --> */}
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
          {/* <!-- /.error-404__content --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.error-404 --> */}

      <section className="subscribe">
        <div
          className="subscribe__bg"
          style={{
            backgroundImage:
              "url(../src/assets/images/background/subscribe-bg-1-1.jpg)",
          }}
        ></div>
        {/* <!-- /.subscribe__bg --> */}
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="subscribe__content">
                <span className="subscribe__title-image icon-email"></span>
                <h2 className="subscribe__title">Subscribe Now</h2>
              </div>
              {/* <!-- /.subscribe__content --> */}
            </div>
            {/* <!-- /.col-lg-5 --> */}
            <div className="col-lg-7 wow fadeInUp">
              <form
                action="#"
                data-url="MAILCHIMP_FORM_URL"
                className="subscribe__form mc-form"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <input
                  type="email"
                  name="EMAIL"
                  id="subscribe"
                  placeholder="enter your email"
                  className="subscribe__form__input"
                />
                <button type="submit" className="subscribe__form__btn">
                  <span className="subscribe__form__btn__text">
                    Subscribe now
                  </span>{" "}
                  <span className="subscribe__form__btn__icon icon-paper-plane"></span>
                </button>
              </form>
              {/* <!-- /.subscribe__form --> */}
              <div className="mc-form__response"></div>
              {/* <!-- /.mc-form__response --> */}
            </div>
            {/* <!-- /.col-lg-7 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
        <div className="subscribe__shape">
          <div className="subscribe__shape__one"></div>
          {/* <!-- /.subscribe__shape__one --> */}
          <div className="subscribe__shape__two"></div>
          {/* <!-- /.subscribe__shape__one --> */}
        </div>
        {/* <!-- /.subscribe__shape --> */}
      </section>
      {/* <!-- /.subscribe --> */}
    </>
  );
};

export default Error404;
