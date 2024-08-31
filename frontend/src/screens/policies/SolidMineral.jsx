import React from "react";

const SolidMineral = () => {
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
            Solid Mineral & Natural Resources
          </h2>
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

      {/* The Party Beginning */}
      <section className="blog-page blog-page--list section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="blog-card__title">
                Developing our rich Solid-mineral resources to create wealth for
                all
              </h1>

              <div
                className=" blog-card-four__content"
                style={{ marginTop: -1.5 + "em" }}
              >
                <p className="pricing-card blog-card-four__text ">
                  Prior to the emergence of the petroleum industry in the 1970s,
                  solid minerals constituted a key sector of the economy,
                  averaging 12% of the nation’s GDP between 1965 and 1975.
                  However, unfavorable government policies, lack of
                  understanding of the cross-cutting issues and the poor
                  management of state-owned enterprises have led to a
                  precipitous decline in the sector. For instance, the sector’s
                  contribution to GDP fell to 5.62% in 1980, to 0.36% in 2011
                  and to 0.04% in 2016. Presently, very little progress has been
                  achieved in the sector in spite of the new legal and
                  regulatory frameworks that have been deployed with the
                  assistance of the World Bank. In view of its importance to
                  social inclusion and job creation, the SDP Government shall
                  develop this sector into a substantive and critical component
                  of its economic diversification policy.
                  {/* <!-- /.pricing-card__content --> */}
                </p>
                {/* <!-- /.blog-card-four__text --> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row gutter-y-40">
                {/* <!-- /.col-md-12 --> */}

                <div className="col-md-12">
                  <div
                    className="blog-card blog-card-four wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                  >
                    <a href="#" className="blog-card__image">
                      <img
                        src="src/assets/images/Resources.png"
                        alt="social_security_benefits_image"
                      />
                      {/* <div className="blog-card__date">
                                                <span>03</span>
                                                Sep
                                              </div> */}
                      {/* <!-- /.blog-card__date --> */}
                    </a>
                    {/* <!-- /.blog-card__image --> */}

                    {/* <!-- /.blog-card-four__content --> */}
                  </div>
                  {/* <!-- /.blog-card --> */}
                </div>
                {/* <!-- /.col-md-12 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="sec-title">
              <h6 className="sec-title__tagline">
                The vision of an SDP Gorvernment
              </h6>
            </div>
            <div className=" blog-card-four__content">
              <p
                className="pricing-card blog-card-four__text "
                style={{ marginTop: -2 + "em" }}
              >
                A formidable industrial sector, with a fully operational
                Ajaokuta Iron and Steel Complex, driving a new, credible and
                stable political order and economy.
              </p>
            </div>
          </div>

          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.blog-page --> */}
    </>
  );
};

export default SolidMineral;
