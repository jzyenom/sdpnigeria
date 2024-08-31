import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ imgSrc, title, priceRange, delay }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div
        className="product-item wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay={delay}
      >
        <Link to="/product-details" className="product-item__img">
          <img src={imgSrc} alt={title} />
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
            <Link to="/product-details">{title}</Link>
          </h4>
          <div className="product-item__price">
            <span>{priceRange}</span>
          </div>
          <Link
            to="/cart"
            className="cleenhearts-btn cleenhearts-btn--border product-item__link"
          >
            <div className="cleenhearts-btn__icon-box">
              <div className="cleenhearts-btn__icon-box__inner">
                <span className="icon-trolley"></span>
              </div>
            </div>
            <span className="cleenhearts-btn__text">Add to Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
