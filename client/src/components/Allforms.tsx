import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import adminpageBackground from "./newadminpage.jpg";
import BJPLogo from "./kranthi.png";
import bandisanjayLogo from "./Bandi Sanjay Kumar.png";
interface User {
  _id: string;
  name: string;
  email: string;
  mobile: string;
}

const Allforms = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://voter-backend-2oi2.onrender.com/getusers/${localStorage.getItem(
            "id"
          )}`
        );
        setUsers(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching users. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "0px",
        backgroundImage: `url(${adminpageBackground})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        to="/admin/page"
        className="btn btn-primary"
        style={{
          fontSize: "1.2rem",
          padding: "10px 20px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        Home
      </Link>

      <div
        style={{
          display: "flex",
          flexDirection: "column", // Stack the items vertically
          alignItems: "center",
          marginLeft: "20px", // Adjust the left margin as needed
          marginRight: "20px", // Add right margin for separation
          width: "80%", // Adjust the width as needed
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <h2 style={{ color: "#fff" }}>Sri Bandi Sanjay Garu</h2>
        </div>
        <img
          src={bandisanjayLogo}
          alt="Bandi Sanjay Logo"
          style={{ height: "70px", width: "85px", borderRadius: "50%" }}
        />
      </div>
      <img
        src={BJPLogo}
        alt="Kranthi Logo"
        style={{ height: "140px", marginRight: "10px" }}
      />
      <h1 style={{ textAlign: "center", fontSize: "1.5rem", color: "#fff" }}>
        All Karyakartha
      </h1>
      <div style={{ width: "50%", marginBottom: "50px" }}>
        {users.length ? (
          <ul className="list-group">
            {users.map((user) => (
              <li
                key={user._id}
                className="list-group-item"
                style={{
                  marginBottom: "20px",
                  padding: "15px",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  background: "#fff",
                }}
              >
                <div>
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
                  <p style={{ fontSize: "1.2rem", color: "#555" }}>
                    {user.email}
                  </p>
                  <a
                    href={`tel:${user.mobile}`}
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                  >
                    Call
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "#fff" }}>No users found.</p>
        )}
      </div>
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
};

export default Allforms;
