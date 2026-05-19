import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imges/logo.png";
import coverImg from "../../assets/imges/cover.png";

import {
  FaHospital,
  FaCalendarAlt,
  FaTachometerAlt,
  FaBell,
  FaCog,
  FaUserCircle
} from "react-icons/fa";

export default function HospitalConfig() {

  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div className="d-flex bg-light">

      {/* Sidebar */}
            <div
              className="bg-white d-flex flex-column justify-content-between p-4 shadow-sm"
              style={{
                width: "250px",
                minHeight: "100vh",
                borderRight: "1px solid #eee"
              }}
            >
      
              <div>
      
                {/* Logo */}
                <div className="d-flex align-items-center gap-2 mb-5">
      
                  <div
                    style={{
                      width: "50px",
                      height: "50px"
                    }}
                  >
                    <img
                      src={logo}
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain"
                      }}
                    />
                  </div>
      
                  <div>
                    <h5 className="fw-bold text-primary mb-0">
                      CarePoint
                    </h5>
      
                    <small
                      className="text-muted"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "1px"
                      }}
                    >
                      CLINICAL PRECISION
                    </small>
                  </div>
      
                </div>
      
                {/* Menu */}
                <ul className="nav flex-column">
      
                  <li
                    className="nav-item mb-2"
                    style={{
                      padding: "12px",
                      borderRadius: "10px",
                      cursor: "pointer",
                      color: "#666"
                    }}
                    onClick={() => navigate("/Dash")}
                  >
                    <FaTachometerAlt className="me-2" />
                    Dashboard
                  </li>
      
                  <li
                    className="nav-item mb-2"
                    style={{
                      background: "#f4f7ff",
                      borderRadius: "10px",
                      padding: "12px",
                      color: "#0d6efd",
                      fontWeight: "600",
                      cursor: "pointer"
                    }}
                  >
                    <FaHospital className="me-2" />
                    Hospitals
                  </li>
      
                  <li
                    className="nav-item"
                    style={{
                      padding: "12px",
                      cursor: "pointer",
                      color: "#666"
                    }}
                  >
                    <FaCalendarAlt className="me-2" />
                    Appointments
                  </li>
      
                </ul>
      
              </div>
      
              {/* Bottom */}
              <div>
      
                <button
                  className="btn btn-primary w-100 rounded-3 mb-4"
                  onClick={() => navigate("/Add")}
                >
                  + Add New Hospital
                </button>
      
                <div className="small text-muted mb-3">
                  Support
                </div>
      
                <div className="small text-muted">
                  Account
                </div>
      
              </div>
      
            </div>

      {/* Main */}
      <div className="flex-grow-1 p-4">

        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <small
              className="fw-bold"
              style={{
                color: "#94a3b8",
                letterSpacing: "1px"
              }}
            >
              HOSPITALS &nbsp; &gt; &nbsp;
              <span className="text-primary">
                EDIT HOSPITAL PROFILE
              </span>
            </small>

            <h1
              className="fw-bold mt-2"
              style={{ color: "#1e293b" }}
            >
              Hospital Configuration
            </h1>

            <p className="text-muted">
              Manage clinical operational data and public-facing profile information.
            </p>
          </div>

          <div className="d-flex align-items-center gap-4">

            <FaBell
              style={{
                cursor: "pointer",
                color: "#64748b"
              }}
            />

            <FaCog
              style={{
                cursor: "pointer",
                color: "#64748b"
              }}
            />

            <div className="d-flex align-items-center gap-2">

              <FaUserCircle size={28} />

              <span
                className="fw-bold text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => setShowLogout(true)}
              >
                Logout
              </span>

            </div>

          </div>

        </div>

        {/* Live Badge */}
        <div className="d-flex justify-content-end mb-4">

          <div
            className="px-4 py-2 rounded-pill"
            style={{
              background: "#dcfce7",
              color: "#16a34a",
              fontWeight: "600",
              fontSize: "14px"
            }}
          >
            ● Live on Portal
          </div>

        </div>

        {/* Main Content */}
        <div
          className="bg-white shadow-sm rounded-4 p-4"
        >

          <div className="row">

            {/* Left */}
            <div className="col-md-4">

              <h6 className="fw-bold mb-3">
                COVER MEDIA
              </h6>

              <div
                className="bg-light rounded-4 p-3 mb-5 text-center"
              >
                <img
  src={coverImg}
  alt="hospital cover"
  className="img-fluid rounded-3"
  style={{
    width: "100%",
    height: "160px",
    objectFit: "cover"
  }}
/>
              </div>

              <h6 className="fw-bold mb-4">
                OPERATIONS
              </h6>

              {/* Availability */}
              <div
                className="bg-light rounded-4 p-3 mb-3"
              >

                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <div className="fw-bold">
                      Availability
                    </div>

                    <small className="text-muted">
                      Current operational status
                    </small>
                  </div>

                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />
                  </div>

                </div>

              </div>

              {/* Featured */}
              <div className="mb-3">

                <input
                  type="checkbox"
                  className="form-check-input me-2"
                />

                <span className="fw-semibold">
                  Featured Facility
                </span>

                <div
                  className="text-muted small ms-4"
                >
                  Promote to the top of discovery lists
                </div>

              </div>

              {/* Emergency */}
              <div>

                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  defaultChecked
                />

                <span className="fw-semibold">
                  Emergency Support
                </span>

                <div
                  className="text-muted small ms-4"
                >
                  24/7 Trauma and ER active flag
                </div>

              </div>

            </div>

            {/* Right */}
            <div className="col-md-8">

              {/* Hospital Name */}
              <div className="mb-4">

                <label className="fw-bold small mb-2">
                  HOSPITAL NAME
                </label>

                <input
                  className="form-control border-0"
                  defaultValue="St. Metropolitan General Hospital"
                  style={{
                    background: "#f1f5f9",
                    height: "50px",
                    borderRadius: "12px"
                  }}
                />

              </div>

              {/* Address */}
              <div className="mb-4">

                <label className="fw-bold small mb-2">
                  PHYSICAL ADDRESS
                </label>

                <input
                  className="form-control border-0"
                  defaultValue="4522 Health Parkway, Medical District, NY 10012"
                  style={{
                    background: "#f1f5f9",
                    height: "50px",
                    borderRadius: "12px"
                  }}
                />

              </div>

              {/* Row */}
              <div className="row">

                <div className="col-md-6 mb-4">

                  <label className="fw-bold small mb-2">
                    WHATSAPP NUMBER
                  </label>

                  <input
                    className="form-control border-0"
                    defaultValue="+1 (212) 455-9000"
                    style={{
                      background: "#f1f5f9",
                      height: "50px",
                      borderRadius: "12px"
                    }}
                  />

                </div>

                <div className="col-md-6 mb-4">

                  <label className="fw-bold small mb-2">
                    GLOBAL RATING (1-5)
                  </label>

                  <input
                    className="form-control border-0"
                    defaultValue="⭐ 4.8"
                    style={{
                      background: "#f1f5f9",
                      height: "50px",
                      borderRadius: "12px"
                    }}
                  />

                </div>

              </div>

              {/* Working Hours */}
              <div className="row">

                <div className="col-md-6 mb-4">

                  <label className="fw-bold small mb-2">
                    WORKING HOURS
                  </label>

                  <input
                    className="form-control border-0"
                    defaultValue="MON-FRI : 08:00 AM - 10:00 PM"
                    style={{
                      background: "#f1f5f9",
                      height: "50px",
                      borderRadius: "12px"
                    }}
                  />

                </div>

                <div className="col-md-6 mb-4">

                  <label className="fw-bold small mb-2">
                    WEEKEND
                  </label>

                  <input
                    className="form-control border-0"
                    defaultValue="24 Hours"
                    style={{
                      background: "#f1f5f9",
                      height: "50px",
                      borderRadius: "12px"
                    }}
                  />

                </div>

              </div>

              {/* Specialties */}
              <div className="mb-4">

                <label className="fw-bold small mb-3">
                  MEDICAL SPECIALTIES
                </label>

                <div
                  className="bg-light rounded-4 p-3"
                >

                  <span className="badge bg-primary me-2 p-2">
                    Cardiology ✕
                  </span>

                  <span className="badge bg-primary me-2 p-2">
                    Pediatrics ✕
                  </span>

                  <span className="badge bg-primary me-2 p-2">
                    Neurology ✕
                  </span>

                  <span
                    className="badge text-secondary border p-2"
                  >
                    + Add Specialty
                  </span>

                </div>

              </div>

              {/* Description */}
              <div>

                <label className="fw-bold small mb-2">
                  HOSPITAL DESCRIPTION
                </label>

                <textarea
                  className="form-control border-0"
                  rows="4"
                  defaultValue="Leading the way in personalized healthcare since 1985. St. Metropolitan offers state-of-the-art diagnostic imaging and a dedicated trauma center."
                  style={{
                    background: "#f1f5f9",
                    borderRadius: "12px"
                  }}
                />

              </div>

            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-3 mt-4">

          <button
            className="btn btn-light px-5 py-2 rounded-3 fw-bold"
          >
            Cancel Changes
          </button>

          <button
            className="btn btn-primary px-5 py-2 rounded-3 fw-bold"
          >
            Save Changes
          </button>

        </div>

      </div>

      {/* Logout Modal */}
      {showLogout && (
        <div
          className="modal d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">

            <div className="modal-content border-0 p-4 text-center rounded-4">

              <div
                style={{
                  width: "65px",
                  height: "65px",
                  background: "#fdecec",
                  borderRadius: "18px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px"
                }}
              >
                <span
                  style={{
                    fontSize: "26px",
                    color: "red"
                  }}
                >
                  ↪
                </span>
              </div>

              <h4 className="fw-bold">
                Confirm Logout
              </h4>

              <p className="text-muted mt-2">
                Are you sure you want to log out of the
                <b> CarePoint Admin </b>
                terminal?
              </p>

              <div className="d-flex justify-content-center gap-2 mt-3">

                <button
                  className="btn btn-light px-4"
                  onClick={() => setShowLogout(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-danger px-4"
                  onClick={() => navigate("/Login")}
                >
                  Logout
                </button>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}