import React from "react";
import Manifesto from "./manifesto.pdf";

const PartyManifesto = () => {
  // Dummy PDF URL for preview and download
  const pdfUrl = Manifesto; // Replace with the actual PDF path

  return (
    <section className="manifesto section-space">
      <div className="container">
        <div className="row justify-content-center">
          <h2 className="section-title text-center">Download Our Manifesto</h2>

          <div className="col-lg-8 col-md-10">
            <div className="card manifesto-card">
              {/* Card Header */}
              <div className="card-header d-flex justify-content-between align-items-center">
                <span className="text-muted">Preview</span>
              </div>

              {/* Card Body for PDF Preview */}
              <div className="card-body text-center">
                {/* PDF Preview */}
                <iframe
                  src={pdfUrl}
                  width="100%"
                  height="500px"
                  title="Manifesto PDF Preview"
                  frameBorder="0"
                ></iframe>

                {/* Button to download the PDF */}
                <a
                  href={pdfUrl}
                  download
                  className="btn btn-primary twitter-blue-btn mt-4"
                >
                  Download Manifesto
                </a>
              </div>
            </div>
          </div>

          {/* Additional Download Button Below */}
          <div className="col-12 text-center mt-5">
            <a href={pdfUrl} download className="btn btn-dark btn-lg">
              Download Manifesto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartyManifesto;
