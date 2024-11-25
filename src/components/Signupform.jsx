import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../styles/SignupForm.module.css";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (username && password) {
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
          toast.success("Signup successful! Please log in.");
          navigate("/");
        } else {
          toast.error("Error occurred while signing up.");
        }
      } catch (error) {
        toast.error("An error occurred: " + error.message);
      }
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <div className={styles.formContainer}>
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
