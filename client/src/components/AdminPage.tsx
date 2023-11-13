import React, { useState } from "react";
import BJPLogo from "./kranthi.png";
import { useNavigate } from "react-router-dom";
import CopyToClipboard from "react-copy-to-clipboard";
import adminpageBackground from "./newadminpage.jpg";
import BandiSanjayLogo from "./Bandi Sanjay Kumar.png";

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const oid = "654a7a1e648a3580a0ef9723"; // your OID

  function gotoUserLogin() {
    navigate("/user/signup");
  }

  const goToList = async () => {
    navigate("/list");
  };

  const goToallKaryakartha = () => {
    navigate("/all");
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div
      className="container min-vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${adminpageBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src={BJPLogo}
            alt="BJP Logo"
            style={{ width: "200px", height: "auto", marginRight: "20px" }}
          />
          <div style={{ textAlign: "center" }}>
            <img
              src={BandiSanjayLogo}
              alt="Bandi Sanjay Logo"
              style={{
                width: "80px", // Adjust the width as needed
                height: "80px", // Adjust the height as needed
                borderRadius: "50%",
                border: "2px solid orange", // Add orange border
                marginBottom: "0px", // Adjust margin as needed
              }}
            />
            <h6 style={{ color: "red", fontSize: "14px" }}>
              Sri Bandi Sanjay Garu
            </h6>
          </div>
        </div>
      </div>

      <button
        className="btn btn-danger fw-bold mb-4"
        onClick={logout}
        style={{
          height: "50px",
          width: "100px",
          background: "linear-gradient(135deg, orange, saffron)",
          color: "white",
        }}
      >
        Logout
      </button>

      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ width: "250px", margin: "0 auto" }}
      >
        <div
          className="d-flex flex-grow: 1"
          style={{ maxWidth: "250px", margin: "10px 0" }}
        >
          <div
            className="card bg-success d-flex align-items-center justify-content-center cursor-pointer"
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              height: "100px",
              background: "linear-gradient(135deg, orange, saffron)",
            }}
            onClick={gotoUserLogin}
          >
            <span className="fs-6 fw-bold text-white text-center">
              + Add Karyakartha <i className="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div
          className="d-flex flex-grow: 1"
          style={{ maxWidth: "250px", margin: "10px 0" }}
        >
          <div
            className="card bg-info d-flex align-items-center justify-content-center cursor-pointer"
            style={{
              borderRadius: "10px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
              height: "100px",
              background: "linear-gradient(135deg, orange, coral)",
            }}
            onClick={goToallKaryakartha}
          >
            <span className="fs-6 fw-bold text-white text-center">
              List of Karyakartha <i className="fas fa-list"></i>
            </span>
          </div>
        </div>

        <div
          className="d-flex flex-grow: 1"
          style={{ maxWidth: "250px", margin: "10px 0" }}
        >
          <div
            className="card bg-primary d-flex align-items-center justify-content-center cursor-pointer"
            style={{
              borderRadius: "10px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
              height: "100px",
              background: "linear-gradient(135deg, orange, deepskyblue)",
            }}
            onClick={goToList}
          >
            <span className="fs-6 fw-bold text-white text-center">
              Forms submitted by Karyakartha <i className="fas fa-file-alt"></i>
            </span>
          </div>
        </div>

        <div
          className="d-flex flex-grow: 1"
          style={{ maxWidth: "250px", margin: "10px 0" }}
        >
          <div
            className="card bg-primary d-flex flex-column align-items-center justify-content-center cursor-pointer"
            style={{
              borderRadius: "10px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
              height: "100px",
              background: "linear-gradient(135deg, orange, deepskyblue)",
            }}
          >
            <label
              htmlFor="oid"
              className="fs-6 fw-bold text-white text-center"
            >
              your OID
            </label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                id="oid"
                value={oid}
                disabled
                style={{ width: "150px", marginLeft: "10px" }}
              />
              <CopyToClipboard text={oid} onCopy={() => setCopied(true)}>
                <button
                  className="btn btn-secondary"
                  style={{ marginLeft: "10px" }}
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
