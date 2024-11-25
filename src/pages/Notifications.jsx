import { useState } from "react";
import { toast } from "react-toastify"; // Optional: For real-time toast notifications
import "react-toastify/dist/ReactToastify.css"; // Ensure styles are imported
import styles from "../styles/notification.module.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "Ride Update", message: "Your ride is 5 minutes away!", read: false },
    { id: 2, type: "Promotional Offer", message: "Get 20% off your next ride!", read: false },
    { id: 3, type: "Alert", message: "Your payment was successfully processed!", read: false },
    { id: 4, type: "System Message", message: "Your profile was updated successfully.", read: false },
    { id: 5, type: "Security Alert", message: "Suspicious login detected from a new device.", read: false },
  ]);

  const handleClick = (notification) => {
    toast.info(`You clicked on: ${notification.message}`); // Toast notification

    // Toggle "read" status of the notification
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === notification.id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Notifications</h1>
      <div className={styles.notificationList}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${styles.notification} ${
              styles[notification.type.toLowerCase().replace(" ", "")]
            } ${notification.read ? styles.read : ""}`}
            onClick={() => handleClick(notification)}
          >
            <h3 className={styles.type}>
              {notification.type} {notification.read && <span className={styles.readLabel}>(Read)</span>}
            </h3>
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
