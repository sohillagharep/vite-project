export default function Home({ darkMode }) {
  return (
    <div
      className={
        darkMode
          ? "bg-dark text-white min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >

      {/* Responsive + Animation */}
      <style>
        {`
          @keyframes slideFromLeft {
            0% {
              transform: translateX(-100vw);
              opacity: 0;
            }

            70% {
              transform: translateX(20px);
              opacity: 1;
            }

            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          @keyframes fadeUp {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }

            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .name-animation {
            animation: slideFromLeft 1.5s ease-out forwards;
          }

          .content-animation {
            animation: fadeUp 1s ease-out 1.2s both;
          }

          .home-section {
            min-height: calc(100vh - 80px);
          }

          .profile-image {
            width: 330px;
            height: 330px;
          }

          .home-title {
            font-size: 4.5rem;
          }

          .home-description {
            max-width: 650px;
          }

          @media (max-width: 991px) {

            .home-section {
              min-height: auto;
              padding-top: 80px;
              padding-bottom: 80px;
            }

            .home-title {
              font-size: 3.5rem;
            }

            .profile-image {
              width: 280px;
              height: 280px;
            }
          }

          @media (max-width: 767px) {

            .home-section {
              padding-top: 60px;
              padding-bottom: 60px;
              text-align: center;
            }

            .home-title {
              font-size: 2.8rem;
            }

            .home-description {
              margin-left: auto;
              margin-right: auto;
              font-size: 1rem !important;
            }

            .home-buttons {
              justify-content: center;
            }

            .profile-image {
              width: 240px;
              height: 240px;
            }

            .home-subtitle {
              font-size: 1.5rem;
            }
          }

          @media (max-width: 480px) {

            .home-section {
              padding-top: 40px;
              padding-bottom: 50px;
            }

            .home-title {
              font-size: 2.3rem;
            }

            .home-subtitle {
              font-size: 1.3rem;
            }

            .home-description {
              font-size: 0.95rem !important;
              line-height: 1.8 !important;
            }

            .profile-image {
              width: 200px;
              height: 200px;
            }

            .home-buttons {
              flex-direction: column;
              align-items: center;
              gap: 12px !important;
            }

            .home-buttons .btn {
              width: 80%;
            }
          }
        `}
      </style>

      {/* HOME */}
      <section
        id="home"
        className="home-section d-flex align-items-center"
      >

        <div className="container">

          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-7">

              <p className="text-primary fw-semibold fs-5 mb-3">
                Hello, I'm
              </p>

              {/* Name */}
              <h1 className="fw-bold name-animation home-title mb-4">
                Sohila <span className="text-primary">Ghareb</span>
              </h1>

              <div className="content-animation">

                <h2 className="fw-semibold mb-4 home-subtitle">
                  Front-End Developer
                </h2>

                <p
                  className={
                    darkMode
                      ? "text-secondary fs-5 lh-lg mb-4 home-description"
                      : "text-muted fs-5 lh-lg mb-4 home-description"
                  }
                >
                  I'm a Computer Science graduate and Front-End Developer
                  passionate about creating modern, responsive and
                  user-friendly websites.
                </p>

                {/* Buttons */}
                <div className="d-flex gap-3 flex-wrap home-buttons">

                  <a
                    href="#projects"
                    className="btn btn-primary btn-lg px-4 rounded-pill"
                  >
                    View My Work
                  </a>

                  <a
                    href="mailto:sohillagharep@gmail.com"
                    className={
                      darkMode
                        ? "btn btn-outline-light btn-lg px-4 rounded-pill"
                        : "btn btn-outline-dark btn-lg px-4 rounded-pill"
                    }
                  >
                    Contact Me
                  </a>

                </div>

              </div>

            </div>

            {/* PHOTO */}
            <div className="col-lg-5 text-center mt-5 mt-lg-0">

              <div
                className="rounded-circle mx-auto profile-image"
                style={{
                  boxShadow:
                    "0 0 60px 20px rgba(7, 97, 233, 0.35)",
                  border: "4px solid #0d6efd",
                  overflow: "hidden",
                }}
              >

                <img
                  src="/WhatsApp Image 2026-07-29 at 7.41.19 PM.jpeg"
                  alt="Sohila Ghareb"
                  className="w-100 h-100 object-fit-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}