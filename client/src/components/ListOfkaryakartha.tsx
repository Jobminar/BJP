import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import kranthiLogo from "./kranthi.png";
import bandisanjayLogo from "./Bandi Sanjay Kumar.png"; // Import the Bandi Sanjay logo

interface UserData {
  name: string;
  vid: string;
  partno: number;
  doorNo: string;
  _id: string;
}

function Allforms() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://voter-backend-2oi2.onrender.com/form/{id}`
      );
      const data = response.data.data.filter(
        (item: any) => Object.keys(item).length !== 0
      );
      setUserData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const navigateToAdminPage = () => {
    navigate("/admin/page");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: "linear-gradient(to right, orange, green)",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <button
        onClick={navigateToAdminPage}
        style={{
          backgroundColor: "#ff6f61",
          color: "white",
          fontWeight: "bold",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          marginTop: "20px",
        }}
      >
        Home
      </button>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={kranthiLogo}
          alt="Kranthi Logo"
          style={{ height: "150px", margin: "20px 0" }}
        />
        <div style={{ textAlign: "center", marginLeft: "20px" }}>
          <img
            src={bandisanjayLogo}
            alt="Bandi Sanjay Logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid orange",
              marginBottom: "0px",
            }}
          />
          <h6 style={{ color: "red", fontSize: "14px" }}>
            Sri Bandi Sanjay Garu
          </h6>
        </div>
      </div>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "40px", color: "#333" }}>
        All Voters Data
      </h1>
      {userData.map((user, index) => (
        <div
          key={index}
          style={{
            width: "300px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "lightgoldenrodyellow",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                fontSize: "1.4rem",
                fontWeight: "bold",
                color: "darkorange",
                marginBottom: "10px",
              }}
            >
              {user.name}
            </p>
            <p style={{ fontSize: "1.2rem", color: "#555" }}>VID: {user.vid}</p>
            <p style={{ fontSize: "1.2rem", color: "#555" }}>
              Part Number: {user.partno}
            </p>
            <p style={{ fontSize: "1.2rem", color: "#555" }}>
              Telephone: {user.doorNo}
            </p>
          </div>
        </div>
      ))}
      <button
        className="btn btn-info"
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 999,
        }}
      >
        Go to Top
      </button>
    </div>
  );
}

export default Allforms;
