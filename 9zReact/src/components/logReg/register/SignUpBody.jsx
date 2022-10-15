import React from "react";
import SignUp from "./SignUpForm";
import TopNav from "../../TopNav/TopNav";
import Footer from "../../Footer/Footer";
import "./style.css";

const SignUpBd = () => {
  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="containerBodySign">
          <SignUp />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpBd;
