import React, { useState } from "react";
import style from "../Style/Task.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const YourComponent = () => {
  const [expiryDate, setExpiryDate] = useState("");
  const [JudgementDate, setJudgementDate] = useState("");
  const [daysDifference, setDaysDifference] = useState(0);
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [advocateName, setAdvocateName] = useState("");
  const Data = {
    fname: fname,
    advocateName: advocateName,
    email: email,
    daysDifference: daysDifference,
    JudgementDate: JudgementDate,
    expiryDate: expiryDate,
  };
  const handleJudgementDateChange = (e) => {
    const newJudgementDate = e.target.value;
    setJudgementDate(newJudgementDate);
    const difference = calculateDateDifference(newJudgementDate, expiryDate);
    setDaysDifference(difference);
  };

  const handleExpiryDateChange = (e) => {
    const newExpiryDate = e.target.value;
    setExpiryDate(newExpiryDate);
    const difference = calculateDateDifference(JudgementDate, newExpiryDate);
    setDaysDifference(difference);
  };

  const calculateDateDifference = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDifference = end - start;
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const minExpiryDate = new Date(selectedDate);
    minExpiryDate.setDate(selectedDate.getDate());
    setExpiryDate(minExpiryDate.toISOString().split("T")[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint =
      "https://jsonplaceholder.typicode.com/posts/1/comments./?endpoint";
    const formData = {
      fname,
      advocateName,
      email,
      daysDifference,
      JudgementDate,
      expiryDate,
    };
    try {
      const response = await axios.post(apiEndpoint, formData);
      console.log("API response:", response.data);
    } catch (error) {
      console.error("API call error:", error);
    }
  };
  return (
    <>
      <form method="post">
        <h3 className={style.heanding}>Reminder Date</h3>
        <div className={`${style.block} row`}>
          <div className="col-xl-6 col-12 ">
            <input
              type="text"
              name="fname"
              placeholder="Client Name"
              className={style.lastName}
              onChange={(e) => {
                setFname(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-xl-6 col-12">
            <input
              type="text"
              name="fname"
              placeholder="Advocate Name"
              className={style.lastName}
              onChange={(e) => {
                setAdvocateName(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className={style.main}>
          <label htmlFor="due">Please select due date</label>
          <div className={style.mainTime}>
            <div className={style.term}>
              <input
                type="date"
                name="JudgementDate"
                value={JudgementDate}
                onChange={(e) => {
                  handleJudgementDateChange(e);
                  handleDateChange(e);
                }}
                required
              />
            </div>
            <div className={`${style.term} ${style.termexpiry}`}>
              <input
                type="date"
                name="expiryDate"
                value={expiryDate}
                min={expiryDate}
                onChange={(e) => {
                  handleExpiryDateChange(e);
                  handleDateChange(e);
                }}
                required
              />
            </div>
          </div>
          <div className={style.main_2}></div>
          <label htmlFor="reminders">Please set your auto reminders</label>
          <div className={style.difference}>  
            <p>Days Difference : {daysDifference}</p>
            <div className={style.mainreminders} >
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
          </div>
        </div>
        <div className={style.btn}>
          <Link
            to="#"
            type="submit"
            onClick={handleSubmit}
            className={style.Button}
          >
            Submit
          </Link>
        </div>
      </form>
    </>
  );
};

export default YourComponent;
