import React from "react";

const SocialSecurity = () => {
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
          <h2 className="page-header__title">Social Security</h2>
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
                Dignity-driven Social Security Program
              </h1>
              <div className="sec-title">
                <h6 className="sec-title__tagline">SDP AMBASSADOR</h6>
                {/* <h4 className="sec-title__title">SOCIAL DEMOCRATIC PARTY</h4> */}
              </div>
              <div
                className=" blog-card-four__content"
                style={{ marginTop: -2.5 + "em" }}
              >
                <p className="pricing-card blog-card-four__text ">
                  The right to social security marks a distinct stage of
                  development in human civilization. Where it is absent, human
                  beings are unable to live with dignity or freely develop their
                  personality. They are reduced to basic survival; and this
                  produces all the worst consequences for society and future
                  progress.
                  {/* <!-- /.pricing-card__content --> */}
                </p>
                {/* <!-- /.blog-card-four__text --> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row gutter-y-40">
                {/* <!-- /.col-md-12 --> */}

                <div className="col-md-12">
                  <h1 className="blog-card__title">SOCIAL SECURITY BENEFITS</h1>
                  <div
                    className="blog-card blog-card-four wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                  >
                    <a href="#" className="blog-card__image">
                      <img
                        src="src/assets/images/infoG.png"
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

            <div className="col-lg-12">
              <div className=" blog-card-four__content">
                <p className="pricing-card blog-card-four__text ">
                  The 20 most developed economies in the world have effective
                  social security or welfare protection systems, which foster
                  social inclusion, engender uncommon patriotism, lower
                  criminality (including terrorism, insurgency, and other forms
                  of violence), raise productivity and facilitate transformation
                  in nation-building. SDP believes in the power of social
                  security to engender uncommon patriotism and provide a notable
                  anti-dote to corruption, both of which are needed for genuine
                  and sustainable development of Nigeria. To this end, the SDP
                  Government shall deliver to Nigerians a dignity-driven welfare
                  protection system as part of its “human development for nation
                  building” agenda
                  {/* <!-- /.pricing-card__content --> */}
                </p>
                <div className="sec-title">
                  <h6 className="sec-title__tagline">
                    The vision of an SDP Gorvernment
                  </h6>
                </div>
                <p className="pricing-card blog-card-four__text">
                  A Nigerian citizenry protected against socio-economic distress
                  and patriotically committed to building a new, credible and
                  stable political order. SDP intends to solve the social
                  security challenges by providing
                </p>
                {/* <!-- /.blog-card-four__text --> */}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className=" blog-card-four__content">
              <p className="pricing-card blog-card-four__text ">
                • State-sponsored Medical care for all
                <br />
                • Sickness benefit
                <br />
                • Unemployment benefit
                <br />
                • Old age benefit
                <br />
                • Employment-related injury benefit
                <br />
                • Family benefit
                <br />
                • Maternity benefit
                <br />
                • Invalidity benefit
                <br />
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

export default SocialSecurity;
