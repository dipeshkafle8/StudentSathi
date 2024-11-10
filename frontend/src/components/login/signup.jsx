import "./signup.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const Navigate = useNavigate();

  //for sending request to backend
  async function sendDataToBackend(obj) {
    try {
      let res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
      });
      res = await res.json();
      if (res.status) {
        Navigate("/login");
      } else {
        alert("Unable to create");
      }
    } catch (err) {
      alert("Unable to create User");
    }
  }

  //for handling form data after submit
  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let obj = {
      username: formData.get("username") ?? "",
      email: formData.get("email") ?? "",
      password: formData.get("password") ?? ""
    };
    sendDataToBackend(obj);
  }

  return (
    <>
      <div className="home-page">
        <form onSubmit={handleSubmit} className="container2">
          <div className="signup-form">
            <h2>Sign Up</h2>
            <div className="input-group">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" id="signupbutton">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
