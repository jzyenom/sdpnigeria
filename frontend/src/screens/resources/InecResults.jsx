import React from "react";

const InecResults = () => {
  return (
    <>
      <section className="page-header @@extraClassName">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(../src/assets/images/backgroundpage-header-bg-1-1.jpg)",
          }}
        ></div>
        {/* <!-- /.page-header__bg --> */}
        <div className="container">
          <h2 className="page-header__title">Election Results [INEC]</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Election Results [INEC]</span>
            </li>
          </ul>
          {/* <!-- /.thm-breadcrumb list-unstyled --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.page-header --> */}

      <section className="blog-page blog-page--list section-space">
        <div className="container">
          <div className="about-one__content">
            <div className="sec-title">
              <h6 className="sec-title__tagline">Election Results [INEC]</h6>
              {/* <h4 className="sec-title__title">SOCIAL DEMOCRATIC PARTY</h4> */}
            </div>
            <div>
              <p className="">
                No Election Result is available at this time, please check this
                page anytime from September 20, 2024 to view the official INEC
                result for the Edo State Gubernatorial Election.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InecResults;
