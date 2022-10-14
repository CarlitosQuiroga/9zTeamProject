import React, { useEffect, useState } from "react";
import SignUp from "./SignUpForm";
import { Form, Button } from "react-bootstrap";
import './style.css';
const { saveUser } = require("../../../service/api");

const SignUpBd = () => {
  
  return (
    <>
    <div className="container-xxl">
        <SignUp/>
      </div>
    </>
  );
};

export default SignUpBd;
