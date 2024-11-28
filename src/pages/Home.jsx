import { Link } from "react-router-dom";
import styles from "../styles/HomePage.module.css";
import bike from "../assets/bike.jpg";
import car from "../assets/car.jpg";
import auto from "../assets/auto.jpg";

function HomePage() {
  const rideOptions = [
    { type: "Bike", pricePerKm: 5, eta: "3 min", image: bike },
    { type: "Car", pricePerKm: 15, eta: "8 min", image: car },
    { type: "Auto", pricePerKm: 10, eta: "5 min", image: auto },
  ];

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
                <p>Price per km: ${ride.pricePerKm}</p>
                <p>ETA: {ride.eta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* User Profile Access */}
      <div className={styles.userProfile}>
        {/* <h2>Click Below to Book</h2> */}
        <Link to="/ride-booking" className={styles.profileLink}>
          Book Ride
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
