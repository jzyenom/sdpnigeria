import React from "react";

import BlogList from "../../assets/blog";

const PressRelease = () => {
  return (
    <>
      <section className="page-header @@extraclassNameName">
        <div
          className="page-header__bg"
          style={{
            backgroundImage:
              "url(assets/images/backgrounds/page-header-bg-1-1.jpg)",
          }}
        ></div>
        {/* <!-- /.page-header__bg --> */}
        <div className="container">
          <h2 className="page-header__title">News list</h2>
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

      <section className="blog-page blog-page--list section-space">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row gutter-y-40">
                {BlogList.map((blog) => (
                  <div key={blog.id} className="col-md-12">
                    <div
                      className="blog-card blog-card-four wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="100ms"
                    >
                      <a
                        href="blog-details-right.html"
                        className="blog-card__image"
                      >
                        <img src={blog.image} alt={blog.title} />
                        <div className="blog-card__date">
                          <span>{blog.day}</span>
                          {blog.month}
                        </div>
                        {/* <!-- /.blog-card__date --> */}
                      </a>
                      {/* <!-- /.blog-card__image --> */}
                      <div className=" blog-card-four__content">
                        <ul className="list-unstyled blog-card-four__meta">
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
                        </ul>
                        {/* <!-- /.list-unstyled blog-card-four__meta --> */}
                        <h3 className="blog-card__title">
                          <a href="blog-details-right.html">{blog.title}</a>
                        </h3>
                        {/* <!-- /.blog-card__title --> */}
                        <p className="blog-card-four__text">
                          {blog.describtion}
                        </p>
                        {/* <!-- /.blog-card-four__text --> */}
                        <a
                          href={`/blog_details/${blog.id}`} // Adjust the href to use the new route
                          className="cleenhearts-btn cleenhearts-btn--border"
                        >
                          <div className="cleenhearts-btn__icon-box">
                            <div className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </div>
                          </div>
                          <span className="cleenhearts-btn__text">
                            news details
                          </span>
                        </a>

                        {/* <!-- /.blog-card__link --> */}
                      </div>
                      {/* <!-- /.blog-card-four__content --> */}
                    </div>
                    {/* <!-- /.blog-card --> */}
                  </div>
                ))}
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

export default PressRelease;
