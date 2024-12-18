import React from "react";

const AgainstHunger = () => {
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
          <h2 className="page-header__title">Our Mission Against Hunger</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>our mission against hunger</span>
            </li>
          </ul>
          {/* <!-- /.thm-breadcrumb list-unstyled --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.page-header --> */}

      <section className="blog-page blog-page--list section-space">
        <div className="container">
          <div className="about-one__content">
            <div className="sec-title">
              <h6 className="sec-title__tagline">SDP Mission Against Hunger</h6>
            </div>
            <div>
              <p className="">
                We are determined to ensure, to the best of our abilities, that
                no Nigerian should go to bed hungry. To this end, our social
                contract with the Nigerian people is rooted in our ability to
                provide effective leadership that enthrones good governance,
                rapid development, with social justice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgainstHunger;
