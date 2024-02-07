import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-gray  vh-100">
      <div className="bg-white p-3  rounded ">
        <div class="row">
          <div class="col-sm-12 text-center">
            <Link
              to="/student"
              id="btnSearch"
              class="btn btn-primary m-1 btn-md center-block"
              Style="width: 100px;"
              OnClick="btnSearch_Click"
            >
              Student
            </Link>
            <Link
              to="/teacher"
              id="btnClear"
              class="btn btn-danger m-1  btn-md center-block"
              Style="width: 100px;"
              OnClick="btnClear_Click"
            >
              Teacher
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
