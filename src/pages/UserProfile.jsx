
import styles from "../styles/UserProfile.module.css";

function UserProfile() {
  // Fetch user details from localStorage
  const username = localStorage.getItem("username") || "Guest";
  const email = localStorage.getItem("email") || "Not provided";

  return (
    <div className={styles.profileContainer}>
      <h2>Your Profile</h2>
      <div className={styles.profileDetails}>
        <p>
          <strong>Username:</strong> {username}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
