import React from "react";
import Gallery from "../../assets/photogallery";

const PhotoGallery = () => {
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
          <h2 className="page-header__title">Gallery</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Gallery</span>
            </li>
          </ul>
          {/* <!-- /.thm-breadcrumb list-unstyled --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.page-header --> */}

      <section className="gallery-one section-space">
        <div className="container">
          <div
            className="gallery-one__top cleenhearts-owl__carousel cleenhearts-owl__carousel--basic-nav owl-carousel owl-theme"
            data-owl-options='{ "items": 1, "margin": 5, "loop": true, "smartSpeed": 700, "animateOut": "fadeOut", "nav": true, "navText": ["<span className=\"icon-arrow-left\"></span>","<span className=\"icon-arrow-right\"></span>"], "dots": false, "autoplay": true, "autoplayTimeout": 5000}'
          >
            <div className="item">
              <div
                className="gallery-one__top__image"
                style={{
                  backgroundImage:
                    "url(src/assets/images/gallery/gallery-slide-1-1.jpg)",
                }}
              ></div>
              {/* <!-- /.gallery-one__top__bg --> */}
            </div>
            {/* <!-- /.item --> */}
            <div className="item">
              <div
                className="gallery-one__top__image"
                style={{
                  backgroundImage:
                    "url(src/assets/images/gallery/gallery-slide-1-2.jpg)",
                }}
              ></div>
              {/* <!-- /.gallery-one__top__bg --> */}
            </div>
            {/* <!-- /.item --> */}
            <div className="item">
              <div
                className="gallery-one__top__image"
                style={{
                  backgroundImage:
                    "url(src/assets/images/gallery/gallery-slide-1-3.jpg)",
                }}
              ></div>
              {/* <!-- /.gallery-one__top__bg --> */}
            </div>
            {/* <!-- /.item --> */}
            <div className="item">
              <div
                className="gallery-one__top__image"
                style={{
                  backgroundImage:
                    "url(src/assets/images/gallery/gallery-slide-1-4.jpg)",
                }}
              ></div>
              {/* <!-- /.gallery-one__top__bg --> */}
            </div>
            {/* <!-- /.item --> */}
            <div className="item">
              <div
                className="gallery-one__top__image"
                style={{
                  backgroundImage:
                    "url(src/assets/images/gallery/gallery-slide-1-5.jpg)",
                }}
              ></div>
              {/* <!-- /.gallery-one__top__bg --> */}
            </div>
            {/* <!-- /.item --> */}
          </div>
          {/* <!-- /.gallery-one__top --> */}

          <div className="row gutter-y-30">
            {/* 
          {CommitteeList.map((committee) => (
              <div key={committee.id} className="item">
                <div className="team-single">
                  <div className="team-single__image">
                    <img src={committee.image} alt={committee.name} /> */}
            {Gallery.map((gallery) => (
              <div key={gallery.id} className="col-md-6 col-xl-4">
                <div className="gallery-one__card">
                  <img src={gallery.image} alt={gallery.name} />
                  <div className="gallery-one__card__hover">
                    <a href={gallery.image} className="img-popup">
                      <span className="gallery-one__card__icon"></span>
                    </a>
                  </div>
                  {/* <!-- /.gallery-one__card__hover --> */}
                </div>
                {/* <!-- /.gallery-one__card --> */}
              </div>
            ))}
            {/* <!-- /.col-md-6 col-xl-4 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </section>
      {/* <!-- /.gallery-one section-space --> */}
    </>
  );
};

export default PhotoGallery;
