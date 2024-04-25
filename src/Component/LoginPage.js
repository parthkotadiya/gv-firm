import React, { useState} from "react";
import style from "../Style/LoginPage.module.css";
// import loginPageImg from "../Assent/logning-img.png";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const validateForm = () => {
    let errors = {};

    if (email.trim() === "") {
      errors.email = "Email is required.";
    } else if (!isValidEmail(email)) {
      errors.email = "Email is not valid.";
    }

    if (password.trim() === "") {
      errors.password = "Password is required.";
    }

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
     setEmail("");
     setPassword('');
     navigate("/Dashboard");
    }
  };

  const renderErrorMessage = (fieldName) =>
    errorMessages[fieldName] && <div className={style.error}>{errorMessages[fieldName]}</div>;

  return (
    <div className="row">
      <div className={`col-lg-6 col-12 p-0`}>
       <div className={style.imagecontent}></div>
      </div>
      <div className={`col-lg-6 col-12 p-0 ${style.leftContent}`}>
        <div className="container" style={{ display: "contents" }}>
          <form onSubmit={handleSubmit} className={style.formContent}>
            <div className={style.input}>
              <input
                type="text"
                placeholder="User id"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {renderErrorMessage("email")}
            </div>
            <div className={style.input}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {renderErrorMessage("password")}
            </div>
            <div className={style.captcha}>
              <label className='mb-3'>Captcha</label>
              <ReCAPTCHA
                sitekey="6Lec1JUoAAAAANbXKtj9q5xNUcQrXyzftr7eg7YY"
               />
            </div>
            <div className={style.btnSubmit}>
              <input type="submit" value="Login" className={style.submitBtn} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
