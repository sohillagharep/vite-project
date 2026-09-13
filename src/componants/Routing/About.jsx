export default function About({ darkMode }) {
  return (
    <div
      className={
        darkMode
          ? "bg-dark text-white min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >

      {/* Responsive */}
      <style>
        {`
          .about-image {
            width: 320px;
            height: 320px;
          }

          .about-title {
            font-size: 3.5rem;
          }

          .about-text {
            font-size: 1.25rem;
          }

          @media (max-width: 991px) {
            .about-section {
              padding-top: 70px !important;
              padding-bottom: 70px !important;
            }

            .about-image {
              width: 280px;
              height: 280px;
            }

            .about-title {
              font-size: 3rem;
            }
          }

          @media (max-width: 767px) {
            .about-section {
              text-align: center;
              padding-top: 50px !important;
              padding-bottom: 50px !important;
            }

            .about-image {
              width: 240px;
              height: 240px;
            }

            .about-title {
              font-size: 2.4rem;
            }

            .about-text {
              font-size: 1rem;
              line-height: 1.8 !important;
            }

            .about-info {
              text-align: left;
            }
          }

          @media (max-width: 480px) {
            .about-image {
              width: 200px;
              height: 200px;
            }

            .about-title {
              font-size: 2rem;
            }

            .about-subtitle {
              font-size: 1.3rem;
            }

            .about-text {
              font-size: 0.95rem;
            }

            .about-info {
              text-align: center;
            }
          }
        `}
      </style>

      {/* About */}
      <section className="about-section min-vh-100 d-flex align-items-center py-5">

        <div className="container">

          <div className="row align-items-center g-5">

            {/* Image */}
            <div className="col-lg-5 text-center">

              <div
                className="rounded-circle mx-auto overflow-hidden border border-4 border-primary about-image"
                style={{
                  boxShadow:
                    "0 0 60px 20px rgba(13, 110, 253, 0.3)",
                }}
              >
                <img
                  src="/WhatsApp Image 2026-07-29 at 7.41.19 PM.jpeg"
                  alt="Sohila Ghareb"
                  className="w-100 h-100 object-fit-cover"
                />
              </div>

            </div>

            {/* About Text */}
            <div className="col-lg-7">

              <p className="text-primary fw-semibold fs-5 mb-2">
                About Me
              </p>

              <h1 className="fw-bold mb-4 about-title">
                I'm <span className="text-primary">Sohila Ghareb</span>
              </h1>

              <h3 className="fw-semibold mb-4 about-subtitle">
                Front-End Developer
              </h3>

              <p
                className={
                  darkMode
                    ? "text-secondary about-text lh-lg"
                    : "text-muted about-text lh-lg"
                }
              >
                I'm a Computer Science graduate and a passionate Front-End
                Developer who enjoys creating modern, responsive and
                user-friendly websites.
              </p>

              <p
                className={
                  darkMode
                    ? "text-secondary about-text lh-lg"
                    : "text-muted about-text lh-lg"
                }
              >
                I have experience working with HTML, CSS, JavaScript, React
                and Bootstrap. I enjoy turning ideas and designs into clean
                and interactive web experiences.
              </p>

              {/* Info Cards */}
              <div className="row mt-4 about-info">

                <div className="col-sm-6 mb-3">
                  <div className="p-3 rounded-4 bg-primary bg-opacity-10 h-100">
                    <h6 className="text-primary mb-1">
                      Education
                    </h6>

                    <p className="mb-0">
                      Computer Science
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="p-3 rounded-4 bg-primary bg-opacity-10 h-100">
                    <h6 className="text-primary mb-1">
                      Role
                    </h6>

                    <p className="mb-0">
                      Front-End Developer
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="p-3 rounded-4 bg-primary bg-opacity-10 h-100">
                    <h6 className="text-primary mb-1">
                      Location
                    </h6>

                    <p className="mb-0">
                      Egypt
                    </p>
                  </div>
                </div>

                <div className="col-sm-6 mb-3">
                  <div className="p-3 rounded-4 bg-primary bg-opacity-10 h-100">
                    <h6 className="text-primary mb-1">
                      Experience
                    </h6>

                    <p className="mb-0">
                      Front-End Projects
                    </p>
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