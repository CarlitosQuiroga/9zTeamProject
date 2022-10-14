import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import './style.css';
const { saveUser } = require("../../../service/api");

const SignUp = () => {
  const [refresh, setRefresh] = useState(0);
  const [studentTableData, setStudentTableData] = useState({ student: [] });
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
    email: "",
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
     saveUser(userFormData).then((response) => {
       if (response.status === 200) {
          setRefresh(Math.random());
       }
     });
  };

  return (
    <>
    {/* <div className="container"> */}
      <Form className="form" onSubmit={handleSubmit}>
        <div className="containerForms">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleInputChange}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

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
          Registrarse
        </Button>
        </div>
      </Form>
      {/* </div> */}
    </>
  );
};

export default SignUp;
