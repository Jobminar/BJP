// // export default UserLogin;
// import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import backgroundImage from "./Mobilebjp.jpg"; // Update the image path accordingly
// import logo from "./Bjplogo.png";
// import SanjayImage from "./newadminpage.jpg";
// import axios, { AxiosError } from "axios";
// import jmLogo from "./politicalsaradi.png";
// const UserLogin = () => {
//   const handleSuccessfulLogin = (token: string) => {
//     localStorage.setItem("userToken", token);
//   };
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // ... (previous code remains unchanged)

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         `https://voter-backend-2oi2.onrender.com/admin/login`,
//         formData
//       );

//       const { m, token, role } = response.data;

//       if (m === "ok") {
//         // Storing name and id in localStorage
//         const { user, id, oid } = response.data;
//         localStorage.setItem("user", user);
//         localStorage.setItem("id", id);
//         localStorage.setItem("oid", oid);

//         console.log("Token:", token);
//         console.log("user:", user);
//         console.log("ID:", id);
//         console.log("OID:", oid);

//         handleSuccessfulLogin(token);

//         if (role === "admin") {
//           navigate("/admin/page");
//         } else {
//           navigate("/home");
//         }
//       } else {
//         // Handle error case
//         setError(m); // Display the error message
//         console.log("Error Message:", m);

//         if (m === "invalid email") {
//           // Redirect to a specific page for invalid email
//           navigate("/");
//         } else {
//           // Redirect to a specific page for other errors
//           navigate("/");
//           alert("Invalid password or username");
//         }
//       }
//     } catch (error) {
//       // Handle other errors
//       if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError;
//         if (axiosError.response && axiosError.response.data) {
//           setError((axiosError.response.data as { message: string }).message);
//           console.log(
//             "Error Message:",
//             (axiosError.response.data as { message: string }).message
//           );

//           if (axiosError.response.status === 401) {
//             // Redirect to a specific page for incorrect passwords
//             navigate("/admin/login");
//             alert("Incorrect password or username");
//           }
//         } else {
//           setError(
//             "An error occurred during the login process. Please try again later."
//           );
//           console.log("Unknown Error");
//         }
//       } else {
//         setError("An unknown error occurred. Please try again later.");
//         console.log("Unknown Error");
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000); // Simulating a loading time of 2 seconds

//     return () => clearTimeout(timer); // Clear timeout on component unmount
//   }, []);

//   if (isLoading) {
//     return (
//       <div
//         style={{
//           height: "100vh",
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: `url(${backgroundImage}) no-repeat center center fixed`,
//           backgroundSize: "contain",
//         }}
//       >
//         <h1 style={{ fontSize: "1.2em" }}>Loading...</h1>
//       </div>
//     );
//   }

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundImage: `url(${SanjayImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <div
//         style={{
//           width: "80%",
//           maxWidth: 300,
//           backgroundColor: "white",
//           padding: 20,
//           fontSize: "1.2em",
//           marginTop: "22px",
//         }}
//       >
//         <div style={{ display: "flex" }}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{ marginBottom: "10px", width: "45%" }}
//           />
//           <img
//             src={jmLogo}
//             alt="logo"
//             style={{ marginBottom: "5px", width: "70%" }}
//           />
//         </div>

//         <form onSubmit={handleSubmit}>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn bg-blue-400"
//             style={{ width: "100%", fontSize: "1.2em" }}
//           >
//             Login
//           </button>
//         </form>
//         <p style={{ marginTop: 10, textAlign: "center", fontSize: "1.2em" }}>
//           Don't have an account? <a href="/Askleader">Signup</a>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;
// ---------------------------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./newbackground.jpg"; // Update the image path accordingly
import logo from "./Bjplogo.png";
import SanjayImage from "./newadminpage.jpg";
import jmLogo from "./politicalsaradi.png";

const UserLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const [buttonBgColor, setButtonBgColor] = useState("bg-orange-400");

  const handleClick = () => {
    // Change background color on click
    setButtonBgColor("bg-blue-400");

    // Simulate loading of backgroundImage
    setIsLoading(true);

    // After a delay, navigate to the specified route
    setTimeout(() => {
      navigate("/home");
    }, 1000); // Simulating a loading time of 1 second
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulating a loading time of 2 seconds

    return () => clearTimeout(timer); // Clear timeout on component unmount
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: `url(${backgroundImage}) no-repeat center center fixed`,
          backgroundSize: "contain",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1 style={{ fontSize: "1.2em" }}>Loading...</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${SanjayImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: 300,
          backgroundColor: "white",
          padding: 20,
          fontSize: "1.2em",
          marginTop: "22px",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={logo}
            alt="logo"
            style={{ marginBottom: "10px", width: "45%" }}
          />
          <img
            src={jmLogo}
            alt="logo"
            style={{ marginBottom: "5px", width: "70%" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <button
            className={`btn ${buttonBgColor}`}
            style={{
              width: "100%",
              fontSize: "2.5em",
              marginBottom: "10px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              color: "green",
              // Add more styles as needed
            }}
            onClick={handleClick}
          >
            Go to BJP Canvassing
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
