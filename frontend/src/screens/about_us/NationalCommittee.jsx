/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CommitteeList from "../../assets/committee";

const NationalCommittee = () => {
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
          <h2 className="page-header__title">Committee's</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="index.html">Home</a>
            </li>
            <li>
              <span>our Committee's</span>
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
                {/* <!-- /.col-md-12 --> */}
                <div className="col-md-12">
                  <div
                    className="volunteer-card @@extraClassName wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                  >
                    <a href="#" className="volunteer-card__image">
                      <img
                        src="src/assets/images/about/national-chairman.jpg"
                        alt="There are many variations of passages of available but majority"
                      />
                    </a>
                    <div className="volunteer-card__social">
                      <span className="icon-share"></span>
                      <div className="volunteer-card__social__list">
                        <a href="https://facebook.com/">
                          <i
                            className="fab fa-facebook-f"
                            aria-hidden="true"
                          ></i>
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
                        <a href="https://youtube.com/" aria-hidden="true">
                          <i className="fab fa-youtube"></i>
                          <span className="sr-only">Youtube</span>
                        </a>
                      </div>
                      {/* <!-- /.volunteer-card__social__list --> */}
                    </div>
                    {/* <!-- /.blog-card__image --> */}
                    <div
                      className="volunteer-card__content"
                      style={{
                        backgroundImage:
                          "url(assets/images/backgrounds/page-header-bg-1-1.jpg)",
                      }}
                    >
                      <h3 className="volunteer-card__name">
                        <a href="#">ALHAJI SHEHU MUSA GABAM</a>
                      </h3>
                      {/* <!-- /.volunteer-card__name --> */}
                      <h6 className="volunteer-card__designation">
                        National Party Chairman
                      </h6>
                      {/* <!-- /.volunteer-card__designation --> */}
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

      <section className="volunteer-page section-space">
        <div className="container">
          <div className="row gutter-y-30">
            {CommitteeList.map((committee) => (
              <div
                key={committee.id}
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="volunteer-card @@extraclassNameName">
                  <div className="volunteer-card__image">
                    <img src={committee.image} alt={committee.name} />
                    <div className="volunteer-card__social">
                      <span className="icon-share"></span>
                      <div className="volunteer-card__social__list">
                        <a href="https://facebook.com/">
                          <i
                            className="fab fa-facebook-f"
                            aria-hidden="true"
                          ></i>
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
                        <a href="https://youtube.com/" aria-hidden="true">
                          <i className="fab fa-youtube"></i>
                          <span className="sr-only">Youtube</span>
                        </a>
                      </div>
                      {/* <!-- /.volunteer-card__social__list --> */}
                    </div>
                    {/* <!-- /.volunteer-card__social --> */}
                  </div>
                  {/* <!-- /.volunteer-card__image --> */}
                  <div
                    className="volunteer-card__content"
                    style={{
                      backgroundImage:
                        "url(assets/images/backgrounds/page-header-bg-1-1.jpg)",
                    }}
                  >
                    <h3 className="volunteer-card__name">
                      <a href="volunteer-details.html">{committee.name}</a>
                    </h3>
                    {/* <!-- /.volunteer-card__name --> */}
                    <h6 className="volunteer-card__designation">
                      {committee.post}{" "}
                    </h6>
                    {/* <!-- /.volunteer-card__designation --> */}
                  </div>
                  {/* <!-- /.volunteer-card__content --> */}
                </div>
                {/* <!-- /.volunteer-card --> */}
              </div>
            ))}

            {/* <!-- /.col-md-6 col-lg-4 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.volunteer-page section-space --> */}
    </>
  );
};

export default NationalCommittee;

// {CommitteeList.map((committee) => (
//   <div key={committee.id} className="item">
//     <div className="team-single">
//       <div className="team-single__image">
//         <img src={committee.image} alt={committee.name} />
//         <div className="team-single__content">
//           <ul className="team-single__social person-social">
//             <li>
//               <a href="https://facebook.com/">
//                 <span className="icon-facebook"></span>
//               </a>
//             </li>
//             <li>
//               <a href="https://twitter.com">
//                 <span className="icon-twitter"></span>
//               </a>
//             </li>
//             <li>
//               <a href="https://linkedin.com/">
//                 <span className="icon-linkedin"></span>
//               </a>
//             </li>
//             <li>
//               <a href="https://youtube.com/">
//                 <span className="icon-youtube"></span>
//               </a>
//             </li>
//           </ul>
//           <div className="team-single__content__inner">
//             <h4 className="team-single__name">{committee.name}</h4>
//             <p className="team-single__designation">
//               {committee.post}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
