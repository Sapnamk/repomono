import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    // Demo Login
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Email Scheduler</h1>
        <p className="subtitle">Sign in to continue</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <div className="login-links">
          <Link to="/forgot-password" className="link">
            Forgot Password?
          </Link>
        </div>

        <div className="signup">
          Don't have an account?{" "}
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}