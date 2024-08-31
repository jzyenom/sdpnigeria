import React from "react";

const Donate = () => {
  return (
    <>
      <section className="donations-one donations-carousel section-space-bottom">
        <div className="container">
          <div
            className="donations-one__carousel cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-theme owl-carousel"
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
        "576":{
            "items": 1,
            "margin": 30
        },
        "768":{
            "items": 2,
            "margin": 30
        },
        "992":{
            "items": 2,
            "margin": 30
        },
        "1200":{
            "items": 3,
            "margin": 30
        }
    }
    }'
          >
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="donation-card @@extraClassName">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/donation-bg-1-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__image"
                >
                  <img
                    src="src/assets/images/donations/donation-1-1.jpg"
                    alt="Give African Children's Good medical support"
                  />
                  <div className="donation-card__category">Medical</div>
                  {/* <!-- /.donation-card__category --> */}
                </a>
                {/* <!-- /.donation-card__image --> */}
                <div className="donation-card__content">
                  <div className="donation-card__progress">
                    <div className="progress-box">
                      <div className="progress-box__bar">
                        <div
                          className="progress-box__bar__inner count-bar--noappear"
                          data-percent="90%"
                        >
                          <div className="progress-box__number count-text">
                            90%
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.progress-box__bar --> */}
                    </div>
                    {/* <!-- /.progress-box --> */}
                    <div className="donation-card__progress__bottom">
                      <h5 className="donation-card__progress__title">
                        Raised $<span>80,050</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                      <h5 className="donation-card__progress__title">
                        goal $<span>90,000</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                    </div>
                    {/* <!-- /.donation-card__progress__bottom --> */}
                  </div>
                  {/* <!-- /.donation-card__progress --> */}
                  <h3 className="donation-card__title">
                    <a href="donation-details-right.html">
                      Give African Children's Good medical support
                    </a>
                  </h3>
                  {/* <!-- /.donation-card__title --> */}
                  <a
                    href="donation-details-right.html"
                    className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                  >
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow"></span>
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">
                      donation details
                    </span>
                  </a>
                  {/* <!-- /.donation-card__btn --> */}
                </div>
                {/* <!-- /.donation-card__content --> */}
              </div>
              {/* <!-- /.donation-card --> */}
            </div>
            {/* <!-- /.item --> */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="donation-card @@extraClassName">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/donation-bg-1-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__image"
                >
                  <img
                    src="src/assets/images/donations/donation-1-2.jpg"
                    alt="Let’s education for children get good life"
                  />
                  <div className="donation-card__category">Education</div>
                  {/* <!-- /.donation-card__category --> */}
                </a>
                {/* <!-- /.donation-card__image --> */}
                <div className="donation-card__content">
                  <div className="donation-card__progress">
                    <div className="progress-box">
                      <div className="progress-box__bar">
                        <div
                          className="progress-box__bar__inner count-bar--noappear"
                          data-percent="65%"
                        >
                          <div className="progress-box__number count-text">
                            65%
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.progress-box__bar --> */}
                    </div>
                    {/* <!-- /.progress-box --> */}
                    <div className="donation-card__progress__bottom">
                      <h5 className="donation-card__progress__title">
                        Raised $<span>80,050</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                      <h5 className="donation-card__progress__title">
                        goal $<span>90,000</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                    </div>
                    {/* <!-- /.donation-card__progress__bottom --> */}
                  </div>
                  {/* <!-- /.donation-card__progress --> */}
                  <h3 className="donation-card__title">
                    <a href="donation-details-right.html">
                      Let’s education for children get good life
                    </a>
                  </h3>
                  {/* <!-- /.donation-card__title --> */}
                  <a
                    href="donation-details-right.html"
                    className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                  >
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow"></span>
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">
                      donation details
                    </span>
                  </a>
                  {/* <!-- /.donation-card__btn --> */}
                </div>
                {/* <!-- /.donation-card__content --> */}
              </div>
              {/* <!-- /.donation-card --> */}
            </div>
            {/* <!-- /.item --> */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="donation-card @@extraClassName">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/donation-bg-1-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__image"
                >
                  <img
                    src="src/assets/images/donations/donation-1-3.jpg"
                    alt="Raise Funds For Clean & Healthy Food"
                  />
                  <div className="donation-card__category">Foods</div>
                  {/* <!-- /.donation-card__category --> */}
                </a>
                {/* <!-- /.donation-card__image --> */}
                <div className="donation-card__content">
                  <div className="donation-card__progress">
                    <div className="progress-box">
                      <div className="progress-box__bar">
                        <div
                          className="progress-box__bar__inner count-bar--noappear"
                          data-percent="75%"
                        >
                          <div className="progress-box__number count-text">
                            75%
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.progress-box__bar --> */}
                    </div>
                    {/* <!-- /.progress-box --> */}
                    <div className="donation-card__progress__bottom">
                      <h5 className="donation-card__progress__title">
                        Raised $<span>80,050</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                      <h5 className="donation-card__progress__title">
                        goal $<span>90,000</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                    </div>
                    {/* <!-- /.donation-card__progress__bottom --> */}
                  </div>
                  {/* <!-- /.donation-card__progress --> */}
                  <h3 className="donation-card__title">
                    <a href="donation-details-right.html">
                      Raise Funds For Clean & Healthy Food
                    </a>
                  </h3>
                  {/* <!-- /.donation-card__title --> */}
                  <a
                    href="donation-details-right.html"
                    className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                  >
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow"></span>
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">
                      donation details
                    </span>
                  </a>
                  {/* <!-- /.donation-card__btn --> */}
                </div>
                {/* <!-- /.donation-card__content --> */}
              </div>
              {/* <!-- /.donation-card --> */}
            </div>
            {/* <!-- /.item --> */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="donation-card @@extraClassName">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/donation-bg-1-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__image"
                >
                  <img
                    src="src/assets/images/donations/donation-1-4.jpg"
                    alt="Quisque dictum eget accumsan dignissim. Quisque"
                  />
                  <div className="donation-card__category">Medical</div>
                  {/* <!-- /.donation-card__category --> */}
                </a>
                {/* <!-- /.donation-card__image --> */}
                <div className="donation-card__content">
                  <div className="donation-card__progress">
                    <div className="progress-box">
                      <div className="progress-box__bar">
                        <div
                          className="progress-box__bar__inner count-bar--noappear"
                          data-percent="90%"
                        >
                          <div className="progress-box__number count-text">
                            90%
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.progress-box__bar --> */}
                    </div>
                    {/* <!-- /.progress-box --> */}
                    <div className="donation-card__progress__bottom">
                      <h5 className="donation-card__progress__title">
                        Raised $<span>80,050</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                      <h5 className="donation-card__progress__title">
                        goal $<span>90,000</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                    </div>
                    {/* <!-- /.donation-card__progress__bottom --> */}
                  </div>
                  {/* <!-- /.donation-card__progress --> */}
                  <h3 className="donation-card__title">
                    <a href="donation-details-right.html">
                      Quisque dictum eget accumsan dignissim. Quisque
                    </a>
                  </h3>
                  {/* <!-- /.donation-card__title --> */}
                  <a
                    href="donation-details-right.html"
                    className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                  >
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow"></span>
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">
                      donation details
                    </span>
                  </a>
                  {/* <!-- /.donation-card__btn --> */}
                </div>
                {/* <!-- /.donation-card__content --> */}
              </div>
              {/* <!-- /.donation-card --> */}
            </div>

            {/* <!-- /.item --> */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="donation-card @@extraClassName">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/donation-bg-1-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__image"
                >
                  <img
                    src="src/assets/images/donations/donation-1-5.jpg"
                    alt="Maecenas enim orci, condime ntum non risus"
                  />
                  <div className="donation-card__category">Education</div>
                  {/* <!-- /.donation-card__category --> */}
                </a>
                {/* <!-- /.donation-card__image --> */}
                <div className="donation-card__content">
                  <div className="donation-card__progress">
                    <div className="progress-box">
                      <div className="progress-box__bar">
                        <div
                          className="progress-box__bar__inner count-bar--noappear"
                          data-percent="65%"
                        >
                          <div className="progress-box__number count-text">
                            65%
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.progress-box__bar --> */}
                    </div>
                    {/* <!-- /.progress-box --> */}
                    <div className="donation-card__progress__bottom">
                      <h5 className="donation-card__progress__title">
                        Raised $<span>80,050</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                      <h5 className="donation-card__progress__title">
                        goal $<span>90,000</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                    </div>
                    {/* <!-- /.donation-card__progress__bottom --> */}
                  </div>
                  {/* <!-- /.donation-card__progress --> */}
                  <h3 className="donation-card__title">
                    <a href="donation-details-right.html">
                      Maecenas enim orci, condime ntum non risus
                    </a>
                  </h3>
                  {/* <!-- /.donation-card__title --> */}
                  <a
                    href="donation-details-right.html"
                    className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                  >
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow"></span>
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">
                      donation details
                    </span>
                  </a>
                  {/* <!-- /.donation-card__btn --> */}
                </div>
                {/* <!-- /.donation-card__content --> */}
              </div>
              {/* <!-- /.donation-card --> */}
            </div>
            {/* <!-- /.item --> */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="donation-card @@extraClassName">
                <div
                  className="donation-card__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/background/donation-bg-1-1.png)",
                  }}
                ></div>
                {/* <!-- /.donation-card__bg --> */}
                <a
                  href="donation-details-right.html"
                  className="donation-card__image"
                >
                  <img
                    src="src/assets/images/donations/donation-1-6.jpg"
                    alt="Mauris maximus neque vel euismod sagittis. Vestibulum"
                  />
                  <div className="donation-card__category">Foods</div>
                  {/* <!-- /.donation-card__category --> */}
                </a>
                {/* <!-- /.donation-card__image --> */}
                <div className="donation-card__content">
                  <div className="donation-card__progress">
                    <div className="progress-box">
                      <div className="progress-box__bar">
                        <div
                          className="progress-box__bar__inner count-bar--noappear"
                          data-percent="75%"
                        >
                          <div className="progress-box__number count-text">
                            75%
                          </div>
                        </div>
                      </div>
                      {/* <!-- /.progress-box__bar --> */}
                    </div>
                    {/* <!-- /.progress-box --> */}
                    <div className="donation-card__progress__bottom">
                      <h5 className="donation-card__progress__title">
                        Raised $<span>80,050</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                      <h5 className="donation-card__progress__title">
                        goal $<span>90,000</span>
                      </h5>
                      {/* <!-- /.donation-card__progress__title --> */}
                    </div>
                    {/* <!-- /.donation-card__progress__bottom --> */}
                  </div>
                  {/* !-- /.donation-card__progress --> */}
                  <h3 className="donation-card__title">
                    <a href="donation-details-right.html">
                      Mauris maximus neque vel euismod sagittis. Vestibulum
                    </a>
                  </h3>
                  {/* <!-- /.donation-card__title --> */}
                  <a
                    href="donation-details-right.html"
                    className="donation-card__btn cleenhearts-btn cleenhearts-btn--border-base"
                  >
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow"></span>
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">
                      donation details
                    </span>
                  </a>
                  {/* <!-- /.donation-card__btn --> */}
                </div>
                {/* <!-- /.donation-card__content --> */}
              </div>
              {/* <!-- /.donation-card --> */}
            </div>
            {/* <!-- /.item --> */}
          </div>
          {/* <!-- /.donations-one__carousel --> */}
          <div className="donations-one__row row gutter-y-30">
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="donation-information">
                <div
                  className="donation-information__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images/resources//donation-information-bg-1-1.jpg)",
                  }}
                ></div>
                {/* <!-- /.donation-information__bg --> */}
                <div className="donation-information__content">
                  <h3 className="donation-information__title">
                    Make the Most Out of Tax Time
                  </h3>
                  {/* <!-- /.donation-information__title --> */}
                  <p className="donation-information__text">
                    We help companies develop powerful corporate social
                    responsibility, grantmaking, and employee engagement
                    strategies.
                  </p>
                  {/* <!-- /.donation-information__text --> */}
                  <ul className="donation-information__list">
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Donate Money</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>handle with care</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Donate Money</span>
                    </li>
                  </ul>
                  {/* <!-- /.donation-information__list --> */}
                  <a
                    href="contact.html"
                    className="cleenhearts-btn cleenhearts-btn--border"
                  >
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow"></span>
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">read more</span>
                  </a>
                </div>
                {/* <!-- /.donation-information__content --> */}
              </div>
              {/* <!-- /.donation-information --> */}
            </div>
            {/* <!-- /.col-xl-6 --> */}
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="gift-card">
                <div
                  className="gift-card__bg"
                  style={{
                    backgroundImage:
                      "url(../src/assets/images//resources/gift-bg-1-1.jpg)",
                  }}
                ></div>
                {/* <!-- /.gift-card__bg --> */}
                <div className="gift-card__content">
                  <h3 className="gift-card__title">Make a donate now</h3>
                  {/* <!-- /.gift-card__title --> */}
                  <p className="gift-card__text">
                    We help companies develop powerful corporate social
                    responsibility, grantmaking, and employee
                  </p>
                  {/* <!-- /.gift-card__text --> */}
                  <div className="gift-card__amount">
                    <form action="#" className="gift-card__form">
                      <label
                        htmlFor="custom_amount"
                        className="gift-card__form__title"
                      >
                        Custom
                      </label>
                      <input
                        type="text"
                        value="$25"
                        name="custom-amount"
                        id="custom_amount"
                        className="gift-card__form__input"
                        placeholder="Amount"
                      />
                    </form>
                    {/* <!-- /.gift-card__form --> */}
                    <button type="button" className="gift-card__btn active">
                      $<span className="gift-card__btn__text">25</span>
                    </button>
                    {/* <!-- /.gift-card__btn --> */}
                    <button type="button" className="gift-card__btn">
                      $<span className="gift-card__btn__text">50</span>
                    </button>
                    {/* <!-- /.gift-card__btn --> */}
                    <button type="button" className="gift-card__btn">
                      $<span className="gift-card__btn__text">99</span>
                    </button>
                    {/* <!-- /.gift-card__btn --> */}
                  </div>
                  {/* <!-- /.gift-card__amount --> */}
                  <a
                    href="donate.html"
                    className="cleenhearts-btn cleenhearts-btn--border"
                  >
                    <div className="cleenhearts-btn__icon-box">
                      <div className="cleenhearts-btn__icon-box__inner">
                        <span className="icon-duble-arrow"></span>
                      </div>
                    </div>
                    <span className="cleenhearts-btn__text">donate now</span>
                  </a>
                </div>
                {/* <!-- /.gift-card__content --> */}
              </div>
              {/* <!-- /.gift-card --> */}
            </div>
            {/* <!-- /.col-xl-6 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.donations-one donations-carousel section-space-bottom --> */}
    </>
  );
};

export default Donate;
