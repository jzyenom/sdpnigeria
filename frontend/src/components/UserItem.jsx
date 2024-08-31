/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ imgSrc, name, partyGroup, delay }) => {
  const imgContainerStyle = {
    position: "relative",
    width: "100%",
    paddingTop: "100%", // 1:1 Aspect Ratio
    overflow: "hidden",
  };

  const imgSquareStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div
        className="product-item wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay={delay}
      >
        <Link to="/product-details" className="product-item__img">
          <div style={imgContainerStyle}>
            <img src={imgSrc} alt={name} style={imgSquareStyle} />
          </div>
        </Link>
        <div className="product-item__content">
          <div className="cleenhearts-ratings justify-content-center">
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star"></span>
            <span className="icon-star"></span>
          </div>
          <h4 className="product-item__title">
            <Link to="/product-details">{name}</Link>
          </h4>
          <div className="product-item__price">
            <span>{partyGroup}</span>
          </div>
          <Link
            to="/cart"
            className="cleenhearts-btn cleenhearts-btn--border product-item__link"
          >
            <div className="cleenhearts-btn__icon-box">
              <div className="cleenhearts-btn__icon-box__inner">
                <span className="icon-user"></span>
              </div>
            </div>
            <span className="cleenhearts-btn__text">view profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
