import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://school-management-backend-qydv.onrender.com/login", {
        email,
        password,
      })

      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home");
        } else {
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex justify-content-center align-items-center  vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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
              required
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
            className="btn btn-primary w-100 mb-3 rounded-0"
          >
            Login
          </button>
        </form>
        {/* <p className="mb-3">already have an Account </p> */}
        <Link
          type="submit"
          to="/"
          className="btn btn-default border bg-dark text-white w-100 rounded-0"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
