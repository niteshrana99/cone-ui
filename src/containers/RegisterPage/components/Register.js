import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import FieldError from "../../../components/FieldError/FieldError";
import Input from "../../../components/Input/Input";
import {
  EMAIL_REGEX,
  MOBILE_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
} from "../../../constants/regex";
import network from "../../../utils/network";
import styles from "./Register.module.css";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    name: "",
    password: "",
    mobileNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: true,
    name: true,
    password: true,
    mobileNumber: true,
  });

  const { email, name, password, mobileNumber } = registerForm;

  const formValueChangeHandler = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    if(!formErrors.email || !formErrors.password || !formErrors.name || !formErrors.mobileNumber) return;
    if(!name || !password || !email || !mobileNumber) return;
    const data = network.postData('register', registerForm).next().value.then((d) => {
      console.log(d)
    }).catch(e => {
      console.log(e);
    });
  };

  const validateRegEX = (e, regEx) => {
    let isCorrect = e.target.value.match(regEx);
    setFormErrors({
      ...formErrors,
      [e.target.name]: !!isCorrect
    });
    
  }
  return (
    <div>
      <main>
        <center>
          <div className="section"></div>
          <div className="container">
            <div
              className="z-depth-1 grey lighten-4 row"
              style={{
                display: "inline-block",
                padding: "32px 48px 0px 48px",
                border: "1px solid #EEE",
              }}
            >
              <h5 className="indigo-text">Create New Account</h5>
              <form
                onSubmit={registerSubmitHandler}
                className="col s12"
                method="post"
              >
                <div className={`row ${styles.registerInputFields}`}>
                  <div className="input-field col s12">
                    <Input
                      name="name"
                      id="name"
                      label="Enter your Name"
                      onChange={formValueChangeHandler}
                      onBlur={(e) => validateRegEX(e,NAME_REGEX)}
                      value={name}
                    >
                      <Input.icon icon="person_outline" />
                    </Input>
                    {!formErrors.name &&  <FieldError message="Please provide a valid name" />}
                  </div>
                </div>

                <div className={`row ${styles.registerInputFields}`}>
                  <div className="input-field col s12">
                    <Input
                      name="email"
                      id="email"
                      label="Enter your email"
                      onChange={formValueChangeHandler}
                      onBlur={(e) => validateRegEX(e, EMAIL_REGEX)}
                      value={email}
                    >
                      <Input.icon icon="email" />
                    </Input>
                    {!formErrors.email &&  <FieldError message="Please provide a valid Email" />}
                  </div>
                </div>
                <div className={`row ${styles.registerInputFields}`}>
                  <div className="input-field col s12">
                    <Input
                      name="password"
                      id="password"
                      type="password"
                      label="Enter your password"
                      value={password}
                      onBlur={(e) => validateRegEX(e, PASSWORD_REGEX)}
                      onChange={formValueChangeHandler}
                    >
                      <Input.icon icon="security" />
                    </Input>
                    {!formErrors.password &&  <FieldError message="Password must contain 6 or more characters." />}
                  </div>
                </div>

                <div className={`row ${styles.registerInputFields}`}>
                  <div className="input-field col s12">
                    <Input
                      name="mobileNumber"
                      id="mobileNumber"
                      label="Enter Mobile Number"
                      value={mobileNumber}
                      onBlur={(e) => validateRegEX(e, MOBILE_REGEX)}
                      onChange={formValueChangeHandler}
                    >
                      <Input.icon icon="phone_android" />
                    </Input>
                    {!formErrors.mobileNumber &&  <FieldError message="Please enter a valid mobile number" />}
                  </div>
                  <label style={{ float: "right" }}>
                    <Link className="pink-text" to="/login">
                      <b>Already Registered ? Login Here</b>
                    </Link>
                  </label>
                </div>

                <br />
                <center>
                  <div className="row">
                    <Button type="submit" name="btn_register">
                      Register
                    </Button>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </center>

        <div className="section"></div>
        <div className="section"></div>
      </main>
    </div>
  );
};

export default Register;
