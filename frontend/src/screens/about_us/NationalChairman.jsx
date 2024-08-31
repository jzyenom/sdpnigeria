import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NationalChairman = () => {
  return (
    <>
      <section className="page-header @@extraClassName">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(../src/assets/images/about/breadcrumb_chairman.jpg)",
          }}
        ></div>
        {/* <!-- /.page-header__bg --> */}
        <div className="container">
          <h2 className="page-header__title">The National Chairman</h2>
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
                        src="src/assets/images/about/national-chairman.jpg"
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
                        ALHAJI SHEHU MUSA GABAM
                      </h1>
                      <p className="">(Makamam Tilden)</p>
                      {/* <!-- /.blog-card__title --> */}
                      <p className="pricing-card blog-card-four__text">
                        <div className="pricing-card__content">
                          <p>
                            <b>Alhaji Shehu Musa Gabam</b> holds the chieftaincy
                            title of Makamam Tilden. Born on April 20, 1970
                            Alhaji Shehu Gabam is a Nigerian politician and
                            businessman and the current National Chairman of the
                            Social Democratic Party. Alhaji Shehu Gabam became
                            the new Chairman of the Social Democratic Party on
                            June 08, 2022, following the rezoning of SDP
                            leadership by the National Executive Committee of
                            the party.
                          </p>
                          <p>
                            {" "}
                            <i>
                              {" "}
                              <b>Alhaji Shehu Musa Gabam</b>
                            </i>{" "}
                            attended SLB Primary School in Barkin Ladi, Plateau
                            State, for his primary education before proceeding
                            to the CommonWealth College of Commerce in Jos,
                            where he completed his secondary education. He
                            obtained a Diploma in Computer Science from Obafemi
                            Awolowo University Ile-Ife. He later obtained a
                            Bachelor of Science degree in Political Science from
                            the University of Abuja. He holds a Masters degree
                            in International Affairs and Strategic Studies from
                            the Nigerian Defence Academy in Kaduna.
                            Additionally, he has received various certificates
                            in leadership training and public speaking.
                          </p>
                          {/* <!--  --> */}
                          <div className="col-md-6 ">
                            <div className="pricing-card__price text-center">
                              <div className="pricing-card__price__inner">
                                {/* <!-- /.pricing-card__price__title --> */}
                                <h1 className="cleenhearts-btn__text">
                                  READ PROFILE
                                </h1>
                                {/* <!-- /.pricing-card__price__tagline --> */}
                              </div>
                              {/* <!-- /.pricing-card__price__inner --> */}
                              <Link
                                to="/chairman_profile"
                                className="pricing-card__button"
                              >
                                <span className="icon-duble-arrow"></span>
                              </Link>
                              {/* <!-- /.pricing-card__button --> */}
                            </div>
                          </div>
                          {/* <!-- /.pricing-card__price --> */}

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

export default NationalChairman;
