import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import Logo from "./Logo";

// import "./navbar.css";

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
              <Link to="/">
                <img src="/SDPLOGO.png" alt="SDP_LOGO" width="100" />
              </Link>
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
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">Donations</Link>
                    <ul>
                      <li>
                        <Link to="/donations-grid">Donations Grid</Link>
                      </li>
                      <li>
                        <Link to="/donations-list">Donations List</Link>
                      </li>
                      <li>
                        <Link to="/donations-carousel">
                          Donations Carousel 01
                        </Link>
                      </li>
                      <li>
                        <Link to="/donations-carousel-2">
                          Donations Carousel 02
                        </Link>
                      </li>
                      <li className="dropdown">
                        <Link to="#">Donation Details</Link>
                        <ul>
                          <li>
                            <Link to="/donation-details">No sidebar</Link>
                          </li>
                          <li>
                            <Link to="/donation-details-left">
                              Left sidebar
                            </Link>
                          </li>
                          <li>
                            <Link to="/donation-details-right">
                              Right sidebar
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link to="#">Donate Now</Link>
                        <ul>
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
                      </li>
                    </ul>
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="dropdown">
                <Link
                  to="#"
                  className={openDropdowns["donations"] ? "expanded" : ""}
                >
                  Donations
                  <button
                    aria-label="dropdown toggler"
                    onClick={() => toggleDropdown("donations")}
                  >
                    <i className="fa fa-angle-down"></i>
                  </button>
                </Link>
                <ul
                  className={openDropdowns["donations"] ? "expanded" : ""}
                  style={{
                    display: openDropdowns["donations"] ? "block" : "none",
                  }}
                >
                  <li>
                    <Link to="/donations-grid">Donations Grid</Link>
                  </li>
                  <li>
                    <Link to="/donations-list">Donations List</Link>
                  </li>
                  <li>
                    <Link to="/donations-carousel">Donations Carousel 01</Link>
                  </li>
                  <li>
                    <Link to="/donations-carousel-2">
                      Donations Carousel 02
                    </Link>
                  </li>
                  <li className="dropdown">
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
                  </li>
                </ul>
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
