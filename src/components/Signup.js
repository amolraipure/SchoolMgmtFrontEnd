import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // alert("hi");

    axios
      .post("https://school-management-backend-qydv.onrender.com:5000/", {
        name,
        email,
        password,
      })

      .then((result) => {
        // alert("hellp");
        console.log(result);
        if (result.status === 200) {
          console.log({ name, email, password });
          alert("registration successful");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
    e.preventDefault();
  };
  return (
    <div className="d-flex justify-content-center align-items-center  vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email </strong>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder=" Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-3 w-100 rounded-0"
          >
            Register as Student
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 w-100 rounded-0"
          >
            Register as Teacher
          </button>
        </form>
        <p className="mb-3">already have an Account </p>
        <Link
          type="submit"
          to="/login"
          className="btn btn-default border bg-dark text-white w-100 rounded-0"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
