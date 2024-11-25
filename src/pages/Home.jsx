import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/HomePage.module.css";
import bike from "../assets/bike.jpg";
import car from "../assets/car.jpg";
import auto from "../assets/auto.jpg";

function HomePage() {
  const [currentBooking, setCurrentBooking] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  const rideOptions = [
    { type: "Bike", pricePerKm: 5, eta: "3 min", image: bike },
    { type: "Car", pricePerKm: 15, eta: "8 min", image: car },
    { type: "Auto", pricePerKm: 10, eta: "5 min", image: auto },
  ];

  const handleBookRide = (ride) => {
    setCurrentBooking({
      type: ride.type,
      pickup: "Your Location",
      dropoff: "Destination",
      status: "Confirmed",
    });
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 2000); // Close popup after 2 seconds
  };

  return (
    <div className={styles.homeContainer}>
      {/* Welcome Section */}
      <div className={styles.welcomeSection}>
        <h1>Welcome to RideEase!</h1>
        <p>
          Your ride, your choice. Safe, reliable, and fast transportation
          options for everyone.
        </p>
      </div>

      {/* Ride Options Section */}
      <div className={styles.rideOptions}>
        <h2>Available Ride Options</h2>
        <div className={styles.rideList}>
          {rideOptions.map((ride, index) => (
            <div key={index} className={styles.rideCard}>
              {/* Enhanced Image Section */}
              <div className={styles.imageContainer}>
                <img
                  src={ride.image}
                  alt={ride.type}
                  className={styles.rideImage}
                />
              </div>
              {/* Ride Details */}
              <div className={styles.rideDetails}>
                <h4>{ride.type}</h4>
                <p>Price per km: ₹{ride.pricePerKm}</p>
                <p>ETA: {ride.eta}</p>
                <button
                  className={styles.bookButton}
                  onClick={() => handleBookRide(ride)}
                >
                  Book {ride.type}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Status Section */}
      <div className={styles.bookingStatus}>
        <h2>Current Booking Status</h2>
        {currentBooking ? (
          <div className={styles.bookingDetails}>
            <p>Ride Type: {currentBooking.type}</p>
            <p>Pickup: {currentBooking.pickup}</p>
            <p>Dropoff: {currentBooking.dropoff}</p>
            <p>Status: {currentBooking.status}</p>
          </div>
        ) : (
          <p>No active bookings. Book your ride now!</p>
        )}
      </div>

      {/* User Profile Access */}
      <div className={styles.userProfile}>
        <h2>Manage Your Profile</h2>
        <Link to="/user-profile" className={styles.profileLink}>
          Go to Profile
        </Link>
      </div>

      {/* Confirmation Popup */}
      {popupVisible && (
        <div className={styles.popup}>
          <p>Booking Confirmed!</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
