import React from "react";

const IndustrialGrowth = () => {
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
          <h2 className="page-header__title">Industrial Growth</h2>
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
                Creating Industrial Growth centres for manufacturing,processing
                and Petro-Chemical Industries together with the completion of
                Ajaokuta and steel complex.
              </h1>

              <div
                className=" blog-card-four__content"
                style={{ marginTop: -1.5 + "em" }}
              >
                <p className="pricing-card blog-card-four__text ">
                  In the world’s most industrially developed countries, the
                  steel industry has served as the key ‘generative’ sector. It
                  was the centre of capital accumulation, the basis for a series
                  of linked industries, the source of technological innovations
                  that spread to other sectors, and the model for
                  government-industry relations in the wider economy. Today, 15
                  out of the 20 largest economies in the world are among the top
                  20 crude steel producing countries. Nowhere in this world now
                  can any country industrialise or move its economy forward
                  without a science and technology regime that emphasises iron
                  and steel. Without such emphasis, the country is ‘just
                  dreaming’. Without Ajaokuta Iron and Steel Complex as well as
                  associated industries, being made to be fully operational,
                  Nigeria will dream on fruitlessly. The complex was conceived
                  to be the driving force of Nigeria's quest for technological
                  advancement – just like the steel industry did to foster
                  industrialization for the 20 largest economies in the world.
                  Various factors, including discouragement from some
                  international bodies, stopped the Ajaokuta project in its
                  tracks when it was already 98% completed. Similar
                  international tactics did not dissuade Egypt, which went on to
                  become the second largest producer of crude steel in Africa -
                  second only to South Africa; and is about the 30th country
                  ahead of Nigeria in the world. Leadership failure led Nigeria
                  in the wrong path of disregarding Ajaokuta Steel.
                  Nevertheless, the complex remains the most dormant backbone
                  for industrializaon in Nigeria. Failure to activate it is a
                  bad omen. Even the latest revolution coming from nano-science
                  and nano-technology cannot displace the critical place of
                  Ajaokuta Steel in Nigeria’s industrialization. The essence of
                  the revolution lies in miniaturization, advanced techniques,
                  and cost effectiveness. These benefits enhance, rather than
                  displace, the steel-based industrial activities. For instance,
                  nano-materials, nano-fluids and nano-membranes are used to
                  improve metallic properes and strength in the manufacturing of
                  pipeline materials and in cleaning of oil spillages and
                  environmental remediation.
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

export default IndustrialGrowth;
