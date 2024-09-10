import React from "react";

const Economy = () => {
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
          <h2 className="page-header__title">Economy</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
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
                Quality, affordable healthcare delivery and health insurance{" "}
              </h1>

              <div
                className=" blog-card-four__content"
                style={{ marginTop: -1.5 + "em" }}
              >
                <p className="pricing-card blog-card-four__text ">
                  The Nigerian economy requires immediate and urgent
                  intervention towards sustainable and inclusive growth. Any
                  meaningful economic recovery must re-establish growth in
                  purchasing power, restore demand and consumer spending and
                  ultimately create new capital. The SDP will pay critical
                  attention to the economy, as the economy is directly
                  proportional to the livelihood and welfare of Nigerians. The
                  SDP will seek a departure from the current economic models
                  that stiffle growth and move towards an expansionary economic
                  model that will return the economy to a sustainable growth
                  path. This will be achieved through the overhaul of the
                  current fiscal and monetary policies and the implementation of
                  the party’s economic policies that will promote real sector
                  development and growth, driven by investments, production and
                  stable macroeconomic regimes.
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
                        src="src/assets/images/economy.png"
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
                SDP vision is to foster a progressive, productive and
                people-driven national economy transition that is inclusive,
                sustainable and pro-growth.
              </p>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="sec-title">
              <h6 className="sec-title__tagline">The New Economic Direction</h6>
            </div>
            <div className=" blog-card-four__content">
              <p
                className="pricing-card blog-card-four__text "
                style={{ marginTop: -2 + "em" }}
              >
                The SDP government will replace the present dysfunctional Fiscal
                Responsibility Act which is narrow and has prevented the country
                from implementing a broad-based long-term planning and growth
                with the Fiscal Expansionary Act [FEA]. This fundamental new
                economic policy direction of the SDP will engender sustained
                economic growth and enthrone a more broad-based and inclusive
                economy. Recent economic nominal figures have shown that the
                Fiscal Responsibility Act of 2007 is unable to ensure
                sustainable economic growth and development over time.
                Consequently, the Nigerian economy has been vulnerable to
                international shocks and commodities volatilities. Evidently,
                this is why Nigeria has little to show for its huge oil revenues
                and made long-term planning impossible. The Fiscal Expansionary
                Act (FEA), when in place will not only promote high economic
                growth but also foster all-inclusive growth. In nominal terms,
                Nigeria’s fiscal expenditure is grossly low in ratio to its GDP,
                especially when compared to similar peer economies. This
                essentially makes the case for Nigeria to engage in a high
                fiscal spending model, particularly given that the country has
                the highest infrastructure deficit among peer economies. The FRA
                essentially replicates ‘fiscal austerity’ for capital
                expenditure whereas big government is driven by expansive
                recurrent expenditure, which seems to trigger expensive domestic
                debts and high level of poverty experienced in Nigeria in the
                midst of over $600 billion in oil revenue during the decade.
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

export default Economy;
