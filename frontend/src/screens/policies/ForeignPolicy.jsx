import React from "react";

const ForeignPolicy = () => {
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
          <h2 className="page-header__title">Foreign Policy</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Foreign Policy</span>
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
                The foreign Policy Thrust of the SDP Government
              </h1>

              <div
                className=" blog-card-four__content"
                style={{ marginTop: -1.5 + "em" }}
              >
                <p className="pricing-card blog-card-four__text ">
                  The SDP shall reposition Nigeria’s foreign policy from an
                  emphasis on bilateral agreements with countries and
                  international organisations to a sector-specific partnership
                  and exchange model, which essentially focuses on the Nigerian
                  economy and the Nigerian people. This direction of foreign
                  policy will propagate government’s actions to deal with
                  defence, security, international political relations and
                  international economic relations on domestic corresponding
                  bases. This purpose in altering or creating a condition
                  outside the sovereign boundaries is to gain national
                  advantage, usually defined in terms of national interest.
                  National image both at home and abroad is an ethical issue. It
                  may appear intangible but the benefits and advantages flowing
                  from a good image are inestimably unquantifiable. The
                  perception of Nigeria by members of the international
                  community, how it pursues relations with others and
                  particularly, the behavior of its citizens at home and abroad
                  can affect the country’s image. Thus, appropriate image making
                  will feature fundamentally in our nation’s foreign policy.
                  Improved cooperation with other national military forces would
                  engender peace regional and globally. Similarly, improved
                  bilateral and multilateral trade relations would enhance
                  trade, technology transfer and military training. These in
                  turn promote the welfare of Nigerians abroad to ensure they
                  are treated with respect and dignity in all circumstances.
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
                        src="src/assets/images/foreign.png"
                        alt="foreign_policy"
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
                A foreign policy thrust that is dynamic, citizen-oriented,
                investment-driven, security conscious that will put Nigeria
                first, elicit patriotism in the citizenry and restore Nigeria’s
                respect and prestige in the assembly of nations. The SDP is in
                favour of a national security architecture that is predicated on
                its national interest as well as its strategic intentions within
                the region and on the global stage. The security of the Nigerian
                people is paramount. As a result an effective and
                result-oriented national security system will be put in place to
                restore and maintain a peaceful environment for its citizenry.
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

export default ForeignPolicy;
