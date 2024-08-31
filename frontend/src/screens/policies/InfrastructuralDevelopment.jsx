import React from "react";

const InfrastructuralDevelopment = () => {
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
          <h2 className="page-header__title">Infrastructural Development</h2>
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
                Building Strategic and Value-Enhancing Infrastructure of
                highways, railways, airways and waterways
              </h1>

              <div
                className=" blog-card-four__content"
                style={{ marginTop: -1.5 + "em" }}
              >
                <p className="pricing-card blog-card-four__text ">
                  The poor construction, management and maintenance of the
                  transport infrastructure have resulted in an overwhelming
                  number of deaths, wastage of human capital and persistent
                  widespread underdevelopment in Nigeria. Inadequate network,
                  poor construction and lack of effective maintenance of roads
                  have led to loss of thousands of lives and low socio-economic
                  development. In 2016 alone, 11,363 road accidents were
                  recorded (National Bureau of Statistics). The poor state of
                  transport infrastructure is not any better in the maritime,
                  railway and aviation sub-sectors. SDP is deeply concerned
                  about this challenging situation in our national life and is
                  strongly resolved to undertake a rescue mission of deploying
                  functional infrastructure
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
                        src="src/assets/images/Railway.png"
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
                Nigeria as Africa’s No.1 Transportation Hub - with the safest
                airspace, best road network, viable railway and most secured
                waterways, to sustain a new, credible and stable political
                order.
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

export default InfrastructuralDevelopment;
