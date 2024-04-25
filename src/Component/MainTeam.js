import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import style from "../Style/MainTeamMember.module.css";
import Modal from "../Component/Modal";
import { Link } from 'react-router-dom'

const  MainTeam = ({ colClass }) => {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [client, setClient] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [inputValue, setNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [errorFullName, setErrorFullName] = useState("");
  const [errorMobileNumber, setErrorMobileNumber] = useState("");
  const [errorEmailAddress, setErrorEmailAddress] = useState("");
  const [errorDesignation, setErrorDesignation] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [eid, setId] = useState("");

  console.log(client);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:9000/Team/TeamDataView",
      headers: { "content-type": "application/json" },
    };

    axios(config)
      .then((res) => {
        let mainRecord = res.data;
        setTeamMembers(mainRecord.Data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:9000/client/viewClient",
      headers: { "content-type": "application/json" },
    };

    axios(config)
      .then((res) => {
        let mainRecord = res.data;
        setClient(mainRecord.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  const idbox = (id) => {
    // console.log(id);
    const userid = id;
    setId(userid);
  };

  const openModal = (teamMembers) => {
    setShowModal(true);
    setSelectedMember(teamMembers);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const updateMember = (updatedMember) => {
    axios
      .put(`http://localhost:9000/Team/TeamDataUpadate?id=${updatedMember._id}`, updatedMember)
      .then((response) => {
        setTeamMembers((prevMembers) =>
          prevMembers.map((member) =>
            member._id === updatedMember._id ? updatedMember : member
          )
        );
        closeForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    const filteredTeamMembers = teamMembers.filter((teamMember) =>
      teamMember.fullName.toLowerCase().includes(search.toLowerCase())
    );
    setTeamMembers(filteredTeamMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;

    if (fullName.trim() === "") {
      setErrorFullName("*Full Name is required");
      formIsValid = false;
    } else {
      setErrorFullName("");
    }

    if (mobileNumber.trim() === "") {
      setErrorMobileNumber("*Mobile Number is required");
      formIsValid = false;
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      setErrorMobileNumber("*Mobile Number must be 10 digits");
      formIsValid = false;
    } else {
      setErrorMobileNumber("");
    }

    const numericValue = inputValue.replace(/\D/g, "");
    if (numericValue.length <= 10) {
      setNumber(numericValue);
    }

    if (emailAddress.trim() === "") {
      setErrorEmailAddress("*Email Address is required");
      formIsValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailAddress)) {
      setErrorEmailAddress("*Invalid Email Address");
      formIsValid = false;
    } else {
      setErrorEmailAddress("");
    }

    if (designation.trim() === "") {
      setErrorDesignation("*Designation is required");
      formIsValid = false;
    } else {
      setErrorDesignation("");
    }

    if (formIsValid) {
      const addTeamMember = {
        fullName: fullName,
        mobileNumber: mobileNumber,
        emailAddress: emailAddress,
        designation: designation,
      };

      axios
        .post("http://localhost:9000/Team/TeamAddData", addTeamMember)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      setFullName("");
      setMobileNumber("");
      setNumber("");
      setEmailAddress("");
      setDesignation("");
      closeForm();
      window.location.reload(true);
    }
  };

  const deleteData = (id) => {

    axios
      .delete(`http://localhost:9000/Team/TeamWithClient?id=${id}`)
      .then((response) => {

        setTeamMembers((prevTeamMembers) =>
          prevTeamMembers.filter((member) => member._id !== id)
        );

        setClient((prevTeamMembers) =>
          prevTeamMembers.filter((member) => member._id !== id)
        );

      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  return (
    <div className={`${colClass} mt-5 ${style.teamMember}`}>
      <div className={style.header}>
        <h3> Team Mambers ({teamMembers.length})</h3>
        <div className={style.headerRight}>
          <button className={style.btn} onClick={openForm}>
            <IoIosAddCircleOutline /> Add Members
          </button>
          <form className="d-inline">
            <input
              type="text"
              value={search}
              onChange={handleChange}
              className={style.searchInput}
            />
            <a className={style.searchBtn}>Search</a>
          </form>
        </div>
      </div>
      <div className={style.innerTeam}>
        <div className={style.teamhead}>
          <h5 className={colClass === "col-10" ? style.id : style.id2}>No</h5>
          <h5
            className={
              colClass === "col-10" ? style.detailsName : style.detailsName2
            }
          >
            Full Name
          </h5>
          <h5
            className={
              colClass === "col-10" ? style.detailsemail : style.detailsemail2
            }
          >
            Email Address
          </h5>
          <h5
            className={
              colClass === "col-10" ? style.detailsNumber : style.detailsNumber2
            }
          >
            Mobile Number
          </h5>
          <h5
            className={
              colClass === "col-10"
                ? style.detailsDesignation
                : style.detailsDesignation2
            }
          >
            Designation
          </h5>
          <h5
            className={
              colClass === "col-10" ? style.detailsAction : style.detailsAction2
            }
          >
            Action
          </h5>
        </div>
        <hr className="m-0" />

        {teamMembers.map((teamMember, index) => (
          console.log(teamMember._id),
          <div key={index} className={style.teamDetails}>
            <p className={colClass === "col-10" ? style.paraId : style.paraId2}>
              {index + 1}
            </p>
            <p
              className={
                colClass === "col-10"
                  ? style.paraDetailsName
                  : style.paraDetailsName2
              }
            >
              {teamMember.fullname}
            </p>
            <p
              className={
                colClass === "col-10"
                  ? style.paraDetailsemail
                  : style.paraDetailsemail2
              }
            >
              {teamMember.emailaddress}
            </p>
            <p
              className={
                colClass === "col-10"
                  ? style.paraDetailsMobile
                  : style.paraDetailsMobile2
              }
            >
              {teamMember.mobilenumber}
            </p>
            <p
              className={
                colClass === "col-10"
                  ? style.paraDetailsDesignation
                  : style.paraDetailsDesignation2
              }
            >
              {teamMember.designation}
            </p>
            <p
              className={
                colClass === "col-10" ? style.IconDeatails : style.IconDeatails2
              }
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_180_2366)">
                    <path
                      d="M22.1942 3.3H17.2727V1.83333C17.2714 0.821242 16.4247 0.0012375 15.3798 0H8.56537C7.5204 0.0012375 6.67376 0.821242 6.67248 1.83333V3.3H1.75097C1.12376 3.3 0.615234 3.79253 0.615234 4.4V12.5619C0.616359 12.7889 0.689641 13.01 0.825113 13.1953C0.960586 13.3805 1.15167 13.5208 1.37239 13.5971V18.7C1.37239 19.3075 1.88091 19.8 2.50812 19.8H21.437C22.0642 19.8 22.5728 19.3075 22.5728 18.7V13.5975C22.7935 13.5211 22.9846 13.3807 23.1201 13.1954C23.2555 13.0101 23.3288 12.7889 23.3299 12.5619V4.4C23.3299 3.79253 22.8214 3.3 22.1942 3.3ZM7.42964 1.83333C7.42964 1.22586 7.93816 0.733333 8.56537 0.733333H15.3798C16.007 0.733333 16.5155 1.22586 16.5155 1.83333V3.3H15.7584V1.83333C15.7584 1.73609 15.7185 1.64282 15.6475 1.57406C15.5765 1.5053 15.4802 1.46667 15.3798 1.46667H8.56537C8.46496 1.46667 8.36867 1.5053 8.29767 1.57406C8.22668 1.64282 8.18679 1.73609 8.18679 1.83333V3.3H7.42964V1.83333ZM15.0012 3.3H8.94395V2.2H15.0012V3.3ZM21.8156 18.7C21.8156 18.7972 21.7757 18.8905 21.7047 18.9593C21.6337 19.028 21.5374 19.0667 21.437 19.0667H2.50812C2.40772 19.0667 2.31143 19.028 2.24043 18.9593C2.16943 18.8905 2.12955 18.7972 2.12955 18.7V13.7231L10.4583 14.8357V15.7667C10.4583 16.3741 10.9668 16.8667 11.594 16.8667H12.3511C12.9784 16.8667 13.4869 16.3741 13.4869 15.7667V14.8357L21.8156 13.7231V18.7ZM12.7297 15.7667C12.7297 15.8639 12.6898 15.9572 12.6188 16.0259C12.5478 16.0947 12.4516 16.1333 12.3511 16.1333H11.594C11.4936 16.1333 11.3973 16.0947 11.3263 16.0259C11.2553 15.9572 11.2154 15.8639 11.2154 15.7667V13.5667C11.2154 13.4694 11.2553 13.3762 11.3263 13.3074C11.3973 13.2386 11.4936 13.2 11.594 13.2H12.3511C12.4516 13.2 12.5478 13.2386 12.6188 13.3074C12.6898 13.3762 12.7297 13.4694 12.7297 13.5667V15.7667ZM22.5728 12.5619C22.5729 12.6503 22.54 12.7358 22.4801 12.8026C22.4203 12.8694 22.3376 12.913 22.2472 12.9254L22.1422 12.9393L13.4869 14.0953V13.5667C13.4869 12.9592 12.9784 12.4667 12.3511 12.4667H11.594C10.9668 12.4667 10.4583 12.9592 10.4583 13.5667V14.0954L1.6983 12.9254C1.60785 12.913 1.52504 12.8695 1.46515 12.8027C1.40525 12.7359 1.37231 12.6504 1.37239 12.5619V4.4C1.37239 4.30275 1.41228 4.20949 1.48327 4.14073C1.55427 4.07196 1.65056 4.03333 1.75097 4.03333H22.1942C22.2946 4.03333 22.3909 4.07196 22.4619 4.14073C22.5329 4.20949 22.5728 4.30275 22.5728 4.4V12.5619Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_180_2366">
                      <rect
                        width="22.7147"
                        height="22"
                        fill="white"
                        transform="translate(0.615234)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <Link
                to={`/Status/${teamMember._id}`}
                onClick={() => idbox(teamMember._id)}
                value={eid}
              >
                <a className="mx-3 mx-md-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_180_2355)">
                      <path
                        d="M12.4442 10.4947C12.4209 10.5338 12.3899 10.5681 12.3529 10.5956C12.3159 10.6231 12.2737 10.6432 12.2287 10.6549C12.1837 10.6666 12.1367 10.6696 12.0905 10.6637C12.0443 10.6577 11.9997 10.6431 11.9594 10.6205L10.1637 9.61644C10.1098 9.58627 10.065 9.54288 10.0338 9.49062C10.0027 9.43837 9.98628 9.37909 9.98628 9.31875V6.71394C9.98628 6.62277 10.0237 6.53534 10.0902 6.47087C10.1568 6.40641 10.2471 6.37019 10.3412 6.37019C10.4353 6.37019 10.5256 6.40641 10.5922 6.47087C10.6587 6.53534 10.6961 6.62277 10.6961 6.71394V9.12028L12.3143 10.0252C12.3546 10.0477 12.39 10.0778 12.4184 10.1136C12.4468 10.1494 12.4676 10.1902 12.4797 10.2338C12.4917 10.2774 12.4948 10.3229 12.4887 10.3677C12.4826 10.4124 12.4675 10.4556 12.4442 10.4947ZM10.3412 4.77519C10.4354 4.77519 10.5256 4.73897 10.5922 4.67451C10.6588 4.61004 10.6962 4.52261 10.6962 4.43144V3.83723C10.6962 3.74606 10.6588 3.65862 10.5922 3.59416C10.5256 3.52969 10.4354 3.49348 10.3412 3.49348C10.2471 3.49348 10.1568 3.52969 10.0903 3.59416C10.0237 3.65862 9.98633 3.74606 9.98633 3.83723V4.43144C9.98633 4.52261 10.0237 4.61004 10.0903 4.67451C10.1568 4.73897 10.2471 4.77519 10.3412 4.77519ZM14.0922 5.19968L13.6584 5.61978C13.6254 5.6517 13.5993 5.68959 13.5814 5.7313C13.5636 5.773 13.5544 5.8177 13.5544 5.86284C13.5544 5.90798 13.5636 5.95268 13.5814 5.99438C13.5993 6.03608 13.6254 6.07397 13.6584 6.10589C13.6913 6.13787 13.7304 6.16322 13.7735 6.18051C13.8166 6.19779 13.8627 6.20666 13.9094 6.20661C13.956 6.20667 14.0021 6.1978 14.0452 6.18052C14.0883 6.16325 14.1274 6.1379 14.1603 6.10593L14.5941 5.68583C14.6607 5.62136 14.6981 5.53392 14.6981 5.44275C14.6981 5.35158 14.6607 5.26415 14.5941 5.19968C14.5276 5.13521 14.4373 5.09899 14.3432 5.09899C14.249 5.09899 14.1587 5.13521 14.0922 5.19968ZM6.52212 12.5316L6.08832 12.9517C6.05536 12.9836 6.02922 13.0215 6.01138 13.0632C5.99354 13.1049 5.98436 13.1496 5.98436 13.1948C5.98436 13.2399 5.99354 13.2846 6.01138 13.3263C6.02922 13.368 6.05536 13.4059 6.08832 13.4378C6.15762 13.5049 6.24843 13.5385 6.33929 13.5385C6.43015 13.5385 6.52096 13.5049 6.59026 13.4378L7.02406 13.0176C7.08938 12.9529 7.12572 12.8659 7.12519 12.7754C7.12466 12.6849 7.0873 12.5982 7.02122 12.5342C6.95514 12.4702 6.86567 12.4341 6.77223 12.4336C6.67879 12.4331 6.58892 12.4683 6.52212 12.5316ZM6.59026 5.19968C6.5237 5.13523 6.43343 5.09903 6.3393 5.09903C6.24518 5.09904 6.15492 5.13526 6.08836 5.19972C6.05541 5.23164 6.02926 5.26953 6.01143 5.31123C5.99359 5.35294 5.98441 5.39763 5.98441 5.44277C5.98441 5.48791 5.99359 5.53261 6.01143 5.57432C6.02926 5.61602 6.05541 5.65391 6.08836 5.68583L6.52216 6.10593C6.59146 6.17305 6.68227 6.20661 6.77313 6.20661C6.86399 6.20661 6.9548 6.17305 7.0241 6.10589C7.05706 6.07397 7.0832 6.03608 7.10104 5.99438C7.11888 5.95268 7.12806 5.90798 7.12806 5.86284C7.12806 5.8177 7.11888 5.773 7.10104 5.7313C7.0832 5.68959 7.05706 5.6517 7.0241 5.61978L6.59026 5.19968ZM15.3873 9.6625H16.0008C16.095 9.6625 16.1852 9.62628 16.2518 9.56182C16.3184 9.49735 16.3558 9.40992 16.3558 9.31875C16.3558 9.22758 16.3184 9.14015 16.2518 9.07568C16.1852 9.01122 16.095 8.975 16.0008 8.975H15.3873C15.2932 8.975 15.2029 9.01122 15.1364 9.07568C15.0698 9.14015 15.0324 9.22758 15.0324 9.31875C15.0324 9.40992 15.0698 9.49735 15.1364 9.56182C15.2029 9.62628 15.2932 9.6625 15.3873 9.6625ZM5.29513 8.975H4.68161C4.58748 8.975 4.4972 9.01122 4.43064 9.07568C4.36408 9.14015 4.32669 9.22758 4.32669 9.31875C4.32669 9.40992 4.36408 9.49735 4.43064 9.56182C4.4972 9.62628 4.58748 9.6625 4.68161 9.6625H5.29513C5.38925 9.6625 5.47953 9.62628 5.54609 9.56182C5.61265 9.49735 5.65004 9.40992 5.65004 9.31875C5.65004 9.22758 5.61265 9.14015 5.54609 9.07568C5.47953 9.01122 5.38925 8.975 5.29513 8.975ZM23.574 13.1361V15.387C23.574 15.8431 23.3784 16.2509 22.9934 16.6017V20.5974C22.9934 21.2961 22.4065 21.8645 21.6852 21.8645H11.7264C11.005 21.8645 10.4181 21.296 10.4181 20.5974V18.5014C10.3925 18.5016 10.3668 18.5023 10.3412 18.5023C7.80851 18.5023 5.42742 17.547 3.63651 15.8125C1.84564 14.078 0.859375 11.7717 0.859375 9.31875C0.859375 4.25497 5.11292 0.135254 10.3412 0.135254C15.5696 0.135254 19.8231 4.25497 19.8231 9.31875C19.8231 10.0226 19.7393 10.724 19.5756 11.4056C19.5941 11.4926 19.6038 11.5826 19.6038 11.6749V12.3193H22.7307C23.1957 12.3193 23.574 12.6857 23.574 13.1361ZM22.7306 13.0068H20.4532L20.4619 14.199C20.4637 14.4477 20.3643 14.6826 20.182 14.8605C19.9983 15.0397 19.7541 15.1384 19.4945 15.1384H13.917C13.3874 15.1384 12.9534 14.7191 12.9497 14.2039L12.9409 13.0068H10.681C10.6086 13.0068 10.5474 13.0661 10.5474 13.1362V15.3871C10.5474 15.6844 10.6907 15.9368 10.9983 16.1813C11.0748 16.2421 11.1627 16.3031 11.2597 16.3625C11.9272 16.7715 13.4072 17.0718 15.2516 17.1767C15.4746 16.6088 16.0422 16.204 16.7059 16.204C17.3692 16.204 17.9366 16.6084 18.1597 17.1759C20.0066 17.0701 21.4868 16.7701 22.152 16.3625C22.2488 16.3032 22.3365 16.2424 22.4127 16.182L22.4131 16.1817L22.4134 16.1814C22.721 15.9369 22.8643 15.6844 22.8643 15.3871V13.1362C22.8642 13.066 22.803 13.0068 22.7306 13.0068ZM15.8602 17.7104C15.8602 18.162 16.2395 18.5294 16.7058 18.5294C17.1721 18.5294 17.5514 18.162 17.5514 17.7104C17.5514 17.2588 17.1721 16.8914 16.7058 16.8914C16.2396 16.8914 15.8602 17.2588 15.8602 17.7104ZM17.0947 9.31875C17.0947 5.71204 14.0651 2.77779 10.3412 2.77779C6.61732 2.77779 3.5878 5.71204 3.5878 9.31875C3.5878 12.7847 6.38556 15.6291 9.90856 15.8459C9.8614 15.699 9.83762 15.546 9.83762 15.387V13.1361C9.83762 12.6857 10.216 12.3192 10.681 12.3192H13.8079V11.6748C13.8079 10.9404 14.4248 10.343 15.1831 10.343H17.0118C17.0668 10.0042 17.0945 9.66173 17.0947 9.31875ZM17.9908 11.9053H15.4209V12.3193H17.9908V11.9053ZM13.6508 13.0068L13.6595 14.199C13.6605 14.3379 13.776 14.4509 13.917 14.4509H19.4946C19.5289 14.4508 19.5627 14.4442 19.5943 14.4314C19.6258 14.4185 19.6544 14.3997 19.6783 14.3761C19.7264 14.3292 19.7526 14.268 19.7522 14.2039L19.7434 13.0068H13.6508ZM18.8939 12.3193V11.6749C18.8939 11.3195 18.5955 11.0305 18.2287 11.0305H15.183C14.8162 11.0305 14.5177 11.3196 14.5177 11.6749V12.3193H14.711V11.6749C14.711 11.4228 14.9227 11.2178 15.183 11.2178H18.2287C18.4889 11.2178 18.7006 11.4228 18.7006 11.6749V12.3193H18.8939ZM10.4181 17.8139V16.6016C10.3983 16.5835 10.3789 16.5653 10.3601 16.547C10.3538 16.547 10.3475 16.5472 10.3412 16.5472C6.22594 16.5472 2.87792 13.3045 2.87792 9.31871C2.87792 5.33293 6.22594 2.09025 10.3412 2.09025C14.4565 2.09025 17.8045 5.33293 17.8045 9.31871C17.8045 9.66142 17.7795 10.0044 17.7299 10.343H18.2287C18.5106 10.3428 18.7856 10.4269 19.0162 10.584C19.0808 10.1651 19.1133 9.7422 19.1132 9.31871C19.1132 4.63404 15.1781 0.822711 10.3412 0.822711C5.50426 0.822711 1.56921 4.63408 1.56921 9.31875C1.56921 14.0035 5.5043 17.8148 10.3412 17.8148C10.3668 17.8148 10.3925 17.8141 10.4181 17.8139ZM22.2836 20.5974V17.0775C21.4576 17.4755 20.0249 17.7539 18.2536 17.8591C18.1762 18.6202 17.5117 19.2169 16.7058 19.2169C15.9003 19.2169 15.2359 18.6207 15.1581 17.8599C13.3883 17.7556 11.9555 17.4768 11.128 17.0776V20.5974C11.128 20.917 11.3964 21.1769 11.7264 21.1769H21.6852C22.0151 21.177 22.2836 20.917 22.2836 20.5974Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_180_2355">
                        <rect
                          width="22.7147"
                          height="22"
                          fill="white"
                          transform="translate(0.859375)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </Link>

              <span
                className={style.editIcon}
                onClick={() => openModal(teamMember)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                >
                  <path
                    d="M19.9193 12.5506C19.6232 12.5506 19.3832 12.7747 19.3832 13.0512V17.4962C19.3821 18.3253 18.6627 18.9973 17.7748 18.9981H2.73145C1.84345 18.9973 1.12412 18.3253 1.12305 17.4962V4.4504C1.12412 3.62141 1.8435 2.94952 2.73145 2.94852H7.49177C7.78788 2.94852 8.0279 2.72439 8.0279 2.44789C8.0279 2.17155 7.78788 1.94727 7.49177 1.94727H2.73145C1.25161 1.94882 0.0524433 3.06857 0.0507812 4.4504V17.4964C0.0524433 18.8782 1.25161 19.9979 2.73145 19.9995H17.7748C19.2546 19.9979 20.4538 18.8782 20.4555 17.4964V13.0512C20.4555 12.7747 20.2154 12.5506 19.9193 12.5506Z"
                    fill="black"
                  />
                  <path
                    d="M20.2435 0.65985C19.3013 -0.21995 17.7737 -0.21995 16.8315 0.65985L7.26649 9.59137C7.20102 9.6525 7.15362 9.72843 7.12892 9.81175L5.8711 14.0521C5.84571 14.1374 5.84506 14.2276 5.86919 14.3133C5.89333 14.3989 5.9414 14.4771 6.00848 14.5398C6.07557 14.6024 6.15927 14.6473 6.25103 14.6699C6.34279 14.6925 6.43932 14.6919 6.53076 14.6682L11.0718 13.4935C11.161 13.4704 11.2423 13.4262 11.3078 13.365L20.8725 4.43337C21.8133 3.55292 21.8133 2.12774 20.8725 1.24734L20.2435 0.65985ZM8.43467 9.91678L16.2629 2.60684L18.7876 4.96428L10.9592 12.2742L8.43467 9.91678ZM7.93039 10.8617L9.94732 12.7453L7.15739 13.4671L7.93039 10.8617ZM20.1145 3.72543L19.5459 4.2563L17.021 1.89865L17.5898 1.36774C18.1132 0.879024 18.9618 0.879024 19.4851 1.36774L20.1145 1.95517C20.637 2.44448 20.637 3.23632 20.1145 3.72543Z"
                    fill="black"
                  />
                </svg>
              </span>

              <span
                className={`ms-3 ms-md-2 ${style.delIcon}`}
                onClick={() => deleteData(teamMember._id)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="21"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
                </svg>
              </span>
            </p>
          </div>
        ))}
      </div>
      <button className={style.addmore} onClick={openForm}>
        + Add More
      </button>
      {showModal && (
        <Modal
          member={selectedMember}
          updateTeamMember={updateMember}
          onClose={closeModal}
          showModal={showModal}
        />
      )}
      {showForm && (
        <div openForm={showForm} className={style.modal} tabIndex="-1">
          <div className="modal-dialog">
            <div className={`modal-content ${style.modalContent}`}>
              <div className="modal-header ">
                <h3 className="modal-title"> Add New Team Member Details</h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  onClick={closeForm}
                  aria-label="Close"
                ></button>
              </div>
              <div className={` ${style.teamForm} mt-5 modal-body py-0`}>
                <form onSubmit={handleSubmit}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <div className={style.errormsg}>{errorFullName}</div>
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    maxLength={10}
                  />
                  <div className={style.errormsg}>{errorMobileNumber}</div>

                  <label>Email Address</label>
                  <input
                    type="text"
                    name="emailAddress"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                  <div className={style.errormsg}>{errorEmailAddress}</div>

                  <label>Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                  <div className={style.errormsg}>{errorDesignation}</div>
                  <input type="submit" className={style.btn} />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainTeam;

