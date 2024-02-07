import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Teacher() {
  const [name, setName] = useState();
  const [emp_id, setEmp_id] = useState();
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    // e.preventDefault();
    axios
      .post("http://localhost:5000/teacher", { name, emp_id })

      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/teacher")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="m-3">
        <form onSubmit={handleSubmit}>
          <div class="form-row align-items-center">
            <div class="col-auto">
              <label class="sr-only" htmlFor="emp_id">
                Employee Id
              </label>
              <div class="input-group mb-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">Id</div>
                </div>
                <input
                  type="text"
                  name="emp_id"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Enter your Id"
                  onChange={(e) => setEmp_id(e.target.value)}
                />
              </div>
            </div>

            <div class="col-auto">
              <label class="sr-only" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                class="form-control mb-2"
                id="inlineFormInput"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-primary m-2">
                Add
              </button>
              <Link to="/home" type="submit" class="btn btn-primary m-2">
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Employee Id</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((teacher) => {
            return (
              <tr>
                <td>{teacher.emp_id}</td>
                <td>{teacher.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Teacher;
