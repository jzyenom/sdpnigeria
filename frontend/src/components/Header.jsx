import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import Logo from "./Logo";

// import "./navbar.css";
import User from "./../../../server/models/User";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [issearchToggle, setIsSearchToggle] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };

  const searchToggle = () => {
    setIsSearchToggle((prev) => !prev);
  };

  return (
    <>
      <div className="topbar-one">
        <div className="container-fluid">
          <div className="topbar-one__inner">
            <ul className="list-unstyled topbar-one__info">
              <li className="topbar-one__info__item">
                <span className="topbar-one__info__icon icon-paper-plane"></span>
                <a
                  href="mailto:members@sdpnigeria.org"
                  style={{ color: "white" }}
                >
                  members@sdpnigeria.org
                </a>
              </li>
              <li className="topbar-one__info__item" style={{ color: "white" }}>
                <span className="topbar-one__info__icon icon-location"></span>
                National Headquarters: 17 Nairobi Street, Wuse II, Abuja FCT
              </li>
            </ul>
            {/* <!-- /.list-unstyled topbar-one__info --> */}
            <div className="topbar-one__right">
              <div className="social-link topbar-one__social">
                <a href="https://facebook.com/">
                  <i className="fab fa-facebook-f" aria-hidden="true"></i>
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter" aria-hidden="true"></i>
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com/" aria-hidden="true">
                  <i className="fab fa-linkedin-in"></i>
                  <span className="sr-only">Linkedin</span>
                </a>
                <a href="https://youtube.com/" aria-hidden="true">
                  <i className="fab fa-youtube"></i>
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
              {/* <!-- /.topbar-one__social --> */}
            </div>
            {/* <!-- /.topbar-one__right --> */}
          </div>
          {/* <!-- /.topbar-one__inner --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.topbar-one --> */}

      <header className="main-header sticky-header sticky-header--normal">
        <div className="container-fluid">
          <div className="main-header__inner">
            <div className="main-header__logo">
              <a href="/">
                <img src="/SDPLOGO.png" alt="SDP_LOGO" width="100" />
              </a>
              <button
                type="button"
                className="main-header__sidebar-btn sidebar-btn__toggler"
                onClick={toggleMobileMenu}
              >
                <span className="icon-grid"></span>
              </button>
            </div>
            <div className="main-header__right">
              <nav className="main-header__nav main-menu main-menu--four">
                <ul className="main-menu__list">
                  {/* Home */}
                  <li>
                    <a href="/">Home</a>
                  </li>
                  {/* About Us */}
                  <li className="dropdown">
                    <Link to="#">About Us</Link>
                    <ul>
                      <li>
                        <Link to="/the_party">The Party</Link>
                      </li>
                      <li>
                        <Link to="/our_party_ideology">Our Party Ideology</Link>
                      </li>
                      <li>
                        <Link to="/national_chairman">National Chairman</Link>
                      </li>
                      <li>
                        <Link to="/national_working_committee">
                          National Working Committee
                        </Link>
                      </li>
                      <li>
                        <Link to="/state_chairman">
                          State Chairman And Secretary
                        </Link>
                      </li>
                      <li>
                        <Link to="/sdp_ambassadors">SDP Ambassador</Link>
                      </li>
                      <li>
                        <Link to="/sdp_champions">SDP Champions </Link>
                      </li>
                      <li>
                        <Link to="/state_party_structure">
                          State Party Structure
                        </Link>
                      </li>
                      <li>
                        <Link to="/sdp_mission">SDP Mission </Link>
                      </li>
                      <li>
                        <Link to="/our_mission_against_hunger">
                          Our Mission Against Hunger{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* Policies */}
                  <li className="dropdown">
                    <Link to="#">Policies</Link>
                    <ul>
                      <li>
                        <Link to="/social_security">Social Security</Link>
                      </li>
                      <li>
                        <Link to="/education_&_human_capital_development">
                          Education & Human Capital Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/economy">Economy</Link>
                      </li>
                      <li>
                        <Link to="/health_for_all">Health For All</Link>
                      </li>
                      <li>
                        <Link to="/youth_development">Youth Development</Link>
                      </li>
                      <li>
                        <Link to="/agriculture_development">
                          Agriculture Development{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/infrastructural_development">
                          Infrastructural Development
                        </Link>
                      </li>
                      <li>
                        <Link to="/industrial_growth">Industrial Growth</Link>
                      </li>
                      <li>
                        <Link to="/solid_mineral-&-natural-resources">
                          Solid Mineral & Natural Resources
                        </Link>
                      </li>
                      <li>
                        <Link to="/foreign_policy">Foreign Policy </Link>
                      </li>
                    </ul>
                  </li>
                  {/* Resources */}
                  <li className="dropdown">
                    <Link to="#">Resources</Link>
                    <ul>
                      <li>
                        <Link to="/register">Member Application [Instant]</Link>
                      </li>
                      <li>
                        <Link to="/download_sdp_party_manifesto">
                          Download SDP Party Manifesto
                        </Link>
                      </li>
                      <li>
                        <Link to="/download_sdp_party_constitution">
                          Download SDP Party Constitution
                        </Link>
                      </li>
                      <li>
                        <Link to="/election_&_campaign_schedules">
                          Election & Campaign Schedules
                        </Link>
                      </li>
                      <li>
                        <Link to="/internal_electiion_&_polling_result">
                          Internal Election & Polling Results
                        </Link>
                      </li>
                      <li>
                        <Link to="/election_results_inec">
                          Election Results [INEC]
                        </Link>
                      </li>
                      <li>
                        <Link to="/sdp_party_souvenirs">
                          SDP Party Souvenirs
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* SDP Studio */}
                  <li className="dropdown">
                    <Link to="#">Policies</Link>
                    <ul>
                      <li>
                        <Link to="/social_studio">Social Studio [LIVE]</Link>
                      </li>
                      <li>
                        <Link to="/press_release">Press Release</Link>
                      </li>
                      <li>
                        <Link to="/sdp_news_&_update">SDP News & Update</Link>
                      </li>
                      <li>
                        <Link to="/sdp_&_me">SDP & ME</Link>
                      </li>
                      <li>
                        <Link to="/upcoming_webinars">Upcoming Webinars</Link>
                      </li>
                      <li>
                        <Link to="/photo_gallery">Photo Gallery</Link>
                      </li>
                      <li>
                        <Link to="/video_gallery">Video Gallery</Link>
                      </li>{" "}
                    </ul>
                  </li>
                  {/* SDP In The Diaspora */}
                  <li className="dropdown">
                    <Link to="#">Policies</Link>
                    <ul>
                      <li>
                        <Link to="/foreign_member_application">
                          Foreign Member Application [Instant]
                        </Link>
                      </li>
                      <li>
                        <Link to="/foreign_chapter_coordinators">
                          Foreign Chapter Coordinators
                        </Link>
                      </li>
                      <li>
                        <Link to="/foreign_chapter_offices">
                          Foreign Chapter Offices
                        </Link>
                      </li>
                      <li>
                        <Link to="/chapter_ambassadors">
                          Chapter Ambassadors
                        </Link>
                      </li>{" "}
                    </ul>
                  </li>

                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>

                  {userInfo ? (
                    <>
                      <li>
                        <Link to="#" onClick={logoutHandler}>
                          Logout
                        </Link>
                      </li>
                      <li>
                        <Link to="/profile">Profile</Link>
                      </li>
                      <li>
                        <Link to="/members">Members</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/register">Register</Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
              <div
                className="mobile-nav__btn mobile-nav__toggler"
                onClick={toggleMobileMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="main-header__cart">
                <Link
                  to="#"
                  className="main-header__search search-toggler"
                  onClick={searchToggle}
                >
                  <span className="icon-search"></span>
                </Link>
              </div>
              <Link to="/donate" className="cleenhearts-btn main-header__btn">
                <div className="cleenhearts-btn__icon-box">
                  <div className="cleenhearts-btn__icon-box__inner">
                    <span className="icon-donate"></span>
                  </div>
                </div>
                <span className="cleenhearts-btn__text">Donate Now</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-nav__wrapper ${isMobileMenuOpen ? "expanded" : ""}`}
      >
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={toggleMobileMenu}
        ></div>
        <div className={`mobile-nav__content`}>
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={toggleMobileMenu}
          >
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img src="SDPLOGO.png" width="100" alt="" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              {/* Home */}
              <li>
                <a href="/">Home</a>
              </li>

              {/* About Us */}
              <li className="dropdown">
                <Link
                  to="#"
                  className={openDropdowns["about_us"] ? "expanded" : ""}
                >
                  About Us
                  <button
                    aria-label="dropdown toggler"
                    onClick={() => toggleDropdown("about_us")}
                  >
                    <i
                      className={
                        openDropdowns["about_us"]
                          ? "fa fa-angle-left"
                          : "fa fa-angle-down"
                      }
                    ></i>
                  </button>
                </Link>
                <ul
                  className={openDropdowns["about_us"] ? "expanded" : ""}
                  style={{
                    display: openDropdowns["about_us"] ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/the_party">The Party</Link>
                  </li>
                  <li>
                    <Link to="/our_party_ideology">Our Party Ideology</Link>
                  </li>
                  <li>
                    <Link to="/national_chairman">National Chairman</Link>
                  </li>
                  <li>
                    <Link to="/national_working_committee">
                      National Working Committee
                    </Link>
                  </li>
                  <li>
                    <Link to="/state_chairman">
                      State Chairman And Secretary
                    </Link>
                  </li>
                  <li>
                    <Link to="/sdp_ambassadors">SDP Ambassador</Link>
                  </li>
                  <li>
                    <Link to="/sdp_champions">SDP Champions </Link>
                  </li>
                  <li>
                    <Link to="/state_party_structure">
                      State Party Structure
                    </Link>
                  </li>
                  <li>
                    <Link to="/sdp_mission">SDP Mission </Link>
                  </li>
                  <li>
                    <Link to="/our_mission_against_hunger">
                      Our Mission Against Hunger{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Policies */}
              <li className="dropdown">
                <Link
                  to="#"
                  className={openDropdowns["policies"] ? "expanded" : ""}
                >
                  Policies{" "}
                  <button
                    aria-label="dropdown toggler"
                    onClick={() => toggleDropdown("policies")}
                  >
                    <i
                      className={
                        openDropdowns["policies"]
                          ? "fa fa-angle-left"
                          : "fa fa-angle-down"
                      }
                    ></i>
                  </button>
                </Link>
                <ul
                  className={openDropdowns["policies"] ? "expanded" : ""}
                  style={{
                    display: openDropdowns["policies"] ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/social_security">Social Security</Link>
                  </li>
                  <li>
                    <Link to="/education_&_human_capital_development">
                      Education & Human Capital Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/economy">Economy</Link>
                  </li>
                  <li>
                    <Link to="/health_for_all">Health For All</Link>
                  </li>
                  <li>
                    <Link to="/youth_development">Youth Development</Link>
                  </li>
                  <li>
                    <Link to="/agriculture_development">
                      Agriculture Development{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/infrastructural_development">
                      Infrastructural Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/industrial_growth">Industrial Growth</Link>
                  </li>
                  <li>
                    <Link to="/solid_mineral-&-natural-resources">
                      Solid Mineral & Natural Resources
                    </Link>
                  </li>
                  <li>
                    <Link to="/foreign_policy">Foreign Policy </Link>
                  </li>
                </ul>
              </li>

              {/* Resources */}
              <li className="dropdown">
                <Link
                  to="#"
                  className={openDropdowns["resources"] ? "expanded" : ""}
                >
                  Resources{" "}
                  <button
                    aria-label="dropdown toggler"
                    onClick={() => toggleDropdown("resources")}
                  >
                    <i
                      className={
                        openDropdowns["resources"]
                          ? "fa fa-angle-left"
                          : "fa fa-angle-down"
                      }
                    ></i>
                  </button>
                </Link>
                <ul
                  className={openDropdowns["resources"] ? "expanded" : ""}
                  style={{
                    display: openDropdowns["resources"] ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/register">Member Application [Instant]</Link>
                  </li>
                  <li>
                    <Link to="/download_sdp_party_manifesto">
                      Download SDP Party Manifesto
                    </Link>
                  </li>
                  <li>
                    <Link to="/download_sdp_party_constitution">
                      Download SDP Party Constitution
                    </Link>
                  </li>
                  <li>
                    <Link to="/election_&_campaign_schedules">
                      Election & Campaign Schedules
                    </Link>
                  </li>
                  <li>
                    <Link to="/internal_electiion_&_polling_result">
                      Internal Election & Polling Results
                    </Link>
                  </li>
                  <li>
                    <Link to="/election_results_inec">
                      Election Results [INEC]
                    </Link>
                  </li>
                  <li>
                    <Link to="/sdp_party_souvenirs">SDP Party Souvenirs</Link>
                  </li>
                </ul>
              </li>

              {/* SDP Studio */}
              <li className="dropdown">
                <Link
                  to="#"
                  className={openDropdowns["studio"] ? "expanded" : ""}
                >
                  SDP Studio{" "}
                  <button
                    aria-label="dropdown toggler"
                    onClick={() => toggleDropdown("studio")}
                  >
                    <i
                      className={
                        openDropdowns["studio"]
                          ? "fa fa-angle-left"
                          : "fa fa-angle-down"
                      }
                    ></i>
                  </button>
                </Link>
                <ul
                  className={openDropdowns["studio"] ? "expanded" : ""}
                  style={{
                    display: openDropdowns["studio"] ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/social_studio">Social Studio [LIVE]</Link>
                  </li>
                  <li>
                    <Link to="/press_release">Press Release</Link>
                  </li>
                  <li>
                    <Link to="/sdp_news_&_update">SDP News & Update</Link>
                  </li>
                  <li>
                    <Link to="/sdp_&_me">SDP & ME</Link>
                  </li>
                  <li>
                    <Link to="/sdp_on_social_media">SDP On Social Media</Link>
                  </li>
                  <li>
                    <Link to="/upcoming_webinars">Upcoming Webinars</Link>
                  </li>
                  <li>
                    <Link to="/photo_gallery">Photo Gallery</Link>
                  </li>
                  <li>
                    <Link to="/video_gallery">Video Gallery</Link>
                  </li>
                </ul>
              </li>

              {/* SDP In The Diaspora */}
              <li className="dropdown">
                <Link
                  to="#"
                  className={openDropdowns["diaspora"] ? "expanded" : ""}
                >
                  SDP In The Diaspora{" "}
                  <button
                    aria-label="dropdown toggler"
                    onClick={() => toggleDropdown("diaspora")}
                  >
                    <i
                      className={
                        openDropdowns["diaspora"]
                          ? "fa fa-angle-left"
                          : "fa fa-angle-down"
                      }
                    ></i>
                  </button>
                </Link>
                <ul
                  className={openDropdowns["diaspora"] ? "expanded" : ""}
                  style={{
                    display: openDropdowns["diaspora"] ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/foreign_member_application">
                      Foreign Member Application [Instant]
                    </Link>
                  </li>
                  <li>
                    <Link to="/foreign_chapter_coordinators">
                      Foreign Chapter Coordinators
                    </Link>
                  </li>
                  <li>
                    <Link to="/foreign_chapter_offices">
                      Foreign Chapter Offices
                    </Link>
                  </li>
                  <li>
                    <Link to="/chapter_ambassadors">Chapter Ambassadors</Link>
                  </li>
                  {/* <li className="dropdown">
                    <Link to="#">
                      Donation Details
                      <button
                        aria-label="dropdown toggler"
                        onClick={() => toggleDropdown("donation-details")}
                      >
                        <i className="fa fa-angle-down"></i>
                      </button>
                    </Link>
                    <ul
                      className={
                        openDropdowns["donation-details"] ? "expanded" : ""
                      }
                      style={{
                        display: openDropdowns["donation-details"]
                          ? "block"
                          : "none",
                      }}
                    >
                      <li>
                        <Link to="/donation-details">No sidebar</Link>
                      </li>
                      <li>
                        <Link to="/donation-details-left">Left sidebar</Link>
                      </li>
                      <li>
                        <Link to="/donation-details-right">Right sidebar</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      Donate Now
                      <button
                        aria-label="dropdown toggler"
                        onClick={() => toggleDropdown("donate-now")}
                      >
                        <i className="fa fa-angle-down"></i>
                      </button>
                    </Link>
                    <ul
                      className={openDropdowns["donate-now"] ? "expanded" : ""}
                      style={{
                        display: openDropdowns["donate-now"] ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link to="/donate">No sidebar</Link>
                      </li>
                      <li>
                        <Link to="/donate-left">Left sidebar</Link>
                      </li>
                      <li>
                        <Link to="/donate-right">Right sidebar</Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>

              <li>
                <Link to="/contact">Contact Us</Link>
              </li>

              {userInfo ? (
                <>
                  <li>
                    <Link to="#" onClick={logoutHandler}>
                      Logout
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/members">Members</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@cleenhearts.com">
                needhelp@cleenhearts.com
              </a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:(406)555-0120">(406) 555-0120</a>
            </li>
          </ul>

          <div className="mobile-nav__social">
            <a href="https://facebook.com/">
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter" aria-hidden="true"></i>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://linkedin.com/" aria-hidden="true">
              <i className="fab fa-linkedin-in"></i>
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="https://youtube.com/" aria-hidden="true">
              <i className="fab fa-youtube"></i>
              <span className="sr-only">Youtube</span>
            </a>
          </div>
        </div>
      </div>

      {/* <!-- /.search-popup --> */}

      <div
        className={`search-popup search-popup--two ${issearchToggle ? "active" : ""}`}
      >
        <div
          className="search-popup__overlay search-toggler"
          onClick={searchToggle}
        ></div>
        {/* <!-- /.search-popup__overlay --> */}
        <div className="search-popup__content">
          <form
            role="search"
            method="get"
            className="search-popup__form"
            action="#"
          >
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="cleenhearts-btn"
            >
              <span>
                <i className="icon-search"></i>
              </span>
            </button>
          </form>
        </div>
        {/* <!-- /.search-popup__content --> */}
      </div>
    </>
  );
};

export default Header;
