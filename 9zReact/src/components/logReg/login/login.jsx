import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import TopNav from "../../TopNav/TopNav";
import Footer from "../../Footer/Footer";
const { loginUser } = require("../../../service/api");

const Login = () => {
  const [setRefresh] = useState(0);
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserFormData({
      ...userFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userFormData);
    loginUser(userFormData).then((response) => {
      if (response.status === 200) {
        setRefresh(Math.random());
      }
    });
  };
  return (
    <div className="containerLogin">
      <TopNav />
      <div className="containerLoginChild">
      <Form className="formLogin" onSubmit={handleSubmit}>
        <div className="containerFormLogin text-center">
           <h1>LOGIN</h1>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              onChange={handleInputChange}
              name="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              name="password"
            />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
      <Footer />
    </div>
  );
};

export default Login;
