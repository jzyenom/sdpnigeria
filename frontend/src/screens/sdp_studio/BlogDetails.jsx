import React from "react";
import { useParams } from "react-router-dom";
import BlogList from "../../assets/blog"; // Import your blog data

const BlogDetails = () => {
  // Get the 'id' from the URL params using useParams hook
  const { id } = useParams();

  // Find the specific blog by the 'id'
  const blog = BlogList.find((blog) => blog.id === parseInt(id));

  // If no blog is found, return an error message
  //   if (blog && blog.id ) {
  //     return <p>Blog post not found with id {id}</p>;
  //   }

  return (
    <div>
      <section className="page-header @@extraClassName">
        <div
          className="page-header__bg"
          //   style={{
          //     backgroundImage:
          //       "url('assets/images/Sdp/page-header-bg-1-1.jpg')",
          //   }}
        >
          <img src="" alt="" />
        </div>
        <div className="container">
          <h2 className="page-header__title">
            There are many variations of passages of
          </h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="index.html">Home</a>
            </li>
            <li>
              <span>News List</span>
            </li>
            <li>
              <span>There are many variations of of</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="blog-page section-space">
        <div className="container">
          <div className="row gutter-y-60">
            <div className="col-lg-8">
              <div className="blog-details">
                <div
                  className="blog-card blog-card-four @@extraClassName wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image"
                  >
                    <img
                      src={blog.image}
                      alt="There are many variations of passages of available but majority have alteration"
                    />
                    {/* <div className="blog-details__hall">
                      <span>Hall no:</span>
                      <span>69</span>
                    </div> */}
                    <div className="blog-card__date">
                      <span>{blog.day}</span> {blog.month}
                    </div>
                  </a>
                  <div className="blog-card-four__content">
                    <ul className="list-unstyled blog-card-four__meta">
                      <li>
                        <a href="#">
                          <span className="icon-user"></span> Layerdrops
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="icon-comment"></span> 2 Comments
                        </a>
                      </li>
                    </ul>
                    <h3 className="blog-card__title">
                      <span>{blog.title}</span>
                    </h3>
                    <div
                      className="blog-card-four__text blog-card-four__text--one"
                      dangerouslySetInnerHTML={{ __html: blog.post }}
                    ></div>
                    {/* 
                    <div className="blog-details__inner">
                      <div className="row gutter-y-30">
                        <div
                          className="col-md-6 wow fadeInUp"
                          data-wow-delay="100ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="blog-details__inner__image">
                            <img
                              src="assets/images/blog/blog-d-1-2.jpg"
                              alt="blog details"
                            />
                          </div>
                        </div>
                        <div
                          className="col-md-6 wow fadeInUp"
                          data-wow-delay="300ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="blog-details__inner__image">
                            <img
                              src="assets/images/blog/blog-d-1-3.jpg"
                              alt="blog details"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="blog-details__inner__content">
                        <p className="blog-details__inner__text">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Aelltes port lacus quis enim var sed
                          efficitur turpis gilla sed sit amet finibus eros.
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <ul className="blog-details__inner__list">
                          <li>
                            <p>
                              Another area of AI that holds great promise is
                              robotics, which involves developing machines.
                            </p>
                          </li>
                          <li>
                            <p>
                              AI also has the potential to improve healthcare,
                              by enabling more accurate diagnosis and treatment.
                            </p>
                          </li>
                          <li>
                            <p>
                              However, there are also challenges associated with
                              the development and deployment of AI.
                            </p>
                          </li>
                        </ul>
                      </div>
                      
                    </div> */}
                  </div>
                </div>
                <div className="blog-details__meta">
                  <div className="blog-details__social">
                    <h4 className="blog-details__meta__title">share:</h4>
                    <div className="social-link">
                      <a href="https://facebook.com/">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a href="https://twitter.com/">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                        <span className="sr-only">Twitter</span>
                      </a>
                      <a href="https://linkedin.com/" aria-hidden="true">
                        <i className="fab fa-linkedin-in"></i>
                        <span className="sr-only">Linkedin</span>
                      </a>
                      {/* <a href="https://youtube.com/" aria-hidden="true">
                        <i className="fab fa-youtube"></i>
                        <span className="sr-only">Youtube</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="comments-one">
                <h3 className="comments-one__title sec-title__title">
                  02 comments
                </h3>
                <ul className="list-unstyled comments-one__list">
                  <li
                    className="comments-one__card wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="comments-one__card__image">
                      <img
                        src="assets/images/blog/blog-comment-1-1.png"
                        alt="Kevin martin"
                      />
                    </div>
                    <div className="comments-one__card__content">
                      <div className="comments-one__card__top">
                        <div className="comments-one__card__info">
                          <h3 className="comments-one__card__title">
                            Kevin martin
                          </h3>
                          <p className="comments-one__card__date">
                            March 20, 2023 at 2:37 pm
                          </p>
                        </div>
                        <a
                          href="blog-details-right.html"
                          className="comments-one__card__reply"
                        >
                          Reply
                        </a>
                      </div>
                      <p className="comments-one__card__text">
                        Neque porro est qui dolorem ipsum quia quaed inventor
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Aelltes port lacus quis enim var sed
                        efficitur turpis gilla sed sit amet finibus eros. Lorem
                        Ipsum is simply dummy
                      </p>
                    </div>
                  </li>
                  <li
                    className="comments-one__card wow fadeInUp"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="comments-one__card__image">
                      <img
                        src="assets/images/blog/blog-comment-1-2.png"
                        alt="Sarah albert"
                      />
                    </div>
                    <div className="comments-one__card__content">
                      <div className="comments-one__card__top">
                        <div className="comments-one__card__info">
                          <h3 className="comments-one__card__title">
                            Sarah albert
                          </h3>
                          <p className="comments-one__card__date">
                            March 20, 2023 at 2:37 pm
                          </p>
                        </div>
                        <a
                          href="blog-details-right.html"
                          className="comments-one__card__reply"
                        >
                          Reply
                        </a>
                      </div>
                      <p className="comments-one__card__text">
                        Neque porro est qui dolorem ipsum quia quaed inventor
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo. Aelltes port lacus quis enim var sed
                        efficitur turpis gilla sed sit amet finibus eros. Lorem
                        Ipsum is simply dummy
                      </p>
                    </div>
                  </li>
                </ul>
              </div> */}

              <div className="comments-form">
                <h3 className="comments-form__title sec-title__title">
                  Leave a comment
                </h3>
                {/* <!-- /.comments-form__title --> */}
                <form className="comments-form__form contact-form-validated form-one">
                  <div className="row gutter-y-30">
                    <div
                      className="col-md-6 wow fadeInUp"
                      data-wow-delay="100ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="form-one__control">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          className="form-one__control__input"
                        />
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-md-6 --> */}
                    <div
                      className="col-md-6 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="form-one__control">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                          className="form-one__control__input"
                        />
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-md-6 --> */}
                    <div
                      className="col-12 wow fadeInUp"
                      data-wow-delay="100ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="form-one__control">
                        <textarea
                          name="message"
                          placeholder="write message . . ."
                          className="form-one__control__input form-one__control__message"
                        ></textarea>
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-12--> */}
                    <div className="col-12">
                      <div className="form-one__control">
                        <button type="submit" className="cleenhearts-btn">
                          <span className="cleenhearts-btn__icon-box">
                            <span className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </span>
                          </span>
                          <span className="cleenhearts-btn__text">
                            Post Comment
                          </span>
                        </button>
                      </div>
                      {/* <!-- /.form-one__control --> */}
                    </div>
                    {/* <!-- /.col-12 --> */}
                  </div>
                  {/* <!-- /.form-one__group --> */}
                </form>
                <div class="result"></div>
              </div>
              {/* <!-- /.comments-form --> */}
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <aside className="widget-area">
                  <div className="sidebar__form sidebar__single">
                    <h4 className="sidebar__title sidebar__form__title">
                      Search
                    </h4>
                    {/* <!-- /.sidebar__title --> */}
                    <form action="#" className="sidebar__search">
                      <input type="text" placeholder="Search Here" />
                      <button type="submit" aria-label="search submit">
                        <span className="icon-search"></span>
                      </button>
                    </form>
                    {/* <!-- /.sidebar__search --> */}
                  </div>
                  {/* <!-- /.sidebar__form sidebar__single --> */}
                  <div className="sidebar__posts-wrapper sidebar__single">
                    <h4 className="sidebar__title">Recent Posts</h4>
                    {/* <!-- /.sidebar__title --> */}
                    <ul className="sidebar__posts list-unstyled">
                      {BlogList.map((blog) => (
                        <li key={blog.id} className="sidebar__posts__item">
                          <div className="sidebar__posts__image">
                            <img
                              src={blog.image}
                              alt="Latest posts"
                              style={{
                                width: "85px",
                                height: "85px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          {/* <!-- /.sidebar__posts__image --> */}
                          <div className="sidebar__posts__content">
                            <p className="sidebar__posts__meta">
                              <a href={`/blog_details/${blog.id}`}>
                                <span className="icon-user"></span>
                                By Admin
                              </a>
                            </p>
                            {/* <!-- /.sidebar__posts__date --> */}
                            <h4 className="sidebar__posts__title">
                              <a href={`/blog_details/${blog.id}`}>
                                {blog.title}
                              </a>
                            </h4>
                            {/* <!-- /.sidebar__posts__title --> */}
                          </div>
                          {/* <!-- /.sidebar__posts__content --> */}
                        </li>
                      ))}
                    </ul>
                    {/* <!-- /.sidebar__posts list-unstyled --> */}
                  </div>
                  {/* <!-- /.sidebar__posts-wrapper sidebar__single --> */}

                  {/* <!-- /.sidebar__tags-wrapper sidebar__single --> */}
                  <div className="sidebar__comments-wrapper sidebar__single">
                    <h4 className="sidebar__title">Comments</h4>
                    {/* <!-- /.sidebar__title --> */}
                    <ul className="sidebar__comments list-unstyled">
                      <li>
                        <div className="sidebar__comments__icon">
                          <span className="icon-comment"></span>
                        </div>
                        {/* <!-- /.sidebar__comments__icon --> */}
                        <h6 className="sidebar__comments__title">
                          <a href="blog-details-right.html">
                            Neque porro est qui dolorem ipsum quia quaed
                            inventor
                          </a>
                        </h6>
                        {/* <!-- /.sidebar__comments__title --> */}
                      </li>
                      <li>
                        <div className="sidebar__comments__icon">
                          <span className="icon-comment"></span>
                        </div>
                        {/* <!-- /.sidebar__comments__icon --> */}
                        <h6 className="sidebar__comments__title">
                          <a href="blog-details-right.html">
                            Neque porro est qui dolorem ipsum quia quaed
                            inventor
                          </a>
                        </h6>
                        {/* <!-- /.sidebar__comments__title --> */}
                      </li>
                      <li>
                        <div className="sidebar__comments__icon">
                          <span className="icon-comment"></span>
                        </div>
                        {/* <!-- /.sidebar__comments__icon --> */}
                        <h6 className="sidebar__comments__title">
                          <a href="blog-details-right.html">
                            Neque porro est qui dolorem ipsum quia quaed
                            inventor
                          </a>
                        </h6>
                        {/* <!-- /.sidebar__comments__title --> */}
                      </li>
                    </ul>
                    {/* <!-- /.sidebar__comments list-unstyled --> */}
                  </div>
                  {/* <!-- /.sidebar__comments-wrapper sidebar__single --> */}
                </aside>
                {/* <!-- /.widget-area --> */}
              </div>
              {/* <!-- /.sidebar --> */}
            </div>
            {/* <!-- /.col-lg-4 --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
