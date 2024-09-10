import React from "react";

const SdpChampions = () => {
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
          <h2 className="page-header__title">SDP Champions</h2>
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

      <section className="blog-page blog-page--list section-space">
        <div className="container">
          <div className="about-one__content">
            <div className="sec-title">
              <h6 className="sec-title__tagline">SDP CHAMPIONS</h6>
              {/* <h4 className="sec-title__title">SOCIAL DEMOCRATIC PARTY</h4> */}
            </div>
            <div>
              <p className="">
                The SDP Champion is a valued member of the SDP who has been
                adjudged a leader following a validation of his or her
                mobilization effort in his immediate locality. A member may be
                specially recognised as an SDP Champion if such a member can
                provide sufficient evidence of having mobilised not less than 15
                new members for the party in his local area.
              </p>
              <p>
                Once a member is recognized as a party champion, he /she will
                receive a special letter from the National Chairman confirming
                his / her new status and the party flag or other mementos as the
                National Chairman may deem appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SdpChampions;
