import "./login.css";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

function Login() {
  const username = localStorage.getItem("username");
  const Navigate = useNavigate();
  const { university } = useParams();
  console.log(university);

  useEffect(() => {
    if (username) {
      if (university) {
        Navigate(`/Universities/${university}`);
      } else {
        Navigate("/Universities");
      }
      window.location.reload();
    }
  }, []);

  const location = useLocation();

  const sendLoginDetailsToBackEnd = async data => {
    try {
      let resp = await axios.post("http://localhost:5000/login", data);
      resp = resp.data;
      console.log(resp);
           
      //to access universities you need to logged in
      if (resp.status) {
        if (location.pathname === "/login") {
          Navigate("/");
        } else if (location.pathname === "/universites1") {
          Navigate("/Universities");
        } else if (location.pathname === "/universites1" && university) {
          Navigate(`/universites/${university}`);
        }
        window.location.reload();
      } else {
        alert("Bad!! credential");
      }
    } catch (error) {
      alert("Error in login");
      console.log(error);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let obj = {
      username: formData.get("username") ?? "",
      password: formData.get("password") ?? ""
    };
    sendLoginDetailsToBackEnd(obj);
  };

  return (
    <>
      <div className="page-background">
        <div className="container1">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div className="input-group1">
              <input
                type="text"
                name="username"
                placeholder="username"
                required
              />
            </div>
            <div className="input-group1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" id="loginbutton">
              Login
            </button>
          </form>
          <div className="register-option">
            <p>
              Don't have an account? <Link to="/signup">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
