/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

import CommitteeList from "../assets/committee";

const AboutScreen = () => {
  return (
    <>
      <section className="about-one about-one--home section-space">
        <div className="about-one__bg">
          <div className="about-one__bg__border"></div>
          <div
            className="about-one__bg__inner"
            style={{
              backgroundImage: "url(src/assets/images/about/about-1-2.png)",
            }}
          ></div>
        </div>
        <div className="container">
          <div className="row gutter-y-50">
            <div
              className="col-xl-6 wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="about-one__left">
                <div className="about-one__image">
                  <img
                    src="src/assets/images/about/about-1-1.jpg"
                    alt="about"
                    className="about-one__image__one"
                  />
                  <div className="about-one__profile volunteer-profile">
                    <div className="volunteer-profile__inner">
                      <img
                        src="src/assets/images/resources/national-chairman.jpg"
                        alt="Robert Joe Kerry"
                        className="volunteer-profile__image"
                      />
                      <div className="volunteer-profile__info">
                        <h4 className="volunteer-profile__name">
                          <a href="volunteer-details.html">
                            ALHAJI SHEHU MUSA GABAM
                          </a>
                        </h4>
                        <p className="volunteer-profile__designation">
                          National Chairman
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__content">
                <div className="sec-title">
                  <h6 className="sec-title__tagline">ABOUT THE PARTY SDP</h6>
                  <h3 className="sec-title__title">SOCIAL DEMOCRATIC PARTY</h3>
                </div>
                <div
                  className="about-one__text-box wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="about-one__text-box__image">
                    <img
                      src="src/assets/images/Sdplogo_white.png"
                      width="10"
                      alt="about"
                    />
                  </div>
                  <p className="about-one__text">
                    The dignity of the human person and the sanctity of life are
                    non-negotiable.
                    <br />
                    The Nigerian state is currently facing severe challenges.
                    <br />
                    These challenges include:
                  </p>
                  <p className="story-one__text story-one__text--one">
                    • To provide comprehensive support to the youth in Nigeria,
                    focusing on empowering them to overcome poverty and
                    unemployment.
                    <br />
                    • To identify and nurture the talents and skills of the
                    youth and provide them with opportunities to express and
                    develop their abilities.
                    <br />
                    • To offer life support services including basic needs such
                    as food, shelter, healthcare, and access to education for
                    the youth in need.
                    <br />
                    • To create a supportive and inclusive community for the
                    youth that promotes personal growth, resilience, and
                    positive mental health.
                    <br />• To collaborate with stakeholders, including
                    government agencies, non-profit organizations, and local
                    communities, to implement sustainable solutions for youth
                    empowerment in Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="src/assets/images/shapes/about-shape-1-2.png"
          alt="cleenhearts"
          className="about-one__hand"
        />
      </section>

      <section className="team-one section-space">
        <div className="container">
          <div className="team-one__top">
            <div className="row gutter-y-30 align-items-center">
              <div className="col-xxl-8 col-lg-7">
                <div className="sec-title">
                  <h6 className="sec-title__tagline">
                    National Working Committee
                  </h6>
                  <h3 className="sec-title__title">
                    Meet The Team Behind SDP{" "}
                    <span className="sec-title__title__inner">National </span>
                    Committee
                  </h3>
                </div>
              </div>
              <div
                className="col-xxl-4 col-lg-5 wow fadeInRight"
                data-wow-duration="1500ms"
              >
                <p className="team-one__text">
                  Who We Are: Team of volunteers - passionate youths interested
                  in the development of Nigerian youths.
                </p>
              </div>
            </div>
          </div>
          <div
            className="team-one__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--with-shadow cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
            data-owl-options='{
        "items": 3,
        "margin": 30,
        "smartSpeed": 700,
        "loop":true,
        "autoplay": 6000,
        "nav":true,
        "dots":false,
        "navText": ["<span className=\"icon-arrow-left\"></span>","<span className=\"icon-arrow-right\"></span>"],
        "responsive":{
            "0":{
                "items": 1,
                "margin": 20
            },
            "575":{
                "items": 1,
                "margin": 30
            },
            "768":{
                "items": 2,
                "margin": 30
            },
            "992":{
                "items": 3,
                "margin": 30
            },
            "1200":{
                "items": 3,
                "margin": 30
            }
        }
        }'
          >
            {CommitteeList.map((committee) => (
              <div key={committee.id} className="item">
                <div className="team-single">
                  <div className="team-single__image">
                    <img src={committee.image} alt={committee.name} />
                    <div className="team-single__content">
                      <ul className="team-single__social person-social">
                        <li>
                          <a href="https://facebook.com/">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://youtube.com/">
                            <span className="icon-youtube"></span>
                          </a>
                        </li>
                      </ul>
                      <div className="team-single__content__inner">
                        <h4 className="team-single__name">{committee.name}</h4>
                        <p className="team-single__designation">
                          {committee.post}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="main-footer background-white2">
        <div className="main-footer__top">
          <div className="container">
            <div className="row gutter-y-30">
              <div
                className="col-md-12 col-xl-3 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="footer-widget footer-widget--about">
                  <a href="index.html" className="footer-widget__logo">
                    <img
                      src="src/assets/images/Sdplogo_White.png"
                      width="159"
                      alt="SDP_LOGO_WHITE"
                    />
                  </a>
                  <p className="footer-widget__about-text">
                    Over the years, it has remained a dependable political
                    platform. It is the only political party that has won a
                    national election that cut across ethnic, religious,
                    cultural and other divides
                  </p>
                </div>
                {/* <!-- /.footer-widget --> */}
                {/* <a
                  href="https://www.google.com/maps/@23.506657,90.3443647,7z?entry=ttu"
                  className="footer-widget__map"
                >
                  <span className="footer-widget__map__text">View Map</span>
                  <span className="icon-paper-plane"></span>
                </a> */}
              </div>
              {/* <!-- /.col-md-12 col-xl-3 --> */}
              <div
                className="col-xl-3 col-md-5 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="footer-widget footer-widget--contact">
                  <h2 className="footer-widget__title">Get in touch!</h2>
                  {/* <!-- /.footer-widget__title --> */}
                  <ul className="list-unstyled footer-widget__info">
                    <li>
                      {" "}
                      <span className="icon-location"></span>
                      <address>
                        National Headquarters: 17 Nairobi Street, Wuse II, Abuja
                        FCT
                      </address>
                    </li>
                    <li>
                      {" "}
                      <span className="icon-phone"></span>
                      <a href="tel:+(234) 806 152 8228">+(234) 806 152 8228</a>
                    </li>
                    <li>
                      <span className="icon-envelope"></span>
                      <a
                        href="mailto:members@sdpnigeria.org

"
                      >
                        members@sdpnigeria.org
                      </a>
                    </li>
                  </ul>
                  {/* <!-- /.list-unstyled --> */}
                </div>
                {/* <!-- /.footer-widget --> */}
              </div>
              {/* <!-- /.col-xl-3 col-md-5 --> */}
              <div
                className="col-md-3 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">Quick Links</h2>
                  {/* <!-- /.footer-widget__title --> */}
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>The Party</Link>
                    </li>

                    <li>
                      <Link to={"/"}>National Chairman</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>SDP Mission</Link>
                    </li>

                    <li>
                      <Link to={"/about"}>State Chairman</Link>
                    </li>
                  </ul>
                  {/* <!-- /.list-unstyled footer-widget__links --> */}
                </div>
                {/* <!-- /.footer-widget --> */}
              </div>
              {/* !-- /.col-md-3 --> */}

              <div
                className="col-md-4 col-xl-3 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="footer-widget footer-widget--gallery">
                  <h2 className="footer-widget__title">Our Gallery</h2>
                  {/* <!-- /.footer-widget__title --> */}
                  <div className="footer-widget__gallery">
                    {CommitteeList.map((committee) => (
                      <a
                        key={committee.id}
                        href="gallery.html"
                        className="footer-widget__gallery__link"
                      >
                        <img
                          src={committee.image}
                          alt="footer-widget-gallery"
                        />
                        <span className="footer-widget__gallery__icon icon-plus"></span>
                      </a>
                    ))}
                    {/* <!-- /.footer-widget__gallery__link --> */}
                  </div>

                  {/* <!-- /.footer-widget__gallery --> */}
                </div>
                {/* <!-- /.footer-widget --> */}
              </div>
              {/* <!-- /.col-md-4 col-xl-3 --> */}
            </div>
            {/* <!-- /.row --> */}
          </div>
          {/* <!-- /.container --> */}
          <div className="main-footer__top__shape-box">
            <img
              src="src/assets/images/shapes/footer-shape-hand-1-1.png"
              alt="hand"
              className="main-footer__top__shape-one"
            />
            <img
              src="src/assets/images/shapes/footer-shape-hand-1-2.png"
              alt="hand"
              className="main-footer__top__shape-two"
            />
          </div>
          {/* <!-- /.main-footer__top__shape-box --> */}
        </div>
        {/* <!-- /.main-footer__top --> */}
        <div className="main-footer__bottom">
          <div
            className="main-footer__bottom__bg"
            style={{
              background:
                "url(src/assets/images/background/footer-bottom-bg-1-2.png)",
            }}
          ></div>
          {/* <!-- /.main-footer__bottom-bg --> */}
          <div className="container">
            <div className="main-footer__bottom__inner">
              <p className="main-footer__copyright">
                &copy; Copyright <span className="dynamic-year"></span> CodeIcon
                Technologies All Rights Reserved.
              </p>
            </div>
            {/* <!-- /.main-footer__inner --> */}
          </div>
          {/* <!-- /.container --> */}
        </div>
        {/* <!-- /.main-footer__bottom --> */}
      </footer>
      {/* <!-- /.main-footer --> */}
    </>
  );
};

export default AboutScreen;
