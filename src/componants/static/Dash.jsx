import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/imges/logo.png";
import city from "../../assets/imges/city.png";
import st from "../../assets/imges/st.png";
import apolo from "../../assets/imges/apolo.png";

import {
  FaHospital,
  FaCalendarAlt,
  FaTachometerAlt,
  FaBell,
  FaCog,
  FaUsers,
  FaClipboardList,
  FaUserCircle,
  FaBars
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const cards = [
    {
      title: "TOTAL HOSPITALS",
      value: "142",
      color: "primary",
      icon: <FaHospital className="text-primary" />,
      growth: "+4.6%"
    },
    {
      title: "ACTIVE USERS",
      value: "8.2k",
      color: "success",
      icon: <FaUsers className="text-success" />,
      growth: "+12%"
    },
    {
      title: "TOTAL BOOKINGS",
      value: "24.5k",
      color: "warning",
      icon: <FaClipboardList className="text-warning" />,
      growth: "-2.1%"
    }
  ];

  const partners = [
    {
      name: "City General Hospital",
      location: "New York",
      rating: "4.9",
      img: city
    },
    {
      name: "St. Jude Pediatrics",
      location: "London",
      rating: "4.8",
      img: st
    },
    {
      name: "Apollo Heart Center",
      location: "Singapore",
      rating: "5.0",
      img: apolo
    }
  ];

  const appointments = [
    {
      initials: "JD",
      patient: "John Doe",
      id: "ID: #49201",
      doctor: "Dr. Alicia Smith",
      facility: "City General Hospital",
      specialty: "NEUROLOGY",
      time: "Today, 14:30",
      type: "Remote Consultation",
      status: "Confirmed",
      badge: "success"
    },
    {
      initials: "MR",
      patient: "Maria Rodriguez",
      id: "ID: #49305",
      doctor: "Dr. Kevin Park",
      facility: "Apollo Heart Center",
      specialty: "CARDIOLOGY",
      time: "Oct 25, 09:15",
      type: "In-Person Visit",
      status: "In Progress",
      badge: "warning"
    },
    {
      initials: "SW",
      patient: "Samuel Wright",
      id: "ID: #49184",
      doctor: "Dr. Alicia Smith",
      facility: "City General Hospital",
      specialty: "GENERAL MEDICINE",
      time: "Oct 24, 16:45",
      type: "Emergency Walk-in",
      status: "Cancelled",
      badge: "danger"
    }
  ];

  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      
      {/* Top Mobile Navbar */}
      <div className="d-lg-none bg-white shadow-sm p-3 d-flex justify-content-between align-items-center">
        
        <div className="d-flex align-items-center gap-2">
          <img
            src={logo}
            alt=""
            style={{
              width: "40px",
              height: "40px",
              objectFit: "contain"
            }}
          />

          <h5 className="fw-bold text-primary mb-0">
            CarePoint
          </h5>
        </div>

        <FaBars
          size={22}
          style={{ cursor: "pointer" }}
          onClick={() => setShowSidebar(!showSidebar)}
        />
      </div>

      <div className="d-flex">

        {/* Sidebar */}
        <div
          className={`bg-white shadow-sm p-4 ${
            showSidebar ? "d-block" : "d-none d-lg-flex"
          } flex-column justify-content-between`}
          style={{
            width: "250px",
            minHeight: "100vh",
            borderRight: "1px solid #eee",
            position: "fixed",
            zIndex: 1000
          }}
        >
          <div>

            {/* Logo */}
            <div className="d-flex align-items-center gap-2 mb-4">
              <img
                src={logo}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain"
                }}
              />

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
            <ul className="nav flex-column mt-4">

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
                <FaTachometerAlt className="me-2" />
                Dashboard
              </li>

              <li
                className="nav-item mb-2"
                style={{
                  padding: "12px",
                  cursor: "pointer",
                  color: "#555"
                }}
                onClick={() => navigate("/Hospital")}
              >
                <FaHospital className="me-2" />
                Hospitals
              </li>

              <li
                className="nav-item"
                style={{
                  padding: "12px",
                  cursor: "pointer",
                  color: "#555"
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
        <div
          className="flex-grow-1 p-3 p-lg-4"
          style={{
            marginLeft: window.innerWidth >= 992 ? "250px" : "0",
            width: "100%"
          }}
        >

          {/* Header */}
          <div className="d-flex flex-wrap justify-content-end align-items-center mb-4 gap-3">

            <FaBell style={{ cursor: "pointer" }} />

            <FaCog style={{ cursor: "pointer" }} />

            <div className="text-end">
              <div className="fw-bold small">
                Admin
              </div>

              <small className="text-muted">
                Head Administrator
              </small>
            </div>

            <FaUserCircle size={30} />

            <span
              className="text-primary fw-bold"
              style={{ cursor: "pointer" }}
              onClick={() => setShowLogout(true)}
            >
              Logout
            </span>
          </div>

          {/* Cards */}
          <div className="row g-3">

            {cards.map((item, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>

                <div
                  className={`card border-0 shadow-sm border-start border-4 border-${item.color}`}
                  style={{ borderRadius: "14px" }}
                >
                  <div className="card-body d-flex justify-content-between align-items-center">

                    <div>
                      <small className="text-muted fw-semibold">
                        {item.title}
                      </small>

                      <div className="d-flex align-items-center gap-2">
                        <h2 className="fw-bold mb-0">
                          {item.value}
                        </h2>

                        <small
                          className={
                            item.growth.includes("-")
                              ? "text-danger"
                              : "text-success"
                          }
                        >
                          {item.growth}
                        </small>
                      </div>
                    </div>

                    <div style={{ fontSize: "22px" }}>
                      {item.icon}
                    </div>

                  </div>
                </div>

              </div>
            ))}

          </div>

          {/* Charts + Partners */}
          <div className="row mt-4 g-4">

            {/* Chart */}
            <div className="col-12 col-lg-8">

              <div
                className="card border-0 shadow-sm p-3 p-lg-4"
                style={{ borderRadius: "16px" }}
              >

                <div className="d-flex flex-column flex-sm-row justify-content-between gap-3">

                  <div>
                    <h5 className="fw-bold mb-1">
                      Booking Trends
                    </h5>

                    <small className="text-muted">
                      Weekly patient appointment volume
                    </small>
                  </div>

                </div>

                {/* Bars */}
                <div
                  className="d-flex align-items-end justify-content-between mt-5 overflow-auto"
                  style={{ height: "230px" }}
                >
                  {[70, 110, 80, 150, 200, 130, 100].map((h, i) => (

                    <div
                      key={i}
                      className="text-center mx-2"
                    >

                      <div
                        className={
                          i === 4
                            ? "bg-primary"
                            : "bg-secondary bg-opacity-25"
                        }
                        style={{
                          width: "40px",
                          height: `${h}px`,
                          borderRadius: "8px",
                          position: "relative"
                        }}
                      >

                        {i === 4 && (
                          <span className="badge bg-dark position-absolute top-0 start-50 translate-middle">
                            2.4k
                          </span>
                        )}

                      </div>

                      <small
                        className={`d-block mt-2 ${
                          i === 4
                            ? "text-primary fw-bold"
                            : "text-muted"
                        }`}
                      >
                        {
                          ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][i]
                        }
                      </small>

                    </div>

                  ))}
                </div>

              </div>

            </div>

            {/* Partners */}
            <div className="col-12 col-lg-4">

              <div
                className="card border-0 shadow-sm p-3"
                style={{ borderRadius: "16px" }}
              >

                <h5 className="fw-bold mb-3">
                  Premium Partners
                </h5>

                {partners.map((item, i) => (

                  <div
                    key={i}
                    className="d-flex align-items-center mb-3 p-2 rounded-3"
                  >

                    <img
                      src={item.img}
                      alt=""
                      className="rounded me-3"
                      style={{
                        width: "48px",
                        height: "48px",
                        objectFit: "cover"
                      }}
                    />

                    <div>
                      <div className="fw-bold small">
                        {item.name}
                      </div>

                      <small className="text-muted d-block">
                        {item.location} • {item.rating}
                      </small>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Table */}
          <div
            className="card border-0 shadow-sm mt-4"
            style={{ borderRadius: "16px" }}
          >

            <div className="card-body p-3 p-lg-4">

              <h5 className="fw-bold mb-4">
                Recent Appointments
              </h5>

              <div className="table-responsive">

                <table className="table align-middle">

                  <thead>
                    <tr className="text-muted small">
                      <th>PATIENT</th>
                      <th>DOCTOR</th>
                      <th>SPECIALTY</th>
                      <th>TIME</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>

                  <tbody>

                    {appointments.map((item, i) => (

                      <tr key={i}>

                        <td>
                          <div className="d-flex align-items-center gap-3">

                            <div
                              className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                              style={{
                                width: "35px",
                                height: "35px",
                                background: "#eef2ff",
                                color: "#4f46e5",
                                fontSize: "12px"
                              }}
                            >
                              {item.initials}
                            </div>

                            <div>
                              <div className="fw-bold small">
                                {item.patient}
                              </div>

                              <small className="text-muted">
                                {item.id}
                              </small>
                            </div>

                          </div>
                        </td>

                        <td>
                          <div className="fw-semibold small">
                            {item.doctor}
                          </div>

                          <small className="text-muted">
                            {item.facility}
                          </small>
                        </td>

                        <td>
                          <span className="badge bg-light text-dark">
                            {item.specialty}
                          </span>
                        </td>

                        <td>
                          <div className="fw-semibold small">
                            {item.time}
                          </div>

                          <small className="text-muted">
                            {item.type}
                          </small>
                        </td>

                        <td>
                          <span className={`badge bg-${item.badge}`}>
                            {item.status}
                          </span>
                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Logout Modal */}
      {showLogout && (
        <div
          className="modal d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
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
  );
}