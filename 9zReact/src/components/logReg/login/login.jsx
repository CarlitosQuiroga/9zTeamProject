import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import './style.css'
const { loginUser } = require("../../../service/api");

const Login = () => {
  const [refresh, setRefresh] = useState(0);
  const [studentTableData, setStudentTableData] = useState({ student: [] });
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
    <Form className="form" onSubmit={handleSubmit}>
    <div className="containerFormLogin">
   
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
  );
};

export default Login;
