import "./App.css";
// import "./components/Home.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Student from "./components/Student";
import Teacher from "./components/Teacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/student" element={<Student />}></Route>
        <Route path="/teacher" element={<Teacher />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
