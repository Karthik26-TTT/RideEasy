import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../styles/LoginForm.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Fetch user data from the server
      const response = await fetch("http://localhost:5000/users");

      if (!response.ok) {
        // If the response is not successful, show an error
        const errorDetails = await response.text(); // Capture the error details from the response
        console.error("Server Error Details:", errorDetails); // Log the error for debugging
        toast.error("Unexpected response from server. Please try again later.");
        return;
      }

      const users = await response.json(); // Parse the response as JSON

      if (!Array.isArray(users)) {
        // Validate if the response is an array
        console.error("Unexpected server response format:", users);
        toast.error("Invalid server response. Please contact support.");
        return;
      }

      // Find the user with matching credentials
      const user = users.find(
        (u) => u.username === username && u.password === password
      )

      if (user) {
        // If user found, store username in localStorage and navigate to Home page
        localStorage.setItem("username", username);
        toast.success("Login successful! Redirecting to Home...");
        navigate("/home");
      } else {
        // If invalid credentials, show an error
        toast.error("Invalid credentials! Please try again.");
      }
    } catch (error) {
      // Handle network or unexpected errors
      console.error("Error during login:", error);
      toast.error("An error occurred: " + error.message);
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
