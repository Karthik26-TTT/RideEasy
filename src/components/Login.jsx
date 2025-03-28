import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../styles/LoginForm.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = localStorage.getItem("userDetails");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        localStorage.setItem("username", username);
        toast.success("Login successful! Redirecting to Home...");
        navigate("/home");
      } else {
        toast.error("Invalid credentials! Please try again.");
      }
    } else {
      toast.error("No user found. Please sign up first.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.bikeCarAnimation}>
        <div className={styles.animationText}>Login to start your journey with us!</div>
      </div>
      <div className={styles.formCard}>
        <h1>RideEase</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don’t have an account?{" "}
          <a href="#" onClick={() => navigate("/signup")}>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
