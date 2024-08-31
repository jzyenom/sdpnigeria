import React from "react";
import { Link } from "react-router-dom";

const contents = () => {
  return (
    <>
      <section className="donations-list-page section-space">
        <div className="container">
          <div className="row gutter-y-30">
            {/* Tab 1 */}
            <div className="col-12">
              <div className="donation-card-three donation-card">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/donation-bg-2-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <div className="row gutter-y-30 align-items-center">
                  <div className="col-lg-6">
                    <a
                      href="donation-details-right.html"
                      className="donation-card__image"
                    >
                      <img
                        src="src/assets/images/joinsdp.jpg"
                        alt="Raise Funds For Clean & Healthy Food It is a long established fact that a reader"
                      />
                      <div className="donation-card__category">Join SDP</div>
                      {/* <!-- /.donation-card__category --> */}
                    </a>
                    {/* <!-- /.donation-card__image --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-lg-6">
                    <div className="donation-card__content">
                      <h3 className="donation-card__title">
                        <span>Join Social Democratic Party ( SDP )</span>
                      </h3>
                      {/* <!-- /.donation-card__title --> */}
                      <div className="donation-card-three__text">
                        <p className="donation-details__inner__bottom__text">
                          SDP is made up of millions of individuals across
                          Nigeria determined to change the direction of our
                          country, determined to make Nigeria work again,
                          determined to RESCUE Nigeria from the shackles of
                          poverty and want, determined to REBUILD our nation for
                          the good of every citizen.
                        </p>
                        <p className="donation-details__inner__bottom__text">
                          By joining SDP, you become a beacon of hope in your
                          immediate community and a soldier in the REBUILDING of
                          our nation. You get a voice, you must be heard!
                        </p>
                      </div>
                      {/* <!-- /.donation-card-three__text --> */}
                      <div
                        className="donation-details__donation__button wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="400ms"
                      >
                        <a
                          href="donate-right.html"
                          className="cleenhearts-btn donation-details__donation__btn"
                        >
                          <div className="cleenhearts-btn__icon-box">
                            <div className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </div>
                          </div>
                          <Link to="/manifesto">
                            <span className="cleenhearts-btn__text">
                              I Want To Join
                            </span>
                          </Link>
                        </a>
                      </div>
                    </div>
                    {/* <!-- /.donation-card__content --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.donation-card-three donation-card --> */}
            </div>
            {/*End Tab 1 */}

            {/* Tab 2 */}
            <div className="col-12">
              <div className="donation-card-three donation-card">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/donation-bg-2-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <div className="row gutter-y-30 align-items-center">
                  <div className="col-lg-6">
                    <a
                      href="donation-details-right.html"
                      className="donation-card__image"
                    >
                      <img
                        src="src/assets/images/volunteer.jpg"
                        alt="Raise Funds For Clean & Healthy Food It is a long established fact that a reader"
                      />
                      <div className="donation-card__category">Volunteer</div>
                      {/* <!-- /.donation-card__category --> */}
                    </a>
                    {/* <!-- /.donation-card__image --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-lg-6">
                    <div className="donation-card__content">
                      <h3 className="donation-card__title">
                        <span>Volunteer As a Champion</span>
                      </h3>
                      {/* <!-- /.donation-card__title --> */}
                      <div className="donation-card-three__text">
                        <p className="donation-details__inner__bottom__text">
                          We have seen them run our country into severe debt,
                          their plans have left us all in poverty, and their
                          actions are foreclosing our future….. It is time to
                          fight back and take our country in a new direction We
                          want to win elections starting in Edo (September) and
                          then Ondo in November, we are delighted by your
                          willingness to join this fight. We need driven
                          volunteers like you to talk to people in your
                          neighbourhood, at your workplace, and at social
                          gatherings
                        </p>
                        <p className="donation-details__inner__bottom__text">
                          It's time for us to take back Nigeria! And we are
                          starting from EDO state To volunteer as a member of
                          our campaign in Edo or Ondo, Please click the link
                          Below and let’s start the RESCUING PROCESS
                        </p>
                      </div>
                      {/* <!-- /.donation-card-three__text --> */}
                      <div
                        className="donation-details__donation__button wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="400ms"
                      >
                        <a
                          href="donate-right.html"
                          className="cleenhearts-btn donation-details__donation__btn"
                        >
                          <div className="cleenhearts-btn__icon-box">
                            <div className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </div>
                          </div>
                          <Link to="/manifesto">
                            <span className="cleenhearts-btn__text">
                              Join Now{" "}
                            </span>
                          </Link>
                        </a>
                      </div>
                    </div>
                    {/* <!-- /.donation-card__content --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.donation-card-three donation-card --> */}
            </div>
            {/*End Tab 2 */}

            {/* Tab 3 */}
            <div className="col-12">
              <div className="donation-card-three donation-card">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/donation-bg-2-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <div className="row gutter-y-30 align-items-center">
                  <div className="col-lg-6">
                    <a
                      href="donation-details-right.html"
                      className="donation-card__image"
                    >
                      <img
                        src="src/assets/images/fund_campaign.jpg"
                        alt="Fund_Campaign"
                      />
                      <div className="donation-card__category">
                        Fund Campaign
                      </div>
                      {/* <!-- /.donation-card__category --> */}
                    </a>
                    {/* <!-- /.donation-card__image --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-lg-6">
                    <div className="donation-card__content">
                      <h3 className="donation-card__title">
                        <span>Fund Our Campaign</span>
                      </h3>
                      {/* <!-- /.donation-card__title --> */}
                      <div className="donation-card-three__text">
                        <p className="donation-details__inner__bottom__text">
                          Taking back our country requires every resource, when
                          you donate to the SDP campaign, you strengthen our
                          hands to produce more leaflets, advertise on social
                          media, TV and Radio - we can not do it alone! Click
                          now to donate to the SDP campaign online. Your
                          donation will be personally acknowledged by the
                          National Chairman and will be judiciously used in
                          furthering the goal of RESCUING our nation from the
                          current clueless administration.
                          <br />
                          Thank you
                        </p>
                      </div>
                      {/* <!-- /.donation-card-three__text --> */}
                      <div
                        className="donation-details__donation__button wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="400ms"
                      >
                        <a
                          href="donate-right.html"
                          className="cleenhearts-btn donation-details__donation__btn"
                        >
                          <div className="cleenhearts-btn__icon-box">
                            <div className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </div>
                          </div>
                          <Link to="/manifesto">
                            <span className="cleenhearts-btn__text">
                              Donate{" "}
                            </span>
                          </Link>
                        </a>
                      </div>
                    </div>
                    {/* <!-- /.donation-card__content --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.donation-card-three donation-card --> */}
            </div>
            {/*End Tab 3 */}

            {/* Tab 4 */}
            <div className="col-12">
              <div className="donation-card-three donation-card">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/donation-bg-2-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <div className="row gutter-y-30 align-items-center">
                  <div className="col-lg-6">
                    <a
                      href="donation-details-right.html"
                      className="donation-card__image"
                    >
                      <img
                        src="src/assets/images/manifesto.jpg"
                        alt="Manifesto"
                      />
                      <div className="donation-card__category">
                        Our Manifesto{" "}
                      </div>
                      {/* <!-- /.donation-card__category --> */}
                    </a>
                    {/* <!-- /.donation-card__image --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-lg-6">
                    <div className="donation-card__content">
                      <h3 className="donation-card__title">
                        <span>Read Our Manifesto</span>
                      </h3>
                      {/* <!-- /.donation-card__title --> */}
                      <div className="donation-card-three__text">
                        <p className="donation-details__inner__bottom__text">
                          The SDP mission in government is clearly encapsulated
                          in its manifesto. Download our manifesto, read and
                          talk about our determination to REBUILD our nation to
                          others.
                        </p>
                        <p className="donation-details__inner__bottom__text">
                          We need you in. When we work together, we can rescue
                          our nation from those whose intentions are manifestly
                          against the survival and the prosperity of our people.
                        </p>
                      </div>
                      {/* <!-- /.donation-card-three__text --> */}
                      <div
                        className="donation-details__donation__button wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="400ms"
                      >
                        <a
                          href="donate-right.html"
                          className="cleenhearts-btn donation-details__donation__btn"
                        >
                          <div className="cleenhearts-btn__icon-box">
                            <div className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </div>
                          </div>
                          <Link to="/manifesto">
                            <span className="cleenhearts-btn__text">
                              Read Our Manifesto
                            </span>
                          </Link>
                        </a>
                      </div>
                    </div>
                    {/* <!-- /.donation-card__content --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.donation-card-three donation-card --> */}
            </div>
            {/*End Tab 4 */}

            {/* Tab 5 */}
            <div className="col-12">
              <div className="donation-card-three donation-card">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/donation-bg-2-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <div className="row gutter-y-30 align-items-center">
                  <div className="col-lg-6">
                    <a
                      href="donation-details-right.html"
                      className="donation-card__image"
                    >
                      <img
                        src="src/assets/images/hear_from_us.jpg"
                        alt="Hear_From_Us"
                      />
                      <div className="donation-card__category">
                        Hear From Us
                      </div>
                      {/* <!-- /.donation-card__category --> */}
                    </a>
                    {/* <!-- /.donation-card__image --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-lg-6">
                    <div className="donation-card__content">
                      <h3 className="donation-card__title">
                        <span>Hear From Us</span>
                      </h3>
                      {/* <!-- /.donation-card__title --> */}
                      <div className="donation-card-three__text">
                        <p className="donation-details__inner__bottom__text">
                          It's election season in Edo and Ondo State, SDP
                          National Headquarters who will be working and
                          reporting directly to you. Sign up to receive our
                          campaign and electoral updates. It's our unique way of
                          telling you how much you matter in the run up to
                          changing our nation for good.
                        </p>
                      </div>
                      {/* <!-- /.donation-card-three__text --> */}
                      <div
                        className="donation-details__donation__button wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="400ms"
                      >
                        <a
                          href="donate-right.html"
                          className="cleenhearts-btn donation-details__donation__btn"
                        >
                          <div className="cleenhearts-btn__icon-box">
                            <div className="cleenhearts-btn__icon-box__inner">
                              <span className="icon-duble-arrow"></span>
                            </div>
                          </div>
                          <Link to="/donate">
                            <span className="cleenhearts-btn__text">
                              Subscribe to our NewsLetter{" "}
                            </span>
                          </Link>
                        </a>
                      </div>
                    </div>
                    {/* <!-- /.donation-card__content --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.donation-card-three donation-card --> */}
            </div>
            {/*End Tab 5 */}

            {/* Tab 6 */}
            <div className="col-12">
              <div className="donation-card-three donation-card">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/backgrounds/donation-bg-2-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <div className="row gutter-y-30 align-items-center">
                  <div className="col-lg-6">
                    <a
                      href="donation-details-right.html"
                      className="donation-card__image"
                    >
                      <img
                        src="src/assets/images/the_people.jpg"
                        alt="The_Sdp_People"
                      />
                      <div className="donation-card__category">
                        The SDP People{" "}
                      </div>
                      {/* <!-- /.donation-card__category --> */}
                    </a>
                    {/* <!-- /.donation-card__image --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                  <div className="col-lg-6">
                    <div className="donation-card__content">
                      <h3 className="donation-card__title">
                        <span>The SDP People</span>
                      </h3>
                      {/* <!-- /.donation-card__title --> */}
                      <div className="donation-card-three__text">
                        <p className="donation-details__inner__bottom__text">
                          The SDP is made up of people daily campaigning to get
                          our country working again for the silent majority. We
                          pride ourselves as members of the same community
                          irrespective of sex, tribe, religion or ethnic
                          nationality. We are ONE Nigeria with one desire to
                          RETAKE our nation from clueless leaders and REBUILD
                          Nigeria for the benefit of all.
                        </p>
                      </div>
                      {/* <!-- /.donation-card-three__text --> */}
                    </div>
                    {/* <!-- /.donation-card__content --> */}
                  </div>
                  {/* <!-- /.col-lg-6 --> */}
                </div>
                {/* <!-- /.row --> */}
              </div>
              {/* <!-- /.donation-card-three donation-card --> */}
            </div>
            {/*End Tab 6 */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.donations-list-page --> */}
    </>
  );
};

export default contents;
