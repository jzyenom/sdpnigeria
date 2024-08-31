import React from "react";

const AgricultureDevelopment = () => {
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
          <h2 className="page-header__title">Agricultural Development</h2>
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
                Transforming Agricultural Production Systems, Harnessing Water
                Resources And Facilitating Rural Development{" "}
              </h1>

              <div
                className=" blog-card-four__content"
                style={{ marginTop: -1.5 + "em" }}
              >
                <p className="pricing-card blog-card-four__text ">
                  The state of agriculture is one of the clearest signs of
                  underdevelopment in Nigeria today. About 82 million hectares
                  or 40% of land in Nigeria is arable. This constitutes about
                  14% of the 600 million hectares of arable land in Africa,
                  close to 10% of the global total. Yet, Nigeria has lived with
                  the paradox of hunger in the midst of plenty; and food
                  security remains a mirage for most of its citizens. . Data
                  from the Central Bank of Nigeria (CBN) continues to show
                  massive importation of food, especially rice, wheat, sugar and
                  fish, with the four items accounting for a whopping N1
                  trillion loss to the nation annually. It is estimated that
                  Nigeria has about $22 billion food import substitution bill,
                  which is threatening the sustainability of food security and
                  the nation’s foreign exchange earnings.
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
                        src="src/assets/images/agriculture.png"
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
                The vision of an SDP Gorvernment for the sector
              </h6>
            </div>
            <div className=" blog-card-four__content">
              <p
                className="pricing-card blog-card-four__text "
                style={{ marginTop: -2 + "em" }}
              >
                Sustainable agricultural productivity and use of renewable
                natural resources for economic development and well-being of
                Nigerians in a new, credible and stable political order.
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

export default AgricultureDevelopment;
