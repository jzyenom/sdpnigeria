import React from "react";

const InternalElection = () => {
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
          <h2 className="page-header__title">
            Internal Election Polling Result
          </h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Internal Election Polling Result</span>
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
              <h6 className="sec-title__tagline">
                SDP Internal Election Polling Result
              </h6>
              {/* <h4 className="sec-title__title">SOCIAL DEMOCRATIC PARTY</h4> */}
            </div>
            <div>
              <p className="">
                SDP Internal Polling Results for EDO and ONDO state can only be
                viewed by SDP Ambassadors. If you are not yet an SDP Ambassador,
                please click{" "}
                <span>
                  <a href="#">Here</a>
                </span>{" "}
                to register.
              </p>
              <p className="">
                SDP Ambassadors, please do click{" "}
                <span>
                  <a href="#">Here</a>
                </span>{" "}
                (2) to view latest polling results for Edo and Ondo States
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternalElection;
