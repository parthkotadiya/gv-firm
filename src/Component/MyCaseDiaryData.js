import React, { useState,useEffect } from "react";
import style from "../Style/MyCaseDiary.module.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import { useParams } from "react-router-dom";
import logoImg from "../Assent/logo.png";

const MyCaseDiaryData = ({ colClass }) => {
  // const [cases, setCases] = useState([
  //   {
  //     no: 1,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 2,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 3,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 4,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 5,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 6,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 7,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 8,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 9,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 10,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 11,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 12,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 13,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 14,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 15,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 16,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 17,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 18,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 19,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 20,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
    
  //   {
  //     no: 21,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 22,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 23,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 24,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 25,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 26,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 27,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 28,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 29,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 30,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 31,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 32,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 33,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 34,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 35,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 36,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 37,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 38,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 39,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 40,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 41,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 42,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 43,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 44,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 45,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 46,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 47,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 48,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 49,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 50,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  //   {
  //     no: 51,
  //     court: 'supreme court',
  //     caseNumber: '10asda',
  //     clientName: 'Vansh Gajera',
  //     advocate: 'Rushita Gondaliya',
  //     hearingDate: '06/07/2023',
  //     lastHearingDate: '06/08/2023',
  //   },
  // ]);
 
  const [cases,setCase] = useState([]);
 const { id } = useParams();
console.log(cases);

useEffect(()=>{
  axios.get('http://localhost:3001/clients')
  .then(res => setCase(res.data))
  .catch(err => console.log(err)) 
},[])

  const onButtonClick = () => {
    const pdf = new jsPDF();
    const today = new Date().toLocaleDateString();
   
    pdf.text("Hearing Date Of Court", 20, 25);
    pdf.text(`Date: ${today}`, 20, 40);

     // Add logo to the right
  const logoWidth = 40; 
  const logoHeight = 40;
  const pageWidth = pdf.internal.pageSize.getWidth();
  pdf.addImage(logoImg, "PNG", pageWidth - logoWidth - 20, 5, logoWidth, logoHeight);

    pdf.autoTable({
      startY: 50,
      headStyles: {
        fillColor: "bisque",
        textColor: "black", 
      },
      styles: {
        cellPadding: 3,
      },
      head: [["No.", "Court", "Case No.", "Client Name", "Advocate", "Hearing Date", "Last Due Date"]],
      body: cases.map((caseDetails) => [
        caseDetails.no,
        caseDetails.court,
        caseDetails.caseNumber,
        caseDetails.clientName,
        caseDetails.advocate,
        caseDetails.hearingDate,
        caseDetails.lastHearingDate,
      ]),
      lineWidth: 1, 
      lineColor: [0, 0, 0],
    });
  
    pdf.save("client_data.pdf");
  };

  return (
    <div className={`${colClass} mt-5 ${style.mainCase}`}>
      <div
        className={`d-flex justify-content-between align-items-center my-5 my-md-4`}
      >
        <h3>My Today’s Case Diary</h3>
        <button onClick={onButtonClick}>Export</button>
      </div>
      <div id="myCaseDiaryData" className={style.myCaseDiaryData}>
        <div className={`${style.caseDiaryLogo} mb-xl-5 mb-sm-5`}>
          <div>
            <h4 className={`ms-5  ${style.date}`}>Hearing Date Of Court</h4>
            <h4 className={`ms-5 mb-0 mt-5 ${style.date}`}>
              Date : 06/07/2025
            </h4>
          </div>
          <div className={`me-5 ${style.logoImg}`}>
            <img src={logoImg} />
          </div>
        </div>
        <div className={style.caseData}>
          <div className={style.caseHeading}>
            <h4 className={colClass === "col-10" ? style.no : style.no2}>
              No.
            </h4>
            <h4 className={colClass === "col-10" ? style.court : style.court2}>
              Court
            </h4>
            <h4 className={colClass === "col-10" ? style.case : style.case2}>
              Case No.
            </h4>
            <h4
              className={
                colClass === "col-10" ? style.clientName : style.clientName2
              }
            >
              Client Name
            </h4>
            <h4
              className={
                colClass === "col-10" ? style.advocate : style.advocate2
              }
            >
              Advocate
            </h4>
            <h4
              className={
                colClass === "col-10" ? style.hearingDate : style.hearingDate2
              }
            >
              Hearing Date
            </h4>
            <h4
              className={
                colClass === "col-10"
                  ? style.lastHearingDate
                  : style.lastHearingDate2
              }
            >
              Last Due Date
            </h4>
          </div>

          {cases.map((caseDetails, index) => (
        <div key={index} className={style.caseDetails}>
         
          <p className={colClass === "col-10" ? style.caseDetailsno : style.caseDetailsno2}>{index + 1}</p>
          <p className={colClass === "col-10" ? style.caseDetailscourt : style.caseDetailscourt2}>{caseDetails.court}</p>
          <p className={colClass === "col-10" ? style.caseDetailscase : style.caseDetailscase2}>{caseDetails.caseNo}</p>
          <p className={colClass === "col-10" ? style.caseDetailsclientName : style.caseDetailsclientName2}>{caseDetails.clientFullName}</p>
          <p className={colClass === "col-10" ? style.caseDetailsadvocate : style.caseDetailsadvocate2}>{caseDetails.fullName}</p>
          <p className={colClass === "col-10" ? style.caseDetailshearingDate : style.caseDetailshearingDate2}>{caseDetails.date}</p>
          <p className={colClass === "col-10" ? style.caseDetailslastHearingDate : style.caseDetailslastHearingDate2}>{caseDetails.lastHearingDate}</p>
          </div>
      ))}
     
        </div>
      </div>
    </div>
  );
};

export default MyCaseDiaryData;
