// // import axios from 'axios';
// // import React, { useState, useEffect, useCallback } from 'react';

// // interface UserPageDataProps {
// //   vid: string;
// //   partNo: number;
// //   house: string;
// // }

// // interface VoterData {
// //   EPIC_NO: string;
// //   C_HOUSE_NO: string;
// //   NAME: string;
// //   PART_NO:string
// // }

// // function UserPageDataPrint({ vid, partNo, house }: UserPageDataProps) {
// //   const [data, setData] = useState<VoterData[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [newVid, setNewVid] = useState(vid);
// //   const [newPartNo, setNewPartNo] = useState(partNo);
// //   const [newHouse, setNewHouse] = useState(house);

// //   const fetchData = useCallback(async () => {
// //     setLoading(true);
// //     try {
// //       const queryParams = new URLSearchParams();
// //       if (newVid) {
// //         queryParams.append('vid', newVid);
// //       }
// //       if (newPartNo) {
// //         queryParams.append('partNo', newPartNo.toString());
// //       }
// //       if (newHouse) {
// //         queryParams.append('house', newHouse);
// //       }

// //       const apiUrl = `https://voter-backend-2oi2.onrender.com/voterdata?${queryParams}`;

// //       const response = await axios.get(apiUrl);
// //       setData(response.data.data);
// //       setLoading(false);
// //     } catch (err) {
// //       console.log(err);
// //       setLoading(false);
// //     }
// //   }, [newVid, newPartNo, newHouse]);

// //   useEffect(() => {
// //     const source = axios.CancelToken.source();

// //     fetchData();

// //     return () => {
// //       // Cleanup: Cancel the Axios request when the component unmounts
// //       source.cancel('Request canceled');
// //     };
// //   }, [fetchData]);

// //   return (
// //     <div>
// //       <h1>Voter Data</h1>
// //       <div>
// //         <label>EPIC Number:</label>
// //         <input type="text" value={newVid} onChange={(e) => setNewVid(e.target.value)} />
// //       </div>
// //       <div>
// //         <label>Part Number:</label>
// //         <input type="number" value={newPartNo} onChange={(e) => setNewPartNo(parseInt(e.target.value))} />
// //       </div>
// //       <div>
// //         <label>House Number:</label>
// //         <input type="text" value={newHouse} onChange={(e) => setNewHouse(e.target.value)} />
// //       </div>
// //       <button onClick={fetchData}>Search</button>
// //       <div>
// //         {loading ? (
// //           <p>Loading...</p>
// //         ) : (
// //           <ul>
// //             {Array.isArray(data) &&
// //               data.map((va,index) => (
// //                 <li key={`${va.EPIC_NO}-${index}`}>
// //                 {va.C_HOUSE_NO} - {va.EPIC_NO} - {va.NAME} - {va.PART_NO}
// //                 </li>
// //               ))}
// //           </ul>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default React.memo(UserPageDataPrint);
// import axios from 'axios';
// import React, { useState, useEffect, useCallback } from 'react';

// interface UserPageDataProps {
//   vid: string;
//   partNo: number;
//   house: string;
// }

// interface VoterData {
//   EPIC_NO: string;
//   C_HOUSE_NO: string;
//   NAME: string;
//   PART_NO: string;
// }

// function UserPageDataPrint({ vid, partNo, house }: UserPageDataProps) {
//   const [data, setData] = useState<VoterData[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [newVid, setNewVid] = useState(vid);
//   const [newPartNo, setNewPartNo] = useState(partNo);
//   const [newHouse, setNewHouse] = useState(house);

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     try {
//       const queryParams = new URLSearchParams();
//       if (newVid) {
//         queryParams.append('vid', newVid);
//       }
//       if (newPartNo) {
//         queryParams.append('partNo', newPartNo.toString());
//       }
//       if (newHouse) {
//         queryParams.append('house', newHouse);
//       }

//       const apiUrl = `https://voter-backend-2oi2.onrender.com/voterdata?${queryParams}`;

//       const response = await axios.get(apiUrl);
//       setData(response.data.data);
//       setLoading(false);
//     } catch (err) {
//       console.log(err);
//       setLoading(false);
//     }
//   }, [newVid, newPartNo, newHouse]);

//   useEffect(() => {
//     const source = axios.CancelToken.source();

//     fetchData();

//     // Periodically trigger garbage collection every 2 seconds if it's available
//     if ((global as any).gc) {
//       const gcInterval = setInterval(() => {
//         (global as any).gc();
//       }, 2000);

//       return () => {
//         // Cleanup: Cancel the Axios request and clear the garbage collection interval
//         source.cancel('Request canceled');
//         clearInterval(gcInterval);
//       };
//     } else {
//       console.warn('Garbage collection (global.gc) is not available in this environment.');
//       return () => {
//         // Cleanup: Cancel the Axios request
//         source.cancel('Request canceled');
//       };
//     }
//   }, [fetchData]);

//   return (
//     <div>
//       <h1>Voter Data</h1>
//       <div>
//         <label>EPIC Number:</label>
//         <input type="text" value={newVid} onChange={(e) => setNewVid(e.target.value)} />
//       </div>
//       <div>
//         <label>Part Number:</label>
//         <input type="number" value={newPartNo} onChange={(e) => setNewPartNo(parseInt(e.target.value))} />
//       </div>
//       <div>
//         <label>House Number:</label>
//         <input type="text" value={newHouse} onChange={(e) => setNewHouse(e.target.value)} />
//       </div>
//       <button onClick={fetchData}>Search</button>
//       <div>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <ul>
//             {Array.isArray(data) &&
//               data.map((va, index) => (
//                 <li key={`${va.EPIC_NO}-${index}`}>
//                   {va.C_HOUSE_NO} - {va.EPIC_NO} - {va.NAME} - {va.PART_NO}
//                 </li>
//               ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default React.memo(UserPageDataPrint);

import axios from "axios";
import React, { useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import img from "./political.png";
import bgImg from "./newjpnadda.png";
interface UserPageDataProps {
  vid: string;
  partNo: number;
  house: string;
}

interface VoterData {
  EPIC_NO: string;
  C_HOUSE_NO: string;
  NAME: string;
  PART_NO: string;
}

function UserPageDataPrint({ vid, partNo, house }: UserPageDataProps) {
  const [data, setData] = useState<VoterData[]>([]);
  const [loading, setLoading] = useState(false);
  const [newVid, setNewVid] = useState(vid);
  const [newPartNo, setNewPartNo] = useState(partNo);
  const [newHouse, setNewHouse] = useState(house);
  const pdfRef = useRef<(HTMLDivElement | null)[]>(
    Array(data.length).fill(null)
  );
  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (newVid) {
        queryParams.append("vid", newVid);
      }
      if (newPartNo) {
        queryParams.append("partNo", newPartNo.toString());
      }
      if (newHouse) {
        queryParams.append("house", newHouse);
      }

      const apiUrl = `https://voter-backend-2oi2.onrender.com/voterdata?${queryParams}`;

      const response = await axios.get(apiUrl);
      setData(response.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, [newVid, newPartNo, newHouse]);
  // Whattsapp message______________________________________________________
  const handleWhatsAppShare = (voter: VoterData, index: number) => {
    const userName = localStorage.getItem("user");
    const templatePhrase =
      "Vote for BANDI SANJAY KUMAR garu,\nBharatiya Janata Party, Karimnagar Constituency\n శ్రీ బండి సంజయ్‌ కుమార్ గారు(గుర్తు:కమలం)\n కరీంనగర్ నియోజకవర్గం\n తేదీ: 30వ నవంబర్ 2023, ఉదయం 7 గంటల నుండి సాయంత్రం 6 గంటల వరకు.\n By YUVA KRANTHI (ఇట్లు మీ యువ క్రాంతి)";

    // Add the HTTP link to the message
    const link = "https://yuvakranthi.in/"; // Replace with your actual link
    const message = `\nCheck out this voter card:\nVoter ID:${templatePhrase}\n ${voter.EPIC_NO}\nName: ${voter.NAME}\nPart Number: ${voter.PART_NO}\nUser: ${userName}\nIndex: ${index}\n\nFor more information, visit: ${link}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  //generate PDF_________________________________________________________
  const generatePDF = async (voter: VoterData, index: number) => {
    const input = pdfRef.current[index];
    if (!input) {
      return;
    }

    const inputElement = input as HTMLElement;
    html2canvas(inputElement).then(async (canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      const pdf = new jsPDF("p", "mm", "a7");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 8;

      pdf.addImage(
        imgData,
        "JPEG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );

      const pdfFileName = "voter_card.pdf";
      pdf.save(pdfFileName);
      try {
        const userName = localStorage.getItem("user");
        const userId = localStorage.getItem("id");
        const response = await axios.post(
          "https://voter-backend-2oi2.onrender.com/post/form",
          {
            user: userName,
            name: voter.NAME,
            vid: voter.EPIC_NO,
            partno: voter.PART_NO,
            house: voter.C_HOUSE_NO,
            id: userId,
          }
        );
        console.log("Data sent to Allforms component:", response.data);
      } catch (error) {
        console.error("Error sending data to Allforms component:", error);
      }
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="container mt-0"
      style={{
        backgroundImage: `url(${bgImg})`, // Apply the background image
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Keeps the background image fixed while scrolling
        backgroundPosition: "center", // Adjusts the position of the background image
        minHeight: "100vh",
        padding: "2rem",
        overflow: "hidden", // Disables scrolling effects
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          className="sc-header"
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            marginTop: "80px",
            padding: "-1px",
          }}
        >
          <span
            onClick={() => {
              navigate("/home");
            }}
          >
            <i className="fa fa-home" aria-hidden="true"></i>
          </span>
          <h3>Voter Application</h3>
        </div>
        <div className="form-group">
          <label>VOTER ID:</label>
          <input
            type="text"
            className="form-control"
            value={newVid}
            onChange={(e) => setNewVid(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Part Number:</label>
          <input
            type="number"
            className="form-control"
            value={newPartNo}
            onChange={(e) => setNewPartNo(parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>House Number:</label>
          <input
            type="text"
            className="form-control"
            value={newHouse}
            onChange={(e) => setNewHouse(e.target.value)}
          />
        </div>
        <button className="btn btn-primary mt-3" onClick={fetchData}>
          Search
        </button>
      </div>

      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-group">
            {Array.isArray(data) &&
              data.map((voter: VoterData, index) => (
                <div
                  ref={(el) => (pdfRef.current[index] = el)}
                  key={`${voter.EPIC_NO}-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "40px",
                    marginTop: "60px",
                    backgroundImage: `url(${img})`, // Apply the background image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "300px", // Adjust the width as needed
                    height: "400px", // Adjust the height as needed
                    padding: "20px",
                  }}
                >
                  <div>
                    <h1
                      style={{
                        textAlign: "center",
                        color: "#FF69B4",
                        fontSize: "4rem",
                        margin: "12px 0",
                      }}
                    >
                      <span style={{ color: "#FF5306" }}>&nbsp;</span>
                    </h1>

                    <h2
                      style={{
                        textAlign: "center",
                        color: "#212529",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        marginBottom: "-20px",
                      }}
                    >
                      Vote for
                    </h2>
                    <br />
                    <h2
                      style={{
                        textAlign: "center",
                        color: "#212529",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                      }}
                    >
                      Sri BANDI SANJAY KUMAR(BJP)
                    </h2>
                    <h2
                      style={{
                        textAlign: "center",
                        color: "#212529",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                      }}
                    >
                      శ్రీ బండి సంజయ్‌ కుమార్ గారు.(గుర్తు:కమలం)
                    </h2>
                    <h3
                      style={{
                        textAlign: "center",
                        color: "#212529",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      కరీంనగర్ నియోజకవర్గం
                    </h3>
                    <h3
                      style={{
                        textAlign: "center",
                        color: "#212529",
                        fontSize: "0.7rem",
                        marginTop: "10px",
                      }}
                    >
                      Polling date: 30th November 2023, 7AM to 6PM
                    </h3>
                    <h3
                      style={{
                        textAlign: "center",
                        color: "#212529",
                        fontSize: "0.7rem",
                      }}
                    >
                      తేదీ: 30వ నవంబర్ 2023, ఉదయం 7 గంటల నుండి సాయంత్రం 6 గంటల
                      వరకు.
                    </h3>
                  </div>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ textAlign: "left" }}>
                        <label>C House Number:</label>
                        <br />
                        <label>EPIC Number:</label>
                        <br />
                        <label>Name:</label>
                        <br />
                        <label>Part Number:</label>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <p>{voter.C_HOUSE_NO}</p>
                        <p>{voter.EPIC_NO}</p>
                        <p>{voter.NAME}</p>
                        <p>{voter.PART_NO}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: "55px",
                    }}
                  >
                    <button
                      onClick={() => generatePDF(voter, index)}
                      style={{
                        fontSize: "1.5rem",
                        backgroundColor: "orange",
                        padding: "1px 1px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <i className="fa fa-file" aria-hidden="true"></i>print
                    </button>
                    <button
                      onClick={() => handleWhatsAppShare(voter, index)}
                      style={{
                        fontSize: "1.5rem",
                        backgroundColor: "yellow",
                        padding: "1px 1px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <i className="fa fa-share-alt" aria-hidden="true"></i>
                      share
                    </button>
                    <button
                      style={{
                        fontSize: "1.5rem",
                        backgroundColor: "red",
                        padding: "1px 1px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                      onClick={() => {
                        setNewVid("");
                        setNewPartNo(0);
                        setNewHouse("");
                        window.location.reload();
                      }}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              ))}
          </ul>
        )}
      </div>
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "blue",
          color: "white",
          padding: "6px 12px",
          borderRadius: "5px",
          cursor: "pointer",
          display: "inline-block",
          transition: "background-color 0.3s",
          zIndex: 1,
        }}
      >
        Go to Top
      </button>
    </div>
  );
}

export default React.memo(UserPageDataPrint);
