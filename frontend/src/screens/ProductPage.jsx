import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";

const ProductPage = () => {
  return (
    <>
      <section className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url('/assets/images/backgrounds/page-header-bg-1-1.jpg')",
          }}
        ></div>
        <div className="container">
          <h2 className="page-header__title">Products Grid</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <Link to="/">Home</Link>
            </li>
            <li>
              <span>Products</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="product-page section-space-bottom">
        <div className="container">
          <div className="row gutter-y-40 justify-content-center">
            <div className="col-lg-12">
              <div className="product__info-top">
                <div className="product__showing-text-box">
                  <p className="product__showing-text">
                    Showing 1–9 of 11 results
                  </p>
                </div>
                <div className="product__showing-sort">
                  <select className="selectpicker" aria-label="default sorting">
                    <option value="default">Default Sorting</option>
                    <option value="view">Sort by view</option>
                    <option value="price">Sort by price</option>
                    <option value="ratings">Sort by ratings</option>
                  </select>
                </div>
              </div>

              <div className="row gutter-y-30">
                <ProductItem
                  imgSrc="src/assets/images/products/product-1-1.jpg"
                  title="Big Sofa"
                  priceRange="$82.00 - $100.00"
                  delay="000ms"
                />
                <ProductItem
                  imgSrc="src/assets/images/products/product-1-2.jpg"
                  title="Big Sofa"
                  priceRange="$78.00 - $90.00"
                  delay="200ms"
                />
                <ProductItem
                  imgSrc="src/assets/images/products/product-1-3.jpg"
                  title="Big Sofa"
                  priceRange="$33.00 - $43.00"
                  delay="400ms"
                />
                <ProductItem
                  imgSrc="src/assets/images/products/product-1-4.jpg"
                  title="Big Sofa"
                  priceRange="$49.00 - $70.00"
                  delay="600ms"
                />
                <ProductItem
                  imgSrc="src/assets/images/products/product-1-5.jpg"
                  title="Big Sofa"
                  priceRange="$31.00 - $50.00"
                  delay="000ms"
                />
                <ProductItem
                  imgSrc="src/assets/images/products/product-1-6.jpg"
                  title="Big Sofa"
                  priceRange="$50.00 - $80.00"
                  delay="200ms"
                />
                <ProductItem
                  imgSrc="src/assets/images/products/product-1-7.jpg"
                  title="Big Sofa"
                  priceRange="$15.00 - $30.00"
                  delay="400ms"
                />
                <ProductItem
                  imgSrc="src/assets/images/products/product-1-8.jpg"
                  title="Big Sofa"
                  priceRange="$27.00 - $67.00"
                  delay="600ms"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <ul className="post-pagination product-page__pagination">
                <li>
                  <Link to="/product-page/previous">
                    <span className="icon-arrow-left"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/product-page/1">01</Link>
                </li>
                <li>
                  <Link to="/product-page/2">02</Link>
                </li>
                <li>
                  <Link to="/product-page/3">03</Link>
                </li>
                <li>
                  <Link to="/product-page/next">
                    <span className="icon-arrow-right"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
