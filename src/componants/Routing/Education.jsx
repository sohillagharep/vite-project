export default function Education({ darkMode }) {
  return (
    <div
      className={
        darkMode
          ? "bg-dark text-white min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >

      <style>
        {`
          .education-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .education-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 35px rgba(13, 110, 253, 0.2);
          }

          .education-icon {
            width: 120px;
            height: 120px;
          }

          .education-title {
            font-size: 3.5rem;
          }

          @media (max-width: 991px) {
            .education-section {
              padding-top: 50px !important;
              padding-bottom: 50px !important;
            }

            .education-title {
              font-size: 3rem;
            }
          }

          @media (max-width: 767px) {
            .education-section {
              padding-top: 30px !important;
              padding-bottom: 40px !important;
            }

            .education-title {
              font-size: 2.4rem;
            }

            .education-description {
              font-size: 1rem !important;
            }

            .education-card {
              padding: 25px !important;
              text-align: center;
            }

            .education-icon {
              width: 100px;
              height: 100px;
              margin-bottom: 25px;
            }

            .education-card h2 {
              font-size: 1.6rem;
            }

            .education-card h5 {
              font-size: 1.1rem;
            }

            .education-card p {
              font-size: 1rem !important;
            }

            .education-tags {
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .education-title {
              font-size: 2rem;
            }

            .education-icon {
              width: 85px;
              height: 85px;
            }

            .education-card {
              padding: 20px !important;
            }

            .education-card h2 {
              font-size: 1.4rem;
            }

            .education-card h5 {
              font-size: 1rem;
            }

            .education-card p {
              font-size: 0.95rem !important;
              line-height: 1.8 !important;
            }

            .education-tags .badge {
              font-size: 11px;
            }
          }
        `}
      </style>

      {/* Education Section */}
      <section className="education-section min-vh-100 py-5">

        <div className="container py-5">

          {/* Title */}
          <div className="text-center mb-5">

            <p className="text-primary fw-semibold fs-5 mb-2">
              My Education
            </p>

            <h1 className="fw-bold education-title">
              My <span className="text-primary">Academic Journey</span>
            </h1>

            <p
              className={
                darkMode
                  ? "text-secondary fs-5 mt-3 education-description"
                  : "text-muted fs-5 mt-3 education-description"
              }
            >
              My educational background and academic journey.
            </p>

          </div>

          {/* Education Card */}
          <div className="row justify-content-center">

            <div className="col-lg-9 col-xl-8">

              <div
                className={
                  darkMode
                    ? "education-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 p-md-5"
                    : "education-card bg-white border rounded-4 p-4 p-md-5 shadow-sm"
                }
              >

                <div className="row align-items-center">

                  {/* Icon */}
                  <div className="col-md-3 text-center mb-4 mb-md-0">

                    <div
                      className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mx-auto education-icon"
                    >
                      <img
                        src="/1630568878332.jpg"
                        alt="Education"
                        className="w-100 h-100 rounded-circle object-fit-cover"
                      />
                    </div>

                  </div>

                  {/* Details */}
                  <div className="col-md-9">

                    <span className="badge bg-primary rounded-pill px-3 py-2 mb-3">
                      2022 - 2026
                    </span>

                    <h2 className="fw-bold mb-2">
                      Computer Science
                    </h2>

                    <h5 className="text-primary mb-3">
                      Obour Institute of Computers
                    </h5>

                    <p
                      className={
                        darkMode
                          ? "text-secondary fs-5 lh-lg mb-3"
                          : "text-muted fs-5 lh-lg mb-3"
                      }
                    >
                      Bachelor's degree in Computer Science with a focus on
                      developing technical skills and building modern
                      software and web applications.
                    </p>

                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2 education-tags">

                      <span className="badge bg-primary bg-opacity-10 text-primary p-2">
                        Computer Science
                      </span>

                      <span className="badge bg-primary bg-opacity-10 text-primary p-2">
                        Web Development
                      </span>

                      <span className="badge bg-primary bg-opacity-10 text-primary p-2">
                        Programming
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}