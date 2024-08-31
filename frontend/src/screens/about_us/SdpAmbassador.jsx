import React from "react";

const SdpAmbassador = () => {
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
          <h2 className="page-header__title">SDP Ambassador</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="index.html">Home</a>
            </li>
            <li>
              <span>our news</span>
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
              <h6 className="sec-title__tagline">SDP AMBASSADOR</h6>
              {/* <h4 className="sec-title__title">SOCIAL DEMOCRATIC PARTY</h4> */}
            </div>
            <div>
              <p className="">
                An SDP Ambassador is a Gold-Card carrying member of the Social
                Democratic Party. The Gold Card identifies our special members
                as financiers and contributors to the ideal of the SDP. The
                party ambassador is not only a member in good standing but a
                financially committed member. The Gold Membership Card is
                N25,000 Or $50 per annum and affords the holder significant
                premium at party events aside other special privileges attached.
                For more enquiry on becoming an SDP Ambassador, please fill out
                this short form. The National Special Membership Team will be in
                touch once your request is received.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SdpAmbassador;
