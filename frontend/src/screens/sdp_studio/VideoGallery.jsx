import React from "react";
import Gallery from "../../assets/videogallery"; // Ensure this contains video links instead of image links

const VideoGallery = () => {
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
        <div className="container">
          <h2 className="page-header__title">Video Gallery</h2>
          <ul className="cleenhearts-breadcrumb list-unstyled">
            <li>
              <i className="icon-home"></i> <a href="/">Home</a>
            </li>
            <li>
              <span>Gallery</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="gallery-one section-space">
        <div className="container">
          <div className="row gutter-y-30">
            {/* Map through the gallery array to display videos */}
            {Gallery.map((gallery) => (
              <div key={gallery.id} className="col-md-6 col-xl-4">
                <div className="gallery-one__card">
                  {/* Replace img with video */}
                  <video
                    src={gallery.video} // Assuming the gallery object contains a video link
                    alt={gallery.name}
                    controls
                    width="100%"
                    height="auto"
                  />
                  {/* <div className="gallery-one__card__hover">
                    <a href={gallery.video} className="video-popup">
                      <span className="gallery-one__card__icon"></span>
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoGallery;
