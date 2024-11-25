import { useState } from "react";
import styles from "../styles/RideBooking.module.css";
import bike from "../assets/bike.jpg";
import car from "../assets/car.jpg";
import auto from "../assets/auto.jpg";
import p from "../assets/parcel.jpg"; // Add a parcel image

const RideBooking = () => {
  const [step, setStep] = useState(1); // Step 1: Vehicle/Parcel Selection, Step 2: Search, Step 3: Parcel Details
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [parcelDetails, setParcelDetails] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const vehicleOptions = [
    { type: "Bike", pricePerKm: 5, eta: "3 min", image: bike },
    { type: "Car", pricePerKm: 15, eta: "8 min", image: car },
    { type: "Auto", pricePerKm: 10, eta: "5 min", image: auto },
    { type: "Parcel", pricePerKm: 20, eta: "15 min", image: p }, // Add Parcel option
  ];

  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
    setStep(2); // Move to search step
  };

  const handleConfirmStep2 = (e) => {
    e.preventDefault();
    if (!pickup || !dropoff) {
      setConfirmation("Please select both pickup and drop-off locations.");
      return;
    }
    if (selectedVehicle.type === "Parcel") {
      setStep(3); // Navigate to step 3 for parcel details
    } else {
      setConfirmation(`Booking confirmed for a ${selectedVehicle.type}!`);
      setIsBookingConfirmed(true);

      // Automatically hide the confirmation popup after 3 seconds
      setTimeout(() => {
        setIsBookingConfirmed(false);
      }, 3000);
    }
  };

  const handleConfirmStep3 = (e) => {
    e.preventDefault();
    if (!parcelDetails) {
      setConfirmation("Please enter parcel details.");
      return;
    }
    setConfirmation(
      `Parcel Booking confirmed! Pickup: ${pickup}, Drop-off: ${dropoff}, Details: ${parcelDetails}`
    );
    setIsBookingConfirmed(true);

    // Automatically hide the confirmation popup after 3 seconds
    setTimeout(() => {
      setIsBookingConfirmed(false);
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ride & Parcel Booking</h1>

      {/* Step 1: Vehicle/Parcel Selection */}
      {step === 1 && (
        <div className={styles.vehicleOptions}>
          <div className={styles.vehicleList}>
            {vehicleOptions.map((vehicle, index) => (
              <div
                key={index}
                className={styles.vehicleCard}
                onClick={() => handleVehicleSelect(vehicle)}
              >
                <img
                  src={vehicle.image}
                  alt={vehicle.type}
                  className={styles.vehicleImage}
                />
                <button className={styles.bookButton}>
                  {vehicle.type === "Parcel"
                    ? "Book Parcel"
                    : `Book ${vehicle.type}`}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Pickup and Drop-off Form */}
      {step === 2 && (
        <form className={styles.form} onSubmit={handleConfirmStep2}>
          <h2>{`Book Your ${selectedVehicle.type}`}</h2>
          <input
            type="text"
            placeholder="Select Pickup Location from Map"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Select Drop-off Location from Map"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            {selectedVehicle.type === "Parcel"
              ? "Continue to Parcel Details"
              : "Confirm Booking"}
          </button>
        </form>
      )}

      {/* Step 3: Parcel Details */}
      {step === 3 && selectedVehicle.type === "Parcel" && (
        <form className={styles.form} onSubmit={handleConfirmStep3}>
          <h2>Enter Parcel Details</h2>
          <textarea
            placeholder="Describe your parcel (e.g., size, weight)"
            value={parcelDetails}
            onChange={(e) => setParcelDetails(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Confirm Parcel Booking
          </button>
        </form>
      )}

      {/* Confirmation Popup */}
      {isBookingConfirmed && (
        <div className={styles.popup}>
          <p>{confirmation}</p>
        </div>
      )}
    </div>
  );
};

export default RideBooking;
