import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Student() {
  const [name, setName] = useState();
  const [rollno, setRollno] = useState();
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    // e.preventDefault();
    axios
      .post("https://school-management-backend-qydv.onrender.com/student", {
        name,
        rollno,
      })

      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("https://school-management-backend-qydv.onrender.com/student")
      .then((users) => setUsers(users.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="m-3">
      <form onSubmit={handleSubmit}>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label htmlFor="rollno" class="sr-only">
              Roll Number
            </label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">No.</div>
              </div>
              <input
                type="text"
                name="rollno"
                class="form-control"
                id="inlineFormInputGroup"
                placeholder="Enter Roll Number"
                onChange={(e) => setRollno(e.target.value)}
                required
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
              back
            </Link>
          </div>
        </div>
      </form>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Roll No</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((students) => {
            return (
              <tr>
                <td>{students.rollno}</td>
                <td>{students.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
