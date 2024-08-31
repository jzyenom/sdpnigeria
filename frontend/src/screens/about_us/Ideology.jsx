import React from "react";

const Ideology = () => {
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
          <h2 className="page-header__title">Our Party Ideology</h2>
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
                      <h1 className="blog-card__title">
                        Social Democratic Party
                      </h1>
                      {/* <!-- /.blog-card__title --> */}
                      <p className="pricing-card blog-card-four__text">
                        <div className="pricing-card__content">
                          <ul className="pricing-card__list">
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The triumph of social justice
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The nobility of human dignity
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The sacredness of human life
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The harmony of fairness and equity
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The power of working in solidarity to promote
                                social cohesion
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The excellence of structural balance and good
                                governance, driven by good leadership
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The wisdom of reforms, inclusive and sustainable
                                development, far beyond mere growth
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The dignity of wealth creaon to alleviate
                                poverty
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The splendour of prosperity for all within a
                                welfare state
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The imperave of democracy; and
                              </span>
                            </li>
                            <li>
                              <span className="pricing-card__list__icon icon-star"></span>
                              <span className="pricing-card__list__text">
                                The security of peace with justice
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

export default Ideology;
