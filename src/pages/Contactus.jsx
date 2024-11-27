

const Contactus = () => {
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

      <div style={cardStyle}>
        <h2 style={sectionTitleStyle}>Customer Support</h2>
        <p style={textStyle}>
          If you have any questions or need assistance, feel free to contact us.
        </p>

        <p
          style={contactInfoStyle}
          onClick={() => window.location.href = "tel:+911234567890"} // Opens the phone dialer
        >
          Phone: +91 123 456 7890
        </p>
        
        <p
          style={contactInfoStyle}
          onClick={() => window.location.href = "mailto:support@rideease.com"} // Opens default email client
        >
          Email: support@rideease.com
        </p>

        {/* Button with hover effect */}
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
        >
          Submit a Ticket
        </button>
      </div>

      {/* Responsive Styles */}
      <style>
        {`
          @media screen and (max-width: 768px) {
            h1 {
              font-size: 1.5rem;
            }
            .contact-card {
              padding: 20px;
            }
          }
          @media screen and (max-width: 480px) {
            h1 {
              font-size: 1.2rem;
            }
            .contact-card {
              padding: 15px;
            }
            .contact-info {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contactus;
