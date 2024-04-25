import React, { useState } from "react";
import style from "../Style/MainTeamMember.module.css";
const Modal = ({ member, onClose, showModal, updateTeamMember }) => {

  const [updatedMember, setUpdatedMember] = useState(member);
  const [fullNameError, setFullNameError] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [designationError, setDesignationError] = useState("");

  // console.log(updatedMember.mobilenumber);
  const handleInputChange = (event) => {
    const { name, value } = event.target;;
    setUpdatedMember({
      ...updatedMember,
      [name]: value,
    });
  };


  const validateForm = () => {
    let isValid = true;

    if (!updatedMember.fullname.trim()) {
      setFullNameError("Full Name is required");
      isValid = false;
    } else {
      setFullNameError("");
      isValid = true
    }

    if (!updatedMember.emailaddress.trim()) {
      setEmailAddressError("Full Name is required");
      isValid = false;
    } else {
      setEmailAddressError("");
      isValid = true
    }

    if (!updatedMember.mobilenumber.trim()) {
      setMobileNumberError("Full Name is required");
      isValid = false;
    } else {
      setMobileNumberError("");
      isValid = true
    }

    if (!updatedMember.designation.trim()) {
      setDesignationError("Full Name is required");
      isValid = false;
    } else {
      setDesignationError("");
      isValid = true
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      updateTeamMember(updatedMember);
      onClose();
    }
  };

  return (
    <div
      className={
        showModal
          ? `${style.modal} ${style.displayBlock}`
          : `${style.modal} ${style.displayNone}`
      }
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className={`modal-content ${style.modalContent}`}>
          <div className="modal-header ">
            <h3>Edit Team Member</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className={` ${style.teamForm} mt-3 modal-body py-0`}>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="fullname">Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                  value={updatedMember.fullname}
                  onChange={handleInputChange}
                />
                <div className="text-danger">{fullNameError}</div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="emailAddress">Email Address:</label>
                <input
                  type="text"
                  name="emailaddress"
                  value={updatedMember.emailaddress}
                  onChange={handleInputChange}
                />
                <div className="text-danger">{emailAddressError}</div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input
                  type="text"
                  name="mobilenumber"
                  value={updatedMember.mobilenumber}
                  onChange={handleInputChange}
                  maxLength={10}
                />
                <div className="text-danger">{mobileNumberError}</div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="designation">Designation:</label>
                <input
                  type="text"
                  name="designation"
                  value={updatedMember.designation}
                  onChange={handleInputChange}
                />
                <div className="text-danger">{designationError}</div>
              </div>
              <input type="Submit" className={`mt-5 ${style.btn}`} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
