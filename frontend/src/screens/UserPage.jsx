import React from "react";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../slices/usersApiSlice";

import UserItem from "./../components/UserItem";

const UserPage = () => {
  const {
    data: users = [],
    isError,
    isLoading,
    error,
  } = useGetUsersQuery() || {};

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
          <h2 className="page-header__title">Members Grid</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <Link to="/">Home</Link>
            </li>
            <li>
              <span>Members</span>
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
                {!isLoading ? (
                  users?.length > 0 &&
                  users?.map((user) => (
                    <>
                      <UserItem
                        key={user._id}
                        imgSrc={user.avatar}
                        name={user.name}
                        partyGroup={user.partyGroup}
                        delay="000ms"
                      />
                    </>
                  ))
                ) : (
                  <>
                    <h1>No User Found</h1>
                  </>
                )}
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

export default UserPage;
