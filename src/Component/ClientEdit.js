import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../Style/AddNewClient.module.css";

const ClientEdit = ({ colClass }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [Advocate, setAdvocate] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:9000/client/viewClientfind?id=${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" }
    })
      .then(async (res) => {
        if (res.ok) {
          const record = await res.json();
          setData(record.data);
        } else {
          console.error("Error fetching data");
        }
      })
      .catch((err) => {
        console.log("Record not found");
      });
  }, [])

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




  const handleInputChange = (event) => {
    const { name, value } = event.target;
 
    setData({
      ...data,
      [name]: value, 
    });
  };


  const handleSubmit = (updatedMember) => {
    axios
      .put(`http://localhost:9000/client/updateClient?id=${id}`, data)
      .then((response) => {
        setData((prevMembers) =>
          prevMembers.map((member) =>
            member._id === updatedMember._id ? updatedMember : member
          ));
      })
      .catch((error) => {
        console.log(error);
      });
    navigate('/ViewClient')
  };

  return (
    <>
      <div className={`${colClass} my-5 ${style.clint}`}>
        <h3>Add Client Registration Form & Deo-Volente</h3>
        <h4>Date</h4>
        <form onSubmit={handleSubmit} >
          <input
            type="date"
            className={style.date}
            value={data.date}
            name="date"
            onChange={handleInputChange}
          />
          <h5>client/ Account information</h5>
          <div className="row">
            <div className="col-xl-4 col-12">
              <label>FullName</label>
              <input
                type="text"
                placeholder="Full Name"
                className={style.inputName}
                value={data.name}
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div className="col-xl-4 col-12">
              <label>Business Name</label>
              <input
                type="text"
                className={style.inputName}
                value={data.bName}
                name="bName"
                onChange={handleInputChange}
              />
            </div>

            <div className="col-xl-4 col-12">
              <label>Advocate name</label>
              <select
                className={`col-xl-4 col-12 ${style.inputName}`}
                value={data.Advocate}
                onChange={handleInputChange}
                name="Advocate"
              >
                <option value="">Select an advocate</option>
                {Advocate.map((advocate) => (
                  <option key={advocate._id} value={advocate._id}>
                    {advocate.fullname}
                  </option>
                ))}
              </select>
            </div>

          </div>
          <div className="row">
          </div>

          <div className="col-xl-4 col-12">
            <label>Phone Number</label>
            <input
              type="text"
              className={style.inputName}
              value={data.mobileNo}
              name="mobileNo"
              onChange={handleInputChange}
              maxLength={10}
            />
          </div>

          <label>Address</label>
          <textarea
            className={style.businessName}
            value={data.address1}
            name="address1"
            onChange={handleInputChange}
            rows="6"
            cols="200"
          ></textarea>


          <div className="row">
            <div className="col-xl-4 col-12">
              <label>Street address</label>
              <input
                type="text"
                className={style.inputName}
                placeholder="City..."
                value={data.address2}
                name='address2'
                onChange={handleInputChange}
              />
            </div>
            <div className="col-xl-4 col-12">
              <label>state/provimi</label>
              <input
                type="text"
                className={style.inputName}
                placeholder="state/provimi..."
                value={data.state}
                name="state"
                onChange={handleInputChange}

              />
            </div>
            <div className="col-xl-4 col-12">
              <label>Email Address</label>
              <input
                type="text"
                className={style.inputName}
                value={data.email}
                name="email"
                onChange={handleInputChange}

              />
            </div>
            <h5>opposite party Details</h5>
            <div className="row">
              <div className="col-xl-4 col-12">
                <label>Full Name </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="oppname"
                  className={style.inputName}
                  // value={data.oppPartyDetails?.oppname}
                  value={data.oppname}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-xl-4 col-12">
                <label>Business name</label>
                <input
                  type="text"
                  className={style.inputName}
                  name="oppbName"
                  // value={data.oppPartyDetails?.oppbName}
                  value={data.oppbName}
                  onChange={handleInputChange}
                />
                <div className={style.error}>
                </div>
              </div>
            </div>
          </div>

          <label>Address</label>

          <textarea
            className={style.businessName}
            // value={data.oppPartyDetails?.address}
            value={data.address}
            onChange={handleInputChange}
            rows="6"
            cols="200"
            name="address"
          ></textarea>


          <label>Specific Registration Requests /Details</label>
          <input
            type="text"
            className={style.request}
            name="details"
            // value={data.oppPartyDetails?.details}
            value={data.details}
            onChange={handleInputChange}
          />  

          <div className="d-flex mt-5 aling-items-center">
            <input type="submit" className={style.submitBtn} />
          </div>
        </form>
      </div>
    </>
  );
}

export default ClientEdit;