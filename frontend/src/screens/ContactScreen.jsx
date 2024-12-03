import React from "react";
import Footer from "../components/Footer";

const ContactScreen = () => {
  return (
    <>
      {" "}
      <section className="page-header @@extraclassNameName">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg-1-1.jpg)",
          }}
        ></div>
        {/* <!-- /.page-header__bg --> */}
        <div className="container">
          <h2 className="page-header__title">Contact Us</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home">
                </i> <a href="/">Home</a>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
          </ul>
          {/* <!-- /.thm-breadcrumb list-unstyled --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.page-header --> */}
      <section className="contact-one section-space @@extraclassNameName">
        <div className="container">
          <div className="row gutter-y-30">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="contact-one__map">
                <div className="google-map contact-one__google__map">
                  <iframe
                    title="template google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                    className="map__contact-one__google__map"
                    allowfullscreen
                  ></iframe>
                </div>
                {/* <!-- /.google-map --> */}
                <div className="contact-one__info">
                  <div className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <span className="icon-location"></span>
                    </div>
                    {/* <!-- /.contact-one__info__icon --> */}
                    <div className="contact-one__info__content">
                      <h4 className="contact-one__info__title">
                        Mailing Address
                      </h4>
                      <address className="contact-one__info__text">
                        National Headquarters: 17 Nairobi Street, Wuse II, Abuja
                        FCT
                      </address>
                    </div>
                    {/* <!-- /.contact-one__info__content --> */}
                  </div>
                  {/* <!-- /.contact-one__info__item --> */}
                  <div className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <span className="icon-phone"></span>
                    </div>
                    {/* <!-- /.contact-one__info__icon --> */}
                    <div className="contact-one__info__content">
                      <h4 className="contact-one__info__title">
                        Quick Contact
                      </h4>
                      <a
                        href="tel:(406)555-0120"
                        className="contact-one__info__text contact-one__info__text--link"
                      >
                        +(234) 806 152 8228
                      </a>
                    </div>
                    {/* <!-- /.contact-one__info__content --> */}
                  </div>
                  {/* <!-- /.contact-one__info__item --> */}
                  <div className="contact-one__info__item">
                    <div className="contact-one__info__icon">
                      <span className="icon-envelope"></span>
                    </div>
                    {/* <!-- /.contact-one__info__icon --> */}
                    <div className="contact-one__info__content">
                      <h4 className="contact-one__info__title">
                        support email
                      </h4>
                      <a
                        href="mailto:members@sdpnigeria.org"
                        className="contact-one__info__text contact-one__info__text--link"
                      >
                        members@sdpnigeria.org
                      </a>
                    </div>
                    {/* <!-- /.contact-one__info__content --> */}
                  </div>
                  {/* <!-- /.contact-one__info__item --> */}
                </div>
                {/* <!-- /.contact-one__info --> */}
              </div>
              {/* <!-- /.contact-one__map --> */}
            </div>
            {/* <!-- /.col-lg-6 --> */}
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="contact-one__form">
                <div
                  className="contact-one__form__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/contact-bg-1-1.png)",
                  }}
                ></div>
                {/* <!-- /.contact-one__form__bg --> */}
                <h2 className="contact-one__title">Leave us a Message</h2>
                <form
                  className="contact-one__form__inner contact-form-validated form-one wow fadeInUp"
                  data-wow-duration="1500ms"
                  action="https://bracketweb.com/cleenhearts-html/inc/sendemail.php"
                >
                  <div className="row gutter-y-20">
                    <div className="col-12">
                      <div className="form-one__control">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="enter your name"
                          className="form-one__control__input"
                        />
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-12 --> */}
                    <div className="col-12">
                      <div className="form-one__control">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="your email"
                          className="form-one__control__input"
                        />
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-12 --> */}
                    <div className="col-12">
                      <div className="form-one__control">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="phone no"
                          className="form-one__control__input"
                        />
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-12 --> */}
                    <div className="col-12">
                      <div className="form-one__control">
                        <select
                          className="selectpicker"
                          aria-label="Default select example"
                        >
                          <option selected="">subject</option>
                          <option value="1">Volunteer</option>
                          <option value="2">Donations</option>
                          <option value="3">Foods Support</option>
                          <option value="4">Education Support</option>
                          <option value="4">Medical Support</option>
                          <option value="4">Sports Support</option>
                        </select>
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-12 --> */}
                    <div className="col-12">
                      <div className="form-one__control">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="write message . . ."
                          className="form-one__control__input form-one__control__message"
                        ></textarea>
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-12 --> */}
                    <div className="col-12">
                      <div className="contact-one__btn-box form-one__control">
                        <button
                          type="submit"
                          className="cleenhearts-btn @@extraclassNameNameBtn"
                        >
                          <span className="cleenhearts-btn__icon-box">
                            <span className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </span>
                          </span>
                          <span className="cleenhearts-btn__text">
                            send message
                          </span>
                        </button>
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-12 --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </form>
                {/* <!-- /.contact-one__form__inner --> */}
              </div>
              {/* <!-- /.contact-one__form --> */}
            </div>
            {/* <!-- /.col-lg-6 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.contact-one --> */}
      <section className="subscribe">
        <div
          className="subscribe__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/subscribe-bg-1-1.jpg)",
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
      <Footer />
    </>
  );
};

export default ContactScreen;
