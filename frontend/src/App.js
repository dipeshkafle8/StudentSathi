import Front from "./components/Front.jsx";
import Course from "./components/Course/Course.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Navbar.jsx";
import Login from "./components/Login/Login.jsx";
import SignUp from "./components/Login/Signup.jsx";
import Details from "./components/coursedetails/Details.jsx";
import HandleUniversity from "./components/universities/university.jsx";
import Contact from "./components/Contact/contact.jsx";
import Carriers from "./components/Carriers/Carriers.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/Coursedetails/:index" element={<Details />} />
          <Route path="/Course" element={<Course />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/Universities"
            element={
              <ProtectedRoute>
                <HandleUniversity />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Universities/:Course"
            element={
              <ProtectedRoute>
                <HandleUniversity />
              </ProtectedRoute>
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Carriers" element={<Carriers />} />
          <Route path="/Carriers/:courseCarriers" element={<Carriers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
