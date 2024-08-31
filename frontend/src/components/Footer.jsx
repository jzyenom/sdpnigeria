import React from "react";
import { Link } from "react-router-dom";

import CommitteeList from "../assets/committee";

const Footer = () => {
  return (
    <>
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

export default Footer;
