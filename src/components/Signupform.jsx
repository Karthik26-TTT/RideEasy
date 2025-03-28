import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../styles/SignupForm.module.css";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (email && username && password && confirmPassword) {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }

      // Store user details in localStorage
      const userDetails = { email, username, password };
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      toast.success("Signup successful! Please log in.");
      navigate("/"); // Navigate to the login page
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formCard}>
        <h1>RideEase</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account?{" "}
          <a href="#" onClick={() => navigate("/")}>
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupForm;
