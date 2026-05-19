import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/imges/logo.png";

import { Hospital } from "react-bootstrap-icons";

import {
  FaTachometerAlt,
  FaHospital,
  FaCalendarAlt,
  FaBell,
  FaCog,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

export default function AppointmentsPage() {
  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);

  // RESPONSIVE SIDEBAR
  const [showSidebar, setShowSidebar] = useState(false);

  // FILTER
  const [activeTab, setActiveTab] = useState("All");

  const data = [
    {
      name: "Eleanor Jones",
      doctor: "Dr. Sarah Mitchell",
      specialty: "CARDIOLOGY",
      hospital: "Central General",
      date: "Oct 24, 2023",
      time: "10:30 AM",
      status: "Upcoming",
      payment: "Paid",
    },
    {
      name: "Robert King",
      doctor: "Dr. James Wilson",
      specialty: "NEUROLOGY",
      hospital: "St. Mary's Clinic",
      date: "Oct 23, 2023",
      time: "02:15 PM",
      status: "Completed",
      payment: "Paid",
    },
    {
      name: "Maria Benson",
      doctor: "Dr. Lisa Chen",
      specialty: "PEDIATRICS",
      hospital: "North Wellness",
      date: "Oct 23, 2023",
      time: "09:00 AM",
      status: "Cancelled",
      payment: "Refunded",
    },
    {
      name: "Thomas Wright",
      doctor: "Dr. Sarah Mitchell",
      specialty: "CARDIOLOGY",
      hospital: "Central General",
      date: "Oct 25, 2023",
      time: "11:15 AM",
      status: "Upcoming",
      payment: "Pending",
    },
  ];

  const filteredData =
    activeTab === "All"
      ? data
      : data.filter((item) => item.status === activeTab);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  const badgeStyle = (type) => {
    if (type === "Upcoming")
      return {
        background: "#dcfce7",
        color: "#16a34a",
      };

    if (type === "Completed")
      return {
        background: "#e5e7eb",
        color: "#6b7280",
      };

    if (type === "Cancelled")
      return {
        background: "#fee2e2",
        color: "#dc2626",
      };

    if (type === "Paid")
      return {
        background: "#dcfce7",
        color: "#16a34a",
      };

    if (type === "Pending")
      return {
        background: "#fef3c7",
        color: "#d97706",
      };

    if (type === "Refunded")
      return {
        background: "#e5e7eb",
        color: "#6b7280",
      };
  };

  return (
    <>
      {/* RESPONSIVE CSS */}

      <style>
        {`
          .sidebar {
            width: 250px;
            min-height: 100vh;
            transition: 0.3s;
            z-index: 999;
          }

          .table-responsive {
            overflow-x: auto;
          }

          @media (max-width: 992px) {
            .sidebar {
              position: fixed;
              left: -260px;
              top: 0;
              background: white;
            }

            .sidebar.show {
              left: 0;
            }

            .main-content {
              width: 100%;
              padding: 20px !important;
            }

            .top-section {
              flex-direction: column;
              align-items: flex-start !important;
              gap: 20px;
            }

            .stats-boxes {
              width: 100%;
              flex-wrap: wrap;
            }

            .stats-card {
              width: 100% !important;
            }

            .filter-buttons {
              overflow-x: auto;
              flex-wrap: nowrap !important;
              padding-bottom: 10px;
            }
          }

          @media (max-width: 768px) {
            .header-icons {
              gap: 10px !important;
            }

            .appointments-title h2 {
              font-size: 24px;
            }

            .appointments-title p {
              font-size: 14px;
            }

            table {
              min-width: 900px;
            }
          }
        `}
      </style>

      <div
        className="d-flex"
        style={{
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        {/* ================= SIDEBAR ================= */}

        <div
          className={`bg-white d-flex flex-column justify-content-between p-4 shadow-sm sidebar ${
            showSidebar ? "show" : ""
          }`}
          style={{
            borderRight: "1px solid #eee",
          }}
        >
          <div>
            {/* LOGO */}

            <div className="d-flex align-items-center gap-2 mb-4">
              <div
                style={{
                  width: "50px",
                  height: "50px",
                }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
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
                    letterSpacing: "1px",
                  }}
                >
                  CLINICAL PRECISION
                </small>
              </div>
            </div>

            {/* MENU */}

            <ul className="nav flex-column mt-4">
              <li
                className="nav-item mb-2"
                style={menuStyle}
                onClick={() => navigate("/Dash")}
              >
                <FaTachometerAlt className="me-2" />
                Dashboard
              </li>

              <li
                className="nav-item mb-2"
                style={menuStyle}
                onClick={() => navigate("/Hospital")}
              >
                <FaHospital className="me-2" />
                Hospitals
              </li>

              <li
                className="nav-item mb-2"
                style={{
                  background: "#f4f7ff",
                  borderRadius: "10px",
                  padding: "12px",
                  color: "#0d6efd",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                <FaCalendarAlt className="me-2" />
                Appointments
              </li>
            </ul>
          </div>

          {/* BOTTOM */}

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

        {/* ================= MAIN ================= */}

        <div className="flex-grow-1 p-4 main-content">
          {/* HEADER */}

          <div className="d-flex justify-content-between align-items-center mb-4">
            {/* MENU BUTTON MOBILE */}

            <button
              className="btn btn-light d-lg-none"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBars />
            </button>

            <div className="d-flex justify-content-end align-items-center gap-3 ms-auto header-icons">
              <FaBell style={{ cursor: "pointer" }} />

              <FaCog style={{ cursor: "pointer" }} />

              <FaUserCircle size={30} />

              <span
                className="text-primary fw-bold"
                style={{ cursor: "pointer" }}
                onClick={() => setShowLogout(true)}
              >
                Logout
              </span>
            </div>
          </div>

          {/* TITLE */}

          <div className="d-flex justify-content-between align-items-center mb-4 top-section">
            <div className="appointments-title">
              <h2 style={{ fontWeight: "700" }}>
                Appointments
              </h2>

              <p style={{ color: "#6b7280" }}>
                Manage and monitor clinical schedules in
                real-time.
              </p>
            </div>

            {/* STATS */}

            <div className="d-flex gap-3 stats-boxes">
              <div
                className="stats-card"
                style={{
                  background: "#fff",
                  width: "140px",
                  padding: "18px",
                  borderRadius: "16px",
                  borderLeft: "4px solid #2563eb",
                }}
              >
                <small
                  style={{
                    color: "#6b7280",
                    fontWeight: "600",
                  }}
                >
                  TODAY
                </small>

                <h3
                  style={{
                    marginTop: "8px",
                    fontWeight: "700",
                  }}
                >
                  42
                </h3>
              </div>

              <div
                className="stats-card"
                style={{
                  background: "#fff",
                  width: "140px",
                  padding: "18px",
                  borderRadius: "16px",
                  borderLeft: "4px solid #10b981",
                }}
              >
                <small
                  style={{
                    color: "#6b7280",
                    fontWeight: "600",
                  }}
                >
                  CONFIRMED
                </small>

                <h3
                  style={{
                    marginTop: "8px",
                    fontWeight: "700",
                  }}
                >
                  128
                </h3>
              </div>
            </div>
          </div>

          {/* FILTERS */}

          <div className="d-flex gap-3 mb-4 filter-buttons">
            <button
              onClick={() => setActiveTab("All")}
              className={`btn rounded-pill px-4 ${
                activeTab === "All"
                  ? "btn-primary"
                  : "btn-light"
              }`}
            >
              All
            </button>

            <button
              onClick={() => setActiveTab("Upcoming")}
              className={`btn rounded-pill px-4 ${
                activeTab === "Upcoming"
                  ? "btn-primary"
                  : "btn-light"
              }`}
            >
              Upcoming
            </button>

            <button
              onClick={() => setActiveTab("Completed")}
              className={`btn rounded-pill px-4 ${
                activeTab === "Completed"
                  ? "btn-primary"
                  : "btn-light"
              }`}
            >
              Completed
            </button>

            <button
              onClick={() => setActiveTab("Cancelled")}
              className={`btn rounded-pill px-4 ${
                activeTab === "Cancelled"
                  ? "btn-primary"
                  : "btn-light"
              }`}
            >
              Cancelled
            </button>
          </div>

          {/* TABLE */}

          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
            }}
          >
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead
                  style={{
                    background: "#f8fafc",
                    color: "#6b7280",
                    fontSize: "13px",
                  }}
                >
                  <tr>
                    <th className="ps-4">PATIENT NAME</th>
                    <th>DOCTOR</th>
                    <th>HOSPITAL</th>
                    <th>TIME & DATE</th>
                    <th>STATUS</th>
                    <th>PAYMENT STATUS</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredData.map((item, i) => (
                    <tr key={i}>
                      <td className="ps-4">
                        <div className="d-flex align-items-center gap-3">
                          <div
                            style={{
                              width: "38px",
                              height: "38px",
                              borderRadius: "50%",
                              background: "#dbeafe",
                              color: "#2563eb",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: "700",
                              fontSize: "13px",
                            }}
                          >
                            {getInitials(item.name)}
                          </div>

                          <div>
                            <div
                              style={{
                                fontWeight: "600",
                                fontSize: "14px",
                              }}
                            >
                              {item.name}
                            </div>

                            <small
                              style={{ color: "#9ca3af" }}
                            >
                              ID: #AP-{921 + i}
                            </small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <div style={{ fontWeight: "600" }}>
                          {item.doctor}
                        </div>

                        <small
                          style={{
                            color: "#9ca3af",
                            fontSize: "11px",
                            letterSpacing: "1px",
                          }}
                        >
                          {item.specialty}
                        </small>
                      </td>

                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <Hospital
                            color="#2563eb"
                            size={15}
                          />

                          <span>{item.hospital}</span>
                        </div>
                      </td>

                      <td>
                        <div>{item.date}</div>

                        <small style={{ color: "#9ca3af" }}>
                          {item.time}
                        </small>
                      </td>

                      <td>
                        <span
                          style={{
                            ...badgeStyle(item.status),
                            padding: "6px 12px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          ● {item.status}
                        </span>
                      </td>

                      <td>
                        <span
                          style={{
                            ...badgeStyle(item.payment),
                            padding: "6px 12px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          ● {item.payment}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              style={{
                padding: "14px 20px",
                background: "#f8fafc",
                color: "#6b7280",
                fontSize: "14px",
              }}
            >
              Showing {filteredData.length} appointments
            </div>
          </div>
        </div>

        {/* LOGOUT MODAL */}

        {showLogout && (
          <div
            className="modal d-block"
            style={{
              background: "rgba(0,0,0,0.5)",
            }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div
                className="modal-content border-0 p-4 text-center"
                style={{ borderRadius: "18px" }}
              >
                <h4 className="fw-bold">
                  Confirm Logout
                </h4>

                <p className="text-muted mt-2">
                  Are you sure you want to log out?
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
    </>
  );
}

const menuStyle = {
  padding: "12px",
  cursor: "pointer",
  color: "#555",
};