import React from "react";
// import { FaTwitter } from "react-icons/fa"; // Importing Twitter X logo

// import X from "./X.png";

const SdpOnSocial = () => {
  return (
    <section className="sdp-social section-space">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="section-title align-content-center">
            Follow SDP on Social Media
          </h2>

          <div className="col-lg-6 col-md-8">
            <div className="card social-card">
              {/* Card Header */}
              <div className="card-header d-flex justify-content-between align-items-center">
                {/* Follow button */}
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2FSdpnig11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Follow
                </a>
                <span className="text-muted">Posts from @Sdpnig11</span>
              </div>

              {/* Card Body */}
              <div className="card-body text-center">
                {/* Large Twitter X logo */}
                <img
                  src="/src/assets/images/X.png"
                  style={{
                    marginTop: 2 + "em",
                    marginBottom: 2 + "em",
                    width: "85px",
                    height: "85px",
                    objectFit: "cover",
                  }}
                  alt=""
                />
                {/* <X size={100} className="text-twitter-blue mb-4" /> */}

                <h3>Nothing to see here yet</h3>
                <p>When they post, their posts will show up here.</p>

                {/* Button to view on X */}
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2FSdpnig11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary twitter-blue-btn"
                >
                  View on X
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdpOnSocial;
