export default function Contact({ darkMode }) {
  return (
    <div
      className={
        darkMode
          ? "bg-dark text-white min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >

      {/* Styles */}
      <style>
        {`
          .contact-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(13, 110, 253, 0.2);
          }

          .contact-input {
            border-radius: 15px;
            padding: 12px 16px;
          }

          .contact-icon {
            width: 55px;
            height: 55px;
            min-width: 55px;
          }

          .contact-title {
            font-size: 3.5rem;
          }

          @media (max-width: 991px) {
            .contact-section {
              padding-top: 50px !important;
              padding-bottom: 50px !important;
            }

            .contact-title {
              font-size: 3rem;
            }
          }

          @media (max-width: 767px) {
            .contact-section {
              padding-top: 30px !important;
              padding-bottom: 40px !important;
            }

            .contact-title {
              font-size: 2.4rem;
            }

            .contact-description {
              font-size: 1rem !important;
            }

            .contact-card {
              padding: 25px !important;
            }

            .contact-card h3 {
              font-size: 1.5rem;
            }

            .contact-input {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .contact-title {
              font-size: 2rem;
            }

            .contact-description {
              font-size: 0.95rem !important;
            }

            .contact-card {
              padding: 20px !important;
            }

            .contact-card h3 {
              font-size: 1.3rem;
            }

            .contact-icon {
              width: 48px;
              height: 48px;
              min-width: 48px;
              font-size: 18px;
            }

            .contact-input {
              padding: 10px 13px;
              font-size: 13px;
            }

            .contact-card a {
              font-size: 13px;
              word-break: break-word;
            }

            .contact-card p {
              font-size: 14px;
            }
          }
        `}
      </style>

      {/* Contact Section */}
      <section className="contact-section min-vh-100 py-5">

        <div className="container py-5">

          {/* Title */}
          <div className="text-center mb-5">

            <p className="text-primary fw-semibold fs-5 mb-2">
              Get In Touch
            </p>

            <h1 className="fw-bold contact-title">
              Contact <span className="text-primary">Me</span>
            </h1>

            <p
              className={
                darkMode
                  ? "text-secondary fs-5 mt-3 contact-description"
                  : "text-muted fs-5 mt-3 contact-description"
              }
            >
              Have a project or an opportunity? Feel free to get in touch.
            </p>

          </div>

          <div className="row g-4 justify-content-center">

            {/* Contact Information */}
            <div className="col-lg-5">

              <div
                className={
                  darkMode
                    ? "contact-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4 h-100"
                    : "contact-card bg-white border rounded-4 p-4 h-100 shadow-sm"
                }
              >

                <h3 className="fw-bold mb-4">
                  Let's <span className="text-primary">Talk</span>
                </h3>

                {/* Email */}
                <div className="d-flex align-items-center mb-4">

                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 contact-icon"
                  >
                    📧
                  </div>

                  <div>
                    <small className="text-primary">
                      Email
                    </small>

                    <p className="mb-0">
                      <a
                        href="mailto:sohillagharep@gmail.com"
                        className={
                          darkMode
                            ? "text-white text-decoration-none"
                            : "text-dark text-decoration-none"
                        }
                      >
                        sohillagharep@gmail.com
                      </a>
                    </p>
                  </div>

                </div>

                {/* Location */}
                <div className="d-flex align-items-center mb-4">

                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 contact-icon"
                  >
                    📍
                  </div>

                  <div>
                    <small className="text-primary">
                      Location
                    </small>

                    <p className="mb-0">
                      Egypt
                    </p>
                  </div>

                </div>

                {/* LinkedIn */}
                <div className="d-flex align-items-center mb-4">

                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 contact-icon"
                  >
                    💼
                  </div>

                  <div>
                    <small className="text-primary">
                      LinkedIn
                    </small>

                    <p className="mb-0">
                      <a
                        href="https://www.linkedin.com/in/sohila-ghareb-34591829b/"
                        target="_blank"
                        rel="noreferrer"
                        className={
                          darkMode
                            ? "text-white text-decoration-none"
                            : "text-dark text-decoration-none"
                        }
                      >
                        Sohila Ghareb
                      </a>
                    </p>
                  </div>

                </div>

                {/* GitHub */}
                <div className="d-flex align-items-center">

                  <div
                    className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3 contact-icon"
                  >
                    💻
                  </div>

                  <div>
                    <small className="text-primary">
                      GitHub
                    </small>

                    <p className="mb-0">
                      <a
                        href="https://github.com/sohillagharep"
                        target="_blank"
                        rel="noreferrer"
                        className={
                          darkMode
                            ? "text-white text-decoration-none"
                            : "text-dark text-decoration-none"
                        }
                      >
                        sohillagharep
                      </a>
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="col-lg-7">

              <div
                className={
                  darkMode
                    ? "contact-card bg-black bg-opacity-25 border border-secondary rounded-4 p-4"
                    : "contact-card bg-white border rounded-4 p-4 shadow-sm"
                }
              >

                <h3 className="fw-bold mb-4">
                  Send Me a <span className="text-primary">Message</span>
                </h3>

                <form>

                  <div className="row">

                    {/* Name */}
                    <div className="col-md-6 mb-3">

                      <label className="form-label">
                        Your Name
                      </label>

                      <input
                        type="text"
                        className="form-control contact-input"
                        placeholder="Enter your name"
                      />

                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">

                      <label className="form-label">
                        Your Email
                      </label>

                      <input
                        type="email"
                        className="form-control contact-input"
                        placeholder="Enter your email"
                      />

                    </div>

                  </div>

                  {/* Subject */}
                  <div className="mb-3">

                    <label className="form-label">
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control contact-input"
                      placeholder="Enter subject"
                    />

                  </div>

                  {/* Message */}
                  <div className="mb-4">

                    <label className="form-label">
                      Message
                    </label>

                    <textarea
                      className="form-control contact-input"
                      rows="6"
                      placeholder="Write your message..."
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 py-2"
                  >
                    Send Message 🚀
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}