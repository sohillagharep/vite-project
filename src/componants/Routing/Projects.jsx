export default function Projects({ darkMode }) {
  return (
    <div
      className={
        darkMode
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >

      <style>
        {`
          .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .project-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 15px 35px rgba(13, 110, 253, 0.2);
          }

          .project-image {
            height: 300px;
            object-fit: cover;
          }

          .projects-title {
            font-size: 3.5rem;
          }

          .projects-description {
            font-size: 1.1rem;
          }

          .project-text {
            line-height: 1.8;
          }

          .modal-project-image {
            width: 100%;
            border-radius: 12px;
          }

          @media (max-width: 991px) {
            .projects-section {
              padding-top: 40px !important;
              padding-bottom: 40px !important;
            }

            .projects-title {
              font-size: 3rem;
            }

            .project-image {
              height: 260px;
            }
          }

          @media (max-width: 767px) {
            .projects-section {
              padding-top: 30px !important;
              padding-bottom: 40px !important;
            }

            .projects-title {
              font-size: 2.4rem;
            }

            .projects-description {
              font-size: 1rem;
            }

            .project-image {
              height: 230px;
            }

            .project-card .card-body {
              padding: 25px !important;
            }

            .project-card h2 {
              font-size: 1.6rem;
            }

            .project-text {
              font-size: 0.95rem;
            }

            .modal-dialog {
              margin: 10px;
            }

            .modal-body {
              padding: 15px;
            }
          }

          @media (max-width: 480px) {
            .projects-title {
              font-size: 2rem;
            }

            .projects-description {
              font-size: 0.95rem;
            }

            .project-image {
              height: 200px;
            }

            .project-card .card-body {
              padding: 20px !important;
            }

            .project-card h2 {
              font-size: 1.4rem;
            }

            .project-text {
              font-size: 0.9rem;
              line-height: 1.7;
            }

            .project-card .badge {
              font-size: 11px;
            }

            .project-card .btn {
              width: 100%;
            }

            .modal-title {
              font-size: 1rem;
            }

            .modal-footer .btn {
              width: 100%;
            }
          }
        `}
      </style>

      {/* ================= PROJECTS ================= */}
      <section className="projects-section container py-5">

        {/* Title */}
        <div className="text-center mb-5">

          <h1 className="fw-bold projects-title">
            My <span className="text-primary">Projects</span>
          </h1>

          <p
            className={
              darkMode
                ? "text-secondary mt-3 projects-description"
                : "text-muted mt-3 projects-description"
            }
          >
            Here are some of the projects I have worked on.
          </p>

        </div>

        {/* ================= PROJECTS ROW ================= */}
        <div className="row g-4">

          {/* ================= CAREPOINT ================= */}
          <div className="col-12 col-md-6">

            <div
              className={
                darkMode
                  ? "card project-card bg-black bg-opacity-25 text-light border-secondary rounded-4 overflow-hidden h-100"
                  : "card project-card bg-white text-dark border rounded-4 shadow-sm overflow-hidden h-100"
              }
            >

              {/* Project Image */}
              <img
                src="/carepoint/main.png"
                alt="CarePoint"
                className="img-fluid w-100 project-image"
              />

              {/* Card Body */}
              <div className="card-body p-4 d-flex flex-column">

                <h2 className="fw-bold mb-3">
                  CarePoint
                </h2>

                <p
                  className={
                    darkMode
                      ? "text-secondary project-text"
                      : "text-muted project-text"
                  }
                >
                  CarePoint is a smart hospital system that helps users
                  assess their symptoms, determine the emergency level,
                  and find suitable hospitals based on specialty,
                  distance, rating, and emergency availability.
                </p>

                {/* Technologies */}
                <div className="d-flex flex-wrap gap-2 mb-4">

                  <span className="badge bg-primary">
                    React
                  </span>

                  <span className="badge bg-primary">
                    JavaScript
                  </span>

                  <span className="badge bg-primary">
                    Bootstrap
                  </span>

                  <span className="badge bg-primary">
                    JSX
                  </span>

                </div>

                {/* Button */}
                <div className="mt-auto">

                  <button
                    type="button"
                    className="btn btn-primary rounded-pill px-4"
                    data-bs-toggle="modal"
                    data-bs-target="#carePointModal"
                  >
                    Show Photos 📸
                  </button>

                </div>

              </div>

            </div>

          </div>

          {/* ================= ADMIN SYSTEM ================= */}
          <div className="col-12 col-md-6">

            <div
              className={
                darkMode
                  ? "card project-card bg-black bg-opacity-25 text-light border-secondary rounded-4 overflow-hidden h-100"
                  : "card project-card bg-white text-dark border rounded-4 shadow-sm overflow-hidden h-100"
              }
            >

              {/* Project Image */}
              <img
                src="/admin-system/main.png"
                alt="Admin System"
                className="img-fluid w-100 project-image"
              />

              {/* Card Body */}
              <div className="card-body p-4 d-flex flex-column">

                <h2 className="fw-bold mb-3">
                  Admin System
                </h2>

                <p
                  className={
                    darkMode
                      ? "text-secondary project-text"
                      : "text-muted project-text"
                  }
                >
                  A responsive administration system for managing hospital
                  information, configurations, and system data through a
                  clean and user-friendly interface.
                </p>

                {/* Technologies */}
                <div className="d-flex flex-wrap gap-2 mb-4">

                  <span className="badge bg-primary">
                    React
                  </span>

                  <span className="badge bg-primary">
                    JavaScript
                  </span>

                  <span className="badge bg-primary">
                    Bootstrap
                  </span>

                  <span className="badge bg-primary">
                    JSX
                  </span>

                </div>

                {/* Button */}
                <div className="mt-auto">

                  <button
                    type="button"
                    className="btn btn-primary rounded-pill px-4"
                    data-bs-toggle="modal"
                    data-bs-target="#adminSystemModal"
                  >
                    Show Photos 📸
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* CAREPOINT MODAL */}
      {/* ================================================= */}

      <div
        className="modal fade"
        id="carePointModal"
        tabIndex="-1"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">

          <div
            className={
              darkMode
                ? "modal-content bg-dark text-light"
                : "modal-content bg-white text-dark"
            }
          >

            {/* Header */}
            <div className="modal-header">

              <h5 className="modal-title fw-bold">
                CarePoint Photos 📸
              </h5>

              <button
                type="button"
                className={
                  darkMode
                    ? "btn-close btn-close-white"
                    : "btn-close"
                }
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

            </div>

            {/* Body */}
            <div className="modal-body">

              <div className="row g-3">

                <div className="col-12 col-md-6">
                  <img
                    src="/img1.png"
                    alt="CarePoint Home"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img2.png"
                    alt="CarePoint Symptoms"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img3.png"
                    alt="CarePoint Hospitals"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img4.png"
                    alt="CarePoint Admin"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img5.png"
                    alt="CarePoint Login"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img6.png"
                    alt="CarePoint Dashboard"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img7.png"
                    alt="CarePoint Screen"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img8.png"
                    alt="CarePoint Screen"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img9.png"
                    alt="CarePoint Screen"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img10.png"
                    alt="CarePoint Screen"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/img11.png"
                    alt="CarePoint Screen"
                    className="modal-project-image"
                  />
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary rounded-pill px-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* ADMIN SYSTEM MODAL */}
      {/* ================================================= */}

      <div
        className="modal fade"
        id="adminSystemModal"
        tabIndex="-1"
        aria-hidden="true"
      >

        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">

          <div
            className={
              darkMode
                ? "modal-content bg-dark text-light"
                : "modal-content bg-white text-dark"
            }
          >

            {/* Header */}
            <div className="modal-header">

              <h5 className="modal-title fw-bold">
                Admin System Photos 📸
              </h5>

              <button
                type="button"
                className={
                  darkMode
                    ? "btn-close btn-close-white"
                    : "btn-close"
                }
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

            </div>

            {/* Body */}
            <div className="modal-body">

              <div className="row g-3">

                <div className="col-12 col-md-6">
                  <img
                    src="/ime1.png"
                    alt="Admin System"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/ime2.png"
                    alt="Admin System"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/ime3.png"
                    alt="Admin System"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/ime4.png"
                    alt="Admin System"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/ime5.png"
                    alt="Admin System"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/ime6.png"
                    alt="Admin System"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/ime7.png"
                    alt="Admin System"
                    className="modal-project-image"
                  />
                </div>

                <div className="col-12 col-md-6">
                  <img
                    src="/ime8.png"
                    alt="Admin System"
                    className="modal-project-image"
                  />
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary rounded-pill px-4"
                data-bs-dismiss="modal"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}