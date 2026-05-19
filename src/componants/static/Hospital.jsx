import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/imges/logo.png";
import st2 from "../../assets/imges/st2.png";
import city2 from "../../assets/imges/city2.png";
import lakeside from "../../assets/imges/lakeside.png";
import mayo from "../../assets/imges/mayo.png";

import {
  FaHospital,
  FaCalendarAlt,
  FaTachometerAlt,
  FaBell,
  FaCog,
  FaUserCircle,
  FaSearch,
  FaChevronDown,
  FaPen,
  FaTrash
} from "react-icons/fa";

export default function HospitalPage() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [hospitalFilter, setHospitalFilter] = useState("All Hospitals");
const [ratingFilter, setRatingFilter] = useState("All Ratings");
const [specialtyFilter, setSpecialtyFilter] = useState("Multi-select...");

  const [hospitals, setHospitals] = useState([
    {
      id: 1,
      name: "St. Mary’s General",
      code: "ID: CP-90210 • New York, NY",
      rating: 4.9,
      reviews: "(1.2k reviews)",
      specialties: ["CARDIOLOGY", "NEUROLOGY", "+2"],
      status: "FEATURED",
      image: st2
    },

    {
      id: 2,
      name: "City Pediatric Center",
      code: "ID: CP-44201 • Chicago, IL",
      rating: 4.2,
      reviews: "(840 reviews)",
      specialties: ["PEDIATRICS", "SURGERY"],
      status: "STANDARD",
      image: city2
    },

    {
      id: 3,
      name: "Lakeside Orthopedics",
      code: "ID: CP-21098 • Austin, TX",
      rating: 4.7,
      reviews: "(2.1k reviews)",
      specialties: ["ORTHOPEDICS", "PHYSIOTHERAPY"],
      status: "FEATURED",
      image: lakeside
    },

    {
      id: 4,
      name: "Mayo Clinic Partner",
      code: "ID: CP-33811 • Rochester, MN",
      rating: 5.0,
      reviews: "(4.5k reviews)",
      specialties: ["ONCOLOGY", "RADIOLOGY", "+5"],
      status: "FEATURED",
      image: mayo
    }
  ]);

  const toggle = (name) => {
    setOpen(open === name ? null : name);
  };

  const handleDeleteClick = (hospital) => {
    setSelectedHospital(hospital);
    setShowModal(true);
  };

  const handleDelete = () => {
    setHospitals(hospitals.filter((h) => h.id !== selectedHospital.id));
    setShowModal(false);
  };

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
              onClick={() => navigate("/Logout")}
            >
              <FaCalendarAlt className="me-2" 
              />
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

        {/* Header */}
        <div className="bg-white rounded-4 shadow-sm px-4 py-3 mb-4">

          <div className="d-flex justify-content-between align-items-center">

            <div
              className="d-flex align-items-center px-3"
              style={{
                background: "#f3f5f9",
                borderRadius: "12px",
                width: "320px",
                height: "45px"
              }}
            >
              <FaSearch className="text-muted me-2" />

              <input
                type="text"
                placeholder="Search hospital name..."
                className="border-0 bg-transparent w-100"
                style={{ outline: "none" }}
              />
            </div>

            <div className="d-flex align-items-center gap-4">

              <FaBell />

              <FaCog />

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

        </div>

        {/* Title */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h2
              className="fw-bold"
              style={{ color: "#1e3a8a" }}
            >
              Hospital Registry
            </h2>

            <p className="text-muted mb-0">
              Manage and monitor health service providers across the network.
            </p>

          </div>

          <div className="d-flex bg-white shadow-sm rounded-4 overflow-hidden">

            <div className="px-4 py-2 text-center border-end">
              <small className="text-muted d-block">
                ACTIVE FACILITIES
              </small>

              <h5 className="fw-bold text-primary mb-0">
                128
              </h5>
            </div>

            <div className="px-4 py-2 text-center">
              <small className="text-muted d-block">
                TOP RATED
              </small>

              <h5 className="fw-bold text-success mb-0">
                42
              </h5>
            </div>

          </div>

        </div>

       {/* Filters */}
<div
  className="bg-white shadow-sm rounded-4 p-4 mb-4"
>

  <div className="row g-3">

    {/* All Hospitals */}
    <div className="col-md-3">

      <small className="text-muted fw-semibold d-block mb-2">
        FEATURED STATUS
      </small>

      <div
        onClick={() => toggle("hospital")}
        className="d-flex justify-content-between align-items-center px-3"
        style={{
          background: "#f3f5f9",
          borderRadius: "10px",
          height: "45px",
          cursor: "pointer"
        }}
      >
        <span>{hospitalFilter}</span>

        <FaChevronDown size={12} />
      </div>

      {open === "hospital" && (
        <div
          className="bg-white shadow-sm rounded-3 mt-2 p-2 w-100"
          style={{
            border: "1px solid #eee"
          }}
        >

          {["All Hospitals", "Standard", "Featured"].map((item, i) => (

            <div
              key={i}
              className="p-2 rounded"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setHospitalFilter(item);
                setOpen(null);
              }}
            >
              {item}
            </div>

          ))}

        </div>
      )}

    </div>

    {/* Ratings */}
    <div className="col-md-3">

      <small className="text-muted fw-semibold d-block mb-2">
        MINIMUM RATING
      </small>

      <div
        onClick={() => toggle("rating")}
        className="d-flex justify-content-between align-items-center px-3"
        style={{
          background: "#f3f5f9",
          borderRadius: "10px",
          height: "45px",
          cursor: "pointer"
        }}
      >
        <span>{ratingFilter}</span>

        <FaChevronDown size={12} />
      </div>


























      

      {open === "rating" && (
        <div
          className="bg-white shadow-sm rounded-3 mt-2 p-2 w-100"
          style={{
            border: "1px solid #eee"
          }}
        >

          {[
            "All Ratings",
            "5 Stars",
            "4 Stars & Up",
            "3 Stars & Below"
          ].map((item, i) => (

            <div
              key={i}
              className="p-2 rounded"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setRatingFilter(item);
                setOpen(null);
              }}
            >
              {item}
            </div>

          ))}

        </div>
      )}

    </div>

    {/* Multi Select */}
    <div className="col-md-3">

      <small className="text-muted fw-semibold d-block mb-2">
        SPECIALTIES
      </small>

      <div
        onClick={() => toggle("specialties")}
        className="d-flex justify-content-between align-items-center px-3"
        style={{
          background: "#f3f5f9",
          borderRadius: "10px",
          height: "45px",
          cursor: "pointer"
        }}
      >
        <span>{specialtyFilter}</span>

        <FaChevronDown size={12} />
      </div>

      {open === "specialties" && (
        <div
          className="bg-white shadow-sm rounded-3 mt-2 w-100"
          style={{
            border: "1px solid #eee"
          }}
        >

          {[
            "Cardiology",
            "Neurology",
            "Pediatrics",
            "Orthopedics",
            "Surgery",
            "Emergency"
          ].map((item, i) => (

            <div
              key={i}
              className="p-2 border-bottom"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSpecialtyFilter(item);
                setOpen(null);
              }}
            >
              {item}
            </div>

          ))}

        </div>
      )}

    </div>

    {/* Clear Filters */}
    <div className="col-md-3 d-flex align-items-end">

      <button
        className="btn w-100"
        style={{
          background: "#f3f5f9",
          height: "45px",
          color: "#666"
        }}
        onClick={() => {
          setHospitalFilter("All Hospitals");
          setRatingFilter("All Ratings");
          setSpecialtyFilter("Multi-select...");
        }}
      >
        Clear Filters
      </button>

    </div>

  </div>

</div>

        {/* Table */}
        <div className="bg-white shadow-sm rounded-4 overflow-hidden">

          <table className="table align-middle mb-0">

            <thead
              style={{
                background: "#f8fafc"
              }}
            >
              <tr className="text-muted small">
                <th className="ps-4">HOSPITAL NAME</th>
                <th>RATING</th>
                <th>SPECIALTIES</th>
                <th>FEATURED STATUS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>

            <tbody>

              {hospitals.map((h) => (

                <tr key={h.id}>

                  {/* Hospital */}
                  <td className="ps-4">

                    <div className="d-flex align-items-center gap-3">

                      <img
                        src={h.image}
                        alt=""
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "10px",
                          objectFit: "cover"
                        }}
                      />

                      <div>

                        <div
                          className="fw-bold"
                          style={{ color: "#1e3a8a" }}
                        >
                          {h.name}
                        </div>

                        <small className="text-muted">
                          {h.code}
                        </small>

                      </div>

                    </div>

                  </td>

                  {/* Rating */}
                  <td>

                    <div className="d-flex align-items-center gap-1">

                      <span style={{ color: "#f59e0b" }}>
                        ★
                      </span>

                      <span className="fw-bold">
                        {h.rating}
                      </span>

                      <small className="text-muted">
                        {h.reviews}
                      </small>

                    </div>

                  </td>

                  {/* Specialties */}
                  <td>

                    <div className="d-flex gap-2 flex-wrap">

                      {h.specialties.map((s, i) => (

                        <span
                          key={i}
                          className="badge"
                          style={{
                            background: "#eef2ff",
                            color: "#2563eb",
                            fontSize: "10px",
                            padding: "6px 10px",
                            borderRadius: "20px"
                          }}
                        >
                          {s}
                        </span>

                      ))}

                    </div>

                  </td>

                  {/* Status */}
                  <td>

                    <span
                      className="badge"
                      style={{
                        background:
                          h.status === "FEATURED"
                            ? "#d1fae5"
                            : "#e5e7eb",

                        color:
                          h.status === "FEATURED"
                            ? "#059669"
                            : "#6b7280",

                        padding: "7px 14px",
                        borderRadius: "20px"
                      }}
                    >
                      ● {h.status}
                    </span>

                  </td>

                  {/* Actions */}
                  <td>

                    <div className="d-flex gap-3">

                      <FaPen
                        style={{
                          cursor: "pointer",
                          color: "#64748b"
                        }}
                        onClick={() => navigate("/config")}
                      />

                      <FaTrash
                        style={{
                          cursor: "pointer",
                          color: "#64748b"
                        }}
                        onClick={() => handleDeleteClick(h)}
                      />

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <div
            className="px-4 py-3 text-muted small"
            style={{
              background: "#f8fafc"
            }}
          >
            Showing 1-4 of 128 hospitals
          </div>

        </div>

        {/* Delete Modal */}
        {showModal && (
          <div
            className="modal d-block"
            style={{ background: "rgba(0,0,0,0.5)" }}
          >

            <div className="modal-dialog modal-dialog-centered">

              <div className="modal-content border-0 rounded-4 p-3">

                <div className="modal-header border-0">
                  <h5 className="fw-bold text-danger">
                    Delete Hospital
                  </h5>

                  <button
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body">
                  Are you sure you want to delete
                  <strong> {selectedHospital?.name}</strong> ?
                </div>

                <div className="modal-footer border-0">

                  <button
                    className="btn btn-light"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          </div>
        )}

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
    </div>
  );
}