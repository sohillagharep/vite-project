import { NavLink } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <>
      <nav
        className={
          darkMode
            ? "navbar navbar-dark bg-black py-3"
            : "navbar navbar-light bg-white py-3 shadow-sm"
        }
      >
        <div className="container">

          {/* Logo */}
          <NavLink
            to="/"
            className="navbar-brand fw-bold fs-3"
          >
            Sohila<span className="text-primary"> Ghareb</span>
          </NavLink>

          {/* Links */}
          <div className="navbar-links d-flex align-items-center justify-content-end flex-wrap">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? "active-link" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? "active-link" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? "active-link" : ""}`
              }
            >
              Skills
            </NavLink>

            <NavLink
              to="/education"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? "active-link" : ""}`
              }
            >
              Education
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? "active-link" : ""}`
              }
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link-custom ${isActive ? "active-link" : ""}`
              }
            >
              Contact
            </NavLink>

            {/* Dark / Light */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="btn btn-primary rounded-pill px-3 mood-button"
            >
              {darkMode ? "☀️ Light Mood" : "🌙 Dark Mood"}
            </button>

          </div>
        </div>
      </nav>

      <style>
        {`
          .nav-link-custom {
            color: inherit;
            text-decoration: none;
            padding: 8px 16px;
            margin: 3px;
            border-radius: 25px;
            background: rgba(13, 110, 253, 0.1);
            white-space: nowrap;
          }

          .nav-link-custom:hover {
            color: inherit;
          }

          /* الصفحة الحالية */
          .nav-link-custom.active-link {
            background: #0d6efd;
            color: white !important;
          }

          .navbar-links {
            gap: 2px;
          }

          .mood-button {
            margin-left: 8px;
            white-space: nowrap;
          }

          /* Tablet */
          @media (max-width: 991px) {
            .navbar .container {
              flex-direction: column;
              gap: 15px;
            }

            .navbar-links {
              justify-content: center !important;
            }
          }

          /* Mobile */
          @media (max-width: 767px) {
            .navbar {
              padding-top: 15px !important;
              padding-bottom: 15px !important;
            }

            .navbar-brand {
              font-size: 28px !important;
            }

            .navbar-links {
              width: 100%;
              justify-content: center !important;
              gap: 3px;
            }

            .nav-link-custom {
              padding: 7px 11px;
              font-size: 14px;
            }

            .mood-button {
              margin-left: 3px;
              font-size: 14px;
              padding: 7px 12px !important;
            }
          }

          /* Small Mobile */
          @media (max-width: 480px) {
            .navbar .container {
              gap: 12px;
            }

            .navbar-brand {
              font-size: 25px !important;
            }

            .navbar-links {
              gap: 2px;
            }

            .nav-link-custom {
              padding: 6px 8px;
              font-size: 12px;
            }

            .mood-button {
              font-size: 12px;
              padding: 6px 9px !important;
            }
          }

          /* Very Small Screens */
          @media (max-width: 380px) {
            .nav-link-custom {
              padding: 5px 7px;
              font-size: 11px;
            }

            .mood-button {
              font-size: 11px;
              padding: 5px 8px !important;
            }
          }
        `}
      </style>
    </>
  );
}