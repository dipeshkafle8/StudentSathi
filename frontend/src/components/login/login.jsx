import "./login.css";
import { useNavigate, Link, useLocation } from "react-router-dom";

import axios from "axios";

function Login() {
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const sendLoginDetailsToBackEnd = async data => {
    try {
      let response = await axios.post("http://localhost:5000/user/login", data);
      response = response.data;
      console.log(response);
      console.log("User data");

      //to access universities you need to logged in
      if (response.success) {
        //for storinng response in localStorage
        localStorage.setItem("token", response.jwtToken);
        localStorage.setItem("LoggedUser", response.username);

        Navigate(from, { replace: true });
        /* 
        Note:After a user logs in they are redirected back
        to the original route after using replace:true the login page is 
        replaced in history stack,preventing the user from navigating back 
        to the login page using the browser's back button.
        */
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
