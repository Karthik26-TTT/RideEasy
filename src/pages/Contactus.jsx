import { useState } from "react";

const Contactus = () => {
  const [showTicketForm, setShowTicketForm] = useState(false); // State to toggle between forms
  const [query, setQuery] = useState(""); // State to manage the query input
  const [isSubmitted, setIsSubmitted] = useState(false); // State to show success message

  const handleSubmitTicket = () => {
    if (query.trim()) {
      setIsSubmitted(true);
      // Handle ticket submission (e.g., API call or similar)
      setQuery("")
      
    }
  };

  const cardStyle = {
    maxWidth: "500px",
    margin: "auto",
    backgroundColor: "#f8f9fa",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#343a40",
    marginBottom: "20px",
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const sectionTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "15px",
  };

  const textStyle = {
    fontSize: "1rem",
    color: "#495057",
    marginBottom: "10px",
    textAlign: "center",
  };

  const contactInfoStyle = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "20px",
    cursor: "pointer",
    textDecoration: "underline", // Makes it look clickable
  };

  const buttonStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#218838",
  };

  return (
    <div style={{ padding: "50px 15px" }}>
      <h1 style={headingStyle}>Contact Us</h1>

      {/* Conditional rendering based on the state of showTicketForm */}
      {!showTicketForm ? (
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>Customer Support</h2>
          <p style={textStyle}>
            If you have any questions or need assistance, feel free to contact us.
          </p>

          <p
            style={contactInfoStyle}
            onClick={() => window.location.href = "tel:+911234567890"}
          >
            Phone: +91 123 456 7890
          </p>

          <p
            style={contactInfoStyle}
            onClick={() => window.location.href = "mailto:support@rideease.com"}
          >
            Email: support@rideease.com
          </p>

          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
            onClick={() => setShowTicketForm(true)} // Show the ticket form when clicked
          >
            Submit a Ticket
          </button>
        </div>
      ) : (
        // Ticket Details Form
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>Enter Your Query</h2>

          <textarea
            style={{
              width: "100%",
              height: "150px",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              marginBottom: "20px",
            }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your issue or question"
            
          />

          <button
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
            onClick={handleSubmitTicket}
          >
            Submit Ticket
          </button>

          {isSubmitted && (
            <div style={{ marginTop: "20px", color: "#28a745" }}>
              <p>Your query has been successfully submitted! We will get back to you shortly.</p>
            </div>
         
          )}
        </div>
      )}
    </div>
  );
};

export default Contactus;
