import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "../styles/RideTracking.module.css"; // Assuming you have this CSS file

// Mock driver and ride data
const driverData = {
  name: "John Doe",
  vehicle: "Toyota Camry",
  vehicleNumber: "AB123CD",
  estimatedArrival: "10 mins",
  currentLocation: { lat: 37.7749, lng: -122.4194 }, // Mock coordinates (San Francisco)
};

const RideTracking = () => {
  const navigate = useNavigate();  // Navigation hook
  const [rideData, setRideData] = useState(driverData);
  const [isTracking, setIsTracking] = useState(true); // Mock real-time tracking

  useEffect(() => {
    // Simulate real-time location updates
    const interval = setInterval(() => {
      if (isTracking) {
        // Example: Update the driver's location every 10 seconds (mocking with static data)
        setRideData((prevData) => ({
          ...prevData,
          currentLocation: {
            lat: prevData.currentLocation.lat + 0.001,
            lng: prevData.currentLocation.lng + 0.001,
          },
        }));
      }
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [isTracking]);

  const handleStopTracking = () => {
    setIsTracking(false);
    toast.success("Tracking stopped successfully!");
  };

  const handleStartTracking = () => {
    setIsTracking(true);
    toast.success("Tracking started successfully!");
  };

  const handleNavigateHome = () => {
    navigate("/home");  // Navigate to home page when clicked
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ride Tracking</h1>

      <div className={styles.rideDetails}>
        <h2>Driver Details</h2>
        <p><strong>Name:</strong> {rideData.name}</p>
        <p><strong>Vehicle:</strong> {rideData.vehicle}</p>
        <p><strong>Vehicle Number:</strong> {rideData.vehicleNumber}</p>

        <h2>Estimated Arrival Time</h2>
        <p>{rideData.estimatedArrival}</p>
      </div>

      <div className={styles.mapContainer}>
        {/* Map placeholder */}
        <div className={styles.map}>
          <h3>Drivers Current Location</h3>
          <p>Lat: {rideData.currentLocation.lat}, Lng: {rideData.currentLocation.lng}</p>
          {/* Integrate real map here, like Google Maps or Leaflet */}
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.button} onClick={isTracking ? handleStopTracking : handleStartTracking}>
          {isTracking ? "Stop Tracking" : "Start Tracking"}
        </button>
        <button className={styles.button} onClick={handleNavigateHome}>Go to Home</button>
      </div>
    </div>
  );
};

export default RideTracking;
