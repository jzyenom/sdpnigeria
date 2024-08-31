import CommitteeList from "../assets/committee";

const About = () => {
  // const image1 = () => <img src="../src/assets/images/slider_bg2.jpg" />;
  return (
    // <!-- Start slider-area -->
    <>
      <section className="about-one about-one--home section-space">
        <div className="about-one__bg">
          <div className="about-one__bg__border"></div>
          <div
            className="about-one__bg__inner"
            style={{
              backgroundImage: "url(src/assets/images/about/about-1-2.png)",
            }}
          ></div>
        </div>
        <div className="container">
          <div className="row gutter-y-50">
            <div
              className="col-xl-6 wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="sec-title">
                <h6 className="sec-title__tagline @@extraClassName">
                  SDP MEDIA{" "}
                </h6>
                {/* <!-- /.sec-title__tagline --> */}

                <h3 className="sec-title__title">
                  Video <span className="sec-title__title__inner">Media</span>
                </h3>
                {/* <!-- /.sec-title__title --> */}
              </div>
              {/* <!-- /.sec-title --> */}
              <div className="about-one__right">
                <div className="about-one__image">
                  <img
                    src="src/assets/images/video.jpg"
                    alt="about"
                    className="about-one__image__one"
                  />
                  <div
                    className="about-one__video"
                    style={{
                      backgroundImage:
                        "url(../src/assets/images/about/about-1-2.png)",
                    }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                      className="about-one__video__btn video-button video-popup"
                    >
                      <span className="icon-play"></span>
                      <i className="video-button__ripple"></i>
                    </a>
                    {/* <!-- /.about-one__video__btn --> */}
                  </div>
                  <div className="about-one__profile volunteer-profile">
                    <div className="volunteer-profile__inner">
                      <img
                        src="src/assets/images/resources/national-chairman.jpg"
                        alt="Robert Joe Kerry"
                        className="volunteer-profile__image"
                      />
                      <div className="volunteer-profile__info">
                        <h4 className="volunteer-profile__name">
                          <a href="volunteer-details.html">
                            ALHAJI SHEHU MUSA GABAM
                          </a>
                        </h4>
                        <p className="volunteer-profile__designation">
                          National Chairman
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-one__content">
                <div className="sec-title">
                  <h6 className="sec-title__tagline">ABOUT THE PARTY SDP</h6>
                  <h3 className="sec-title__title">SOCIAL DEMOCRATIC PARTY</h3>
                </div>
                <div
                  className="about-one__text-box wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="about-one__text-box__image">
                    <img
                      src="src/assets/images/Sdplogo_white.png"
                      width="10"
                      alt="about"
                    />
                  </div>
                  <p className="about-one__text">
                    The dignity of the human person and the sanctity of life are
                    non-negotiable.
                    <br />
                    The Nigerian state is currently facing severe challenges.
                    <br />
                    These challenges include:
                  </p>
                  <p className="story-one__text story-one__text--one">
                    • To provide comprehensive support to the youth in Nigeria,
                    focusing on empowering them to overcome poverty and
                    unemployment.
                    <br />
                    • To identify and nurture the talents and skills of the
                    youth and provide them with opportunities to express and
                    develop their abilities.
                    <br />
                    • To offer life support services including basic needs such
                    as food, shelter, healthcare, and access to education for
                    the youth in need.
                    <br />
                    • To create a supportive and inclusive community for the
                    youth that promotes personal growth, resilience, and
                    positive mental health.
                    <br />• To collaborate with stakeholders, including
                    government agencies, non-profit organizations, and local
                    communities, to implement sustainable solutions for youth
                    empowerment in Nigeria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="src/assets/images/shapes/about-shape-1-2.png"
          alt="cleenhearts"
          className="about-one__hand"
        />
      </section>

      <section className="team-one section-space">
        <div className="container">
          <div className="team-one__top">
            <div className="row gutter-y-30 align-items-center">
              <div className="col-xxl-8 col-lg-7">
                <div className="sec-title">
                  <h6 className="sec-title__tagline">
                    National Working Committee
                  </h6>
                  <h3 className="sec-title__title">
                    Meet The Team Behind SDP{" "}
                    <span className="sec-title__title__inner">National </span>
                    Committee
                  </h3>
                </div>
              </div>
              <div
                className="col-xxl-4 col-lg-5 wow fadeInRight"
                data-wow-duration="1500ms"
              >
                <p className="team-one__text">
                  Who We Are: Team of volunteers - passionate youths interested
                  in the development of Nigerian youths.
                </p>
              </div>
            </div>
          </div>
          <div
            className="team-one__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--with-shadow cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
            data-owl-options='{
        "items": 3,
        "margin": 30,
        "smartSpeed": 700,
        "loop":true,
        "autoplay": 6000,
        "nav":true,
        "dots":false,
        "navText": ["<span className=\"icon-arrow-left\"></span>","<span className=\"icon-arrow-right\"></span>"],
        "responsive":{
            "0":{
                "items": 1,
                "margin": 20
            },
            "575":{
                "items": 1,
                "margin": 30
            },
            "768":{
                "items": 2,
                "margin": 30
            },
            "992":{
                "items": 3,
                "margin": 30
            },
            "1200":{
                "items": 3,
                "margin": 30
            }
        }
        }'
          >
            {CommitteeList.map((committee) => (
              <div key={committee.id} className="item">
                <div className="team-single">
                  <div className="team-single__image">
                    <img src={committee.image} alt={committee.name} />
                    <div className="team-single__content">
                      <ul className="team-single__social person-social">
                        <li>
                          <a href="https://facebook.com/">
                            <span className="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com">
                            <span className="icon-twitter"></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/">
                            <span className="icon-linkedin"></span>
                          </a>
                        </li>
                        <li>
                          <a href="https://youtube.com/">
                            <span className="icon-youtube"></span>
                          </a>
                        </li>
                      </ul>
                      <div className="team-single__content__inner">
                        <h4 className="team-single__name">{committee.name}</h4>
                        <p className="team-single__designation">
                          {committee.post}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
