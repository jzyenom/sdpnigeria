import React from "react";

const StatePartyStructure = () => {
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
          <h2 className="page-header__title">State Party Structure</h2>
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
            <div className="col-lg-8">
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
                        src="src/assets/images/SDPLOGO.png"
                        alt="There are many variations of passages of available but majority"
                      />
                      {/* <div className="blog-card__date">
                        <span>03</span>
                        Sep
                      </div> */}
                      {/* <!-- /.blog-card__date --> */}
                    </a>
                    {/* <!-- /.blog-card__image --> */}
                    <div className=" blog-card-four__content">
                      {/* <ul className="list-unstyled blog-card-four__meta">
                        <li>
                          <a href="blog-list.html">
                            <span className="icon-user"></span>
                            Layerdrops
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-right.html">
                            <span className="icon-comment"></span>2 Comments
                          </a>
                        </li>
                      </ul> */}
                      {/* <!-- /.list-unstyled blog-card-four__meta --> */}
                      <p className="pricing-card__list__text">
                        The State Working Committee of the party shall comprise
                        the below-mentioned officers
                      </p>
                      {/* <!-- /.blog-card__title --> */}
                      <p className="pricing-card blog-card-four__text">
                        <div className="pricing-card__content">
                          <ul className="pricing-card__list">
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                The State Chairman
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                The State Vice Chairmen (3)
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                The State Secretary
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                The State Treasurer
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                The Financial Secretary
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                The Publicity Secretary
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                Ineffectual education and healthcare systems;
                                and
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                State Legal Adviser
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                State Organising Secretary
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-duble-arrow"></span>
                              <span className="pricing-card__list__text">
                                State welfare Officer
                              </span>
                            </li>
                          </ul>
                          {/* <!-- /.pricing-card__list --> */}

                          {/* <!-- /.pricing-card__price --> */}
                        </div>
                        {/* <!-- /.pricing-card__content --> */}
                      </p>
                      {/* <!-- /.blog-card-four__text --> */}
                    </div>
                    {/* <!-- /.blog-card-four__content --> */}
                  </div>
                  {/* <!-- /.blog-card --> */}
                </div>
                {/* <!-- /.col-md-12 --> */}
              </div>
              {/* <!-- /.row --> */}
            </div>
            {/* <!-- /.col-lg-8 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.blog-page --> */}
    </>
  );
};

export default StatePartyStructure;
