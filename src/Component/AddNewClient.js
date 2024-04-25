import React, { useEffect, useState } from "react";
import style from "../Style/AddNewClient.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddNewClints = ({ colClass }) => {
  const navigate = useNavigate()

  const [selectedAdvocate, setSelectedAdvocate] = useState("");
  const [date, setDate] = useState("");
  const [clientFullName, setClientFullName] = useState("");
  const [clientbusinessName, setClientBusinessName] = useState("");
  const [caseNo, setCaseNo] = useState("");
  const [loanAgrement, setLoanAgrement] = useState("");
  const [clientaddress, setClientAddress] = useState("");
  const [clientstreetAddress, setClientStreetAddress] = useState("");
  const [clientstate, setClientState] = useState("");
  const [clientemail, setClientEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [oppositePartyFullName, setOppositePartyFullName] = useState("");
  const [oppositePartyBusinessName, setOppositePartyBusinessName] = useState("");
  const [oppositePartyAddress, setOppositePartyAddress] = useState("");
  const [oppositePartySpecificDetails, setOppositePartySpecificDetails] = useState("");
  const [receiveEmail, setReceiveEmail] = useState("");
  const [participateInSurveys, setParticipateInSurveys] = useState("");
  const [participateOption, setParticipateOption] = useState("");
  const [erroreceiveEmail, setErrorReceiveEmail] = useState("");
  const [errorparticipateoption, setErrorParticipateOption] = useState("");
  const [errordate, setErrorDate] = useState("");
  const [errorclientName, setErrorClientName] = useState("");
  const [errorparticipateinSurveys, setErrorParticipateInSurveys] = useState("");
  const [errorclientbusinessName, setErrorClientBusinessName] = useState("");
  const [errorclientaddress, setErrorClientAddress] = useState("");
  const [errorclientstreetAddress, setErrorClientStreetAddress] = useState("");
  const [errorclientstate, setErrorClientState] = useState("");
  const [errorclientemail, setErrorClientEmail] = useState("");
  const [errorcaseno, setErrorCaseNo] = useState("");
  const [errorloanagrement, setErrorLoanAgrement] = useState("");
  const [errorMobileNumber, setErrorMobileNumber] = useState("");
  const [erroroppositePartyFullName, setErrorOppositePartyFullName] = useState("");
  const [erroroppositePartyBusinessName, setErrorOppositePartyBusinessName] = useState("");
  const [erroroppositePartyAddress, setErrorOppositePartyAddress] = useState("");
  const [erroroppositePartySpecificDetails, setErrorOppositePartySpecificDetails] = useState("");
  const [Advocate, setAdvocate] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/Team/TeamDataView")
      .then((response) => {
        if (Array.isArray(response.data.Data)) {
          setAdvocate(response.data.Data);
        } else {
          console.error("Advocate data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching advocate data:", error);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;

    // if (date.trim() === "") {
    //   setErrorDate("*date is required");
    //   formIsValid = false;
    // } else {
    //   setErrorDate("");
    // }

    // if (clientFullName.trim() === "") {
    //   setErrorClientName("*FullName is required");
    //   formIsValid = false;
    // } else {
    //   setErrorClientName("");
    // }

    // if (clientbusinessName.trim() === "") {
    //   setErrorClientBusinessName("*Business Name is required");
    //   formIsValid = false;
    // } else {
    //   setErrorClientBusinessName("");
    // }

    // if (clientaddress.trim() === "") {
    //   setErrorClientAddress("*address is required");
    //   formIsValid = false;
    // } else {
    //   setErrorClientAddress("");
    // }

    // if (clientstreetAddress.trim() === "") {
    //   setErrorClientStreetAddress("*streetAddress is required");
    //   formIsValid = false;
    // } else {
    //   setErrorClientStreetAddress("");
    // }

    // if (clientstate.trim() === "") {
    //   setErrorClientState("*state is required");
    //   formIsValid = false;
    // } else {
    //   setErrorClientState("");
    // }

    // if (clientemail.trim() === "") {
    //   setErrorClientEmail("*Email is required");
    //   formIsValid = false;
    // } else {
    //   setErrorClientEmail("");
    // }

    // if (caseNo.trim() === "") {
    //   setErrorCaseNo("*CaseNo is required");
    //   formIsValid = false;
    // } else {
    //   setErrorCaseNo("");
    // }

    // if (mobileNumber.trim() === "") {
    //   setErrorMobileNumber("*Mobile Number is required");
    //   formIsValid = false;
    // } else if (!/^\d{10}$/.test(mobileNumber)) {
    //   setErrorMobileNumber("*Mobile Number must be 10 digits");
    //   formIsValid = false;
    // } else {
    //   setErrorMobileNumber("");
    // }

    // if (loanAgrement.trim() === "") {
    //   setErrorLoanAgrement("*LoanAgrement is required");
    //   formIsValid = false;
    // } else {
    //   setErrorLoanAgrement("");
    // }

    // if (participateOption.trim() === "") {
    //   setErrorParticipateOption("*Case type is required");
    //   formIsValid = false;
    // } else {
    //   setErrorParticipateOption("");
    // }

    // if (receiveEmail.trim() === "") {
    //   setErrorReceiveEmail("*Sending a monthly email is required.");
    //   formIsValid = false;
    // } else {
    //   setErrorReceiveEmail("");
    // }

    // if (participateInSurveys.trim() === "") {
    //   setErrorParticipateInSurveys(
    //     "* Participate in our client surveys is required. "
    //     );
    //     formIsValid = false;
    //   } else {
    //     setErrorParticipateInSurveys("");
    //   }

    //   if (oppositePartyFullName.trim() === "") {
    //     setErrorOppositePartyFullName("*FullName is required");
    //     formIsValid = false;
    //   } else {
    //     setErrorOppositePartyFullName("");
    //   }

    //   if (oppositePartyBusinessName.trim() === "") {
    //     setErrorOppositePartyBusinessName("*BusinessName is required");
    //     formIsValid = false;
    //   } else {
    //     setErrorOppositePartyBusinessName("");
    //   }
    //   if (oppositePartyAddress.trim() === "") {
    //     setErrorOppositePartyAddress("*Address is required");
    //     formIsValid = false;
    //   } else {
    //     setErrorOppositePartyAddress("");
    //   }
    //   if (oppositePartySpecificDetails.trim() === "") {
    //     setErrorOppositePartySpecificDetails("*Details is required");
    //     formIsValid = false;
    //   } else {
    //     setErrorOppositePartySpecificDetails("");
    //   }

    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(clientemail)) {
    //   setErrorClientEmail("*Invalid email address");
    //   formIsValid = false;
    // } else {
    //   setErrorClientEmail("");
    // }


    if (formIsValid) {
      // Find the selected advocate object based on the selected name
      const selectedAdvocateObject = Advocate.find(
        (advocate) => advocate._id == selectedAdvocate
      );

      if (!selectedAdvocateObject) {
        console.log("Advocate not found for Name:", selectedAdvocate);
        return;
      }

      if (formIsValid) {
        const formData = {
          date: date,
          clientFullName: clientFullName,
          clientbusinessName: clientbusinessName,
          caseNo: caseNo,
          loanAgrement: loanAgrement,
          clientaddress: clientaddress,
          clientstreetAddress: clientstreetAddress,
          clientstate: clientstate,
          clientemail: clientemail,
          mobileNumber: mobileNumber,
          oppositePartyFullName: oppositePartyFullName,
          oppositePartyBusinessName: oppositePartyBusinessName,
          oppositePartyAddress: oppositePartyAddress,
          oppositePartySpecificDetails: oppositePartySpecificDetails,
          participateOption: participateOption,
          receiveEmail: receiveEmail,
          participateInSurveys: participateInSurveys,
          Advocate: selectedAdvocateObject._id,
        };

        

        fetch("http://localhost:9000/client/addClient", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Client record uploaded:", data);
          })
          .catch((err) => {
            console.error("Error uploading client record:", err);
          });
        navigate('/ViewClient')

      }



    }

    setDate("");
    setClientFullName("");
    setClientBusinessName("");
    setCaseNo("");
    setLoanAgrement("");
    setClientAddress("");
    setMobileNumber("");
    setClientStreetAddress("");
    setClientState("");
    setClientEmail("");
    setOppositePartyFullName("");
    setOppositePartyBusinessName("");
    setOppositePartyAddress("");
    setOppositePartySpecificDetails("");
    setReceiveEmail("");
    setParticipateInSurveys("");
    setParticipateOption("");
    setSelectedAdvocate("");
  };

  return (
    <div className={`${colClass} my-5 ${style.clint}`}>
      <h3>Add Client Registration Form & Deo-Volente</h3>
      <h4>Date</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          className={style.date}
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div>
        </div>
        <div className={style.error}>{errordate}</div>
        <h5>client/ Account information</h5>
        <div className="row">
          <div className="col-xl-4 col-12">
            <label>FullName</label>
            <input
              type="text"
              placeholder="Full Name"
              className={style.inputName}
              value={clientFullName}
              onChange={(e) => setClientFullName(e.target.value)}
            />
            <div className={style.error}>{errorclientName}</div>
          </div>
          <div className="col-xl-4 col-12">
            <label>Business Name</label>
            <input
              type="text"
              className={style.inputName}
              value={clientbusinessName}
              onChange={(e) => setClientBusinessName(e.target.value)}
            />
            <div className={style.error}> {errorclientbusinessName} </div>
          </div>
          <div className="col-xl-4 col-12">
            <label>Case type :</label>
            <div className="col-xl-4 col-12">
              <input
                type="radio"
                className="me-2"
                name="participateOption"
                value="Bank"
                checked={participateOption === "Bank"}
                onChange={(e) => setParticipateOption(e.target.value)}
              />
              Bank
              <input
                type="radio"
                className="ms-3 me-2"
                name="participateOption"
                value="Other"
                checked={participateOption === "Other"}
                onChange={(e) => setParticipateOption(e.target.value)}
              />
              Other
            </div>
            <div className={style.error}> {errorparticipateoption} </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-12">
            <label>Case No.</label>
            <input
              type="text"
              value={caseNo}
              name="caseNo"
              className={style.inputName}
              onChange={(e) => setCaseNo(e.target.value)}
            />
            <div className={style.error}> {errorcaseno} </div>
          </div>
          <div className="col-xl-4 col-12">
            <label>Loan Agrement</label>
            <input
              type="text"
              value={loanAgrement}
              name="loanAgrement"
              className={style.inputName}
              onChange={(e) => setLoanAgrement(e.target.value)}
            />
            <div className={style.error}> {errorloanagrement} </div>
          </div>


          <div className="col-xl-4 col-12">
            <label>Advocate name</label>
            <select
              className={`col-xl-4 col-12 ${style.Advocate}`}
              value={selectedAdvocate}
              name="selectedAdvocate"
              onChange={(e) => {
                const selectedName = e.target.value;
                setSelectedAdvocate(selectedName);
              }}
            >
              <option value="">Select an advocate</option>
              {Advocate && Advocate.map((advocate) => (
                <option key={advocate._id} value={advocate._id}>
                  {advocate.fullname}
                </option>
              ))}
            </select>
          </div>

        </div>
        <div className="col-xl-4 col-12">
          <label>Mobile Number</label>
          <input
            type="text"
            maxLength={10}
            className={style.inputName}
            placeholder="Place corect your mobile number"
            value={mobileNumber}
            name="mobileNumber"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <div className={style.error}> {errorMobileNumber}</div>
        </div>
        <label>Address</label>
        <textarea
          className={style.businessName}
          value={clientaddress}
          name="clientaddress"
          onChange={(e) => setClientAddress(e.target.value)}
          rows="6"
          cols="200"
        ></textarea>
        <div className={style.error}> {errorclientaddress} </div>
        <div className="row">
          <div className="col-xl-4 col-12">
            <label>Street address</label>
            <input
              type="text"
              className={style.inputName}
              placeholder="City..."
              value={clientstreetAddress}
              name="clientstreetAddress"
              onChange={(e) => setClientStreetAddress(e.target.value)}
            />
            <div className={style.error}> {errorclientstreetAddress} </div>
          </div>
          <div className="col-xl-4 col-12">
            <label>state/provimi</label>
            <input
              type="text"
              className={style.inputName}
              placeholder="state/provimi..."
              value={clientstate}
              name="clientstate"
              onChange={(e) => setClientState(e.target.value)}
            />
            <div className={style.error}> {errorclientstate} </div>
          </div>
          <div className="col-xl-4 col-12">
            <label>Email Address</label>
            <input
              type="text" clientFullName
              className={style.inputName}
              value={clientemail}
              name="clientemail"
              onChange={(e) => setClientEmail(e.target.value)}
            />
            <div className={style.error}> {errorclientemail} </div>
          </div>

          <h5>opposite party Details</h5>
          <div className="row">
            <div className="col-xl-4 col-12">
              <label>Full Name </label>
              <input
                type="text"
                placeholder="Full Name"
                className={style.inputName}
                value={oppositePartyFullName}
                name="oppositePartyFullName"
                onChange={(e) => setOppositePartyFullName(e.target.value)}
              />
              <div className={style.error}> {erroroppositePartyFullName} </div>
            </div>
            <div className="col-xl-4 col-12">
              <label>Business name</label>
              <input
                type="text"
                className={style.inputName}
                value={oppositePartyBusinessName}
                name="oppositePartyBusinessName"
                onChange={(e) => setOppositePartyBusinessName(e.target.value)}
              />
              <div className={style.error}>
                {erroroppositePartyBusinessName}
              </div>
            </div>
          </div>
        </div>

        <label>Address</label>

        <textarea
          className={style.businessName}
          value={oppositePartyAddress}
          name="oppositePartyAddress"
          onChange={(e) => setOppositePartyAddress(e.target.value)}
          rows="6"
          cols="200"
        ></textarea>

        <div className={style.error}> {erroroppositePartyAddress} </div>
        <label>Specific Registration Requests /Details</label>
        <input
          type="text"
          className={style.request}
          value={oppositePartySpecificDetails}
          name="oppositePartySpecificDetails"
          onChange={(e) => setOppositePartySpecificDetails(e.target.value)}
        />
        <div className={style.error}> {erroroppositePartySpecificDetails} </div>
        <h5>Additional information</h5>
        <label>would you like to Receive our Monthly e-mail?</label>
        <div>
          <input
            type="radio"
            className="me-2"
            name="receiveEmail"
            value="yes"
            checked={receiveEmail === "yes"}
            onChange={(e) => setReceiveEmail(e.target.value)}
          />
          Yes
          <input
            type="radio"
            className="ms-3 me-2"
            name="receiveEmail"
            value="no"
            checked={receiveEmail === "no"}
            onChange={(e) => setReceiveEmail(e.target.value)}
          />
          No
        </div>
        <div className={style.error}> {erroreceiveEmail} </div>
        <label>would you like to participate in our client surveys?</label>
        <div>
          <input
            type="radio"
            className="me-2"
            name="participateInSurveys"
            value="yes"
            checked={participateInSurveys === "yes"}
            onChange={(e) => setParticipateInSurveys(e.target.value)}
          />
          Yes
          <input
            type="radio"
            className="ms-3 me-2"
            name="participateInSurveys"
            value="no"
            checked={participateInSurveys === "no"}
            onChange={(e) => setParticipateInSurveys(e.target.value)}
          />
          No
        </div>
        <div className={style.error}> {errorparticipateinSurveys} </div>
        <div className="d-flex  aling-items-center">
          <input type="submit" className={style.submitBtn} />
        </div>
      </form>
    </div>
  );
};

export default AddNewClints;

