import React from "react";

const YouthDevelopment = () => {
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
          <h2 className="page-header__title">Youth Development</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Youth Development</span>
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
                Empowering youth development and inclusiveness to raise viable,
                credible and efficient replacement generation{" "}
              </h1>

              <div
                className=" blog-card-four__content"
                style={{ marginTop: -1.5 + "em" }}
              >
                <p className="pricing-card blog-card-four__text ">
                  The Nigeria’s population is said to have reached about 198
                  million people (NpoC, 2018). The National Population
                  Commission states that about half of this number is made up of
                  youth, defined as individuals between the 15 and 34 years of
                  age. These young people should ordinarily be part of the
                  productive sector of the economy that will engender growth and
                  development. They constitute the greatest asset of the nation
                  and can help drive economic development with their youthful
                  strength. Any nation that fails to recognize the potentials of
                  its youth endangers its future. Therefore, youth development
                  and inclusiveness are key aspects of the SDP programme in
                  ensuring and raising a replacement generation for our country.
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
                      <img src="src/assets/images/youth.png" alt="youth" />
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
                The vision of an SDP Gorvernment for the Youth
              </h6>
            </div>
            <div className=" blog-card-four__content">
              <p
                className="pricing-card blog-card-four__text "
                style={{ marginTop: -2 + "em" }}
              >
                An empowered youth, is a ready replacement generation, for a new
                credible and stable political order.
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

export default YouthDevelopment;
