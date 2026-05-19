import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imges/logo.png";

export default function CarePointLogin() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-light px-3"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: "16px",
        }}
      >
        {/* Logo */}
        <div className="text-center mb-4">
          <div className="d-flex justify-content-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center overflow-hidden"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <h3 className="fw-bold">CarePoint</h3>

          <p className="text-muted small mb-0">
            Clinical Precision Administration
          </p>
        </div>

        {/* Form */}
        <div>
          <h5 className="fw-semibold">Secure Access</h5>

          <p className="text-muted small mb-4">
            Enter your credentials to manage the facility.
          </p>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-light py-2"
              placeholder="name@carepoint.com"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control bg-light py-2"
              placeholder="********"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" />

              <label className="form-check-label small">
                Remember this device
              </label>
            </div>

            <a href="#" className="small text-primary text-decoration-none">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            className="btn btn-primary w-100 py-2"
            onClick={() => navigate("/dash")}
          >
            Login to CarePoint →
          </button>
        </div>

        {/* Legal Notice */}
        <div className="mt-4 p-3 bg-light rounded small text-muted">
          <strong>Legal Notice:</strong> This system is for authorized
          clinical personnel only. All access and activity is logged and
          monitored. Unauthorized access attempts are subject to criminal
          prosecution.
        </div>

        {/* Footer */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 mt-3 small text-muted text-center">
          <span>Support Center</span>
          <span>Security Policy</span>
          <span>Status</span>
        </div>
      </div>
    </div>
  );
}