import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

function ResponsiveNavbar() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false); // Track navbar state
  const navbarRef = useRef(null); // Reference to navbar

  // Close the navbar when navigating to a new page
  useEffect(() => {
    setExpanded(false); // Collapse the navbar when the page changes
  }, [navigate]);

  // Close the navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        expanded
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [expanded]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/"); // Redirect to login page
  };

  const handleProfile = () => {
    navigate("/user-profile"); // Navigate to UserProfile component
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="py-3 shadow-sm"
      expanded={expanded} // Control collapse state based on the 'expanded' state
      ref={navbarRef} // Attach ref to navbar
    >
      <Container>
        <Navbar.Brand as={Link} to="/home" className="fw-bold fs-3">
          RideEase
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)} // Toggle the collapse state
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navLinks">
            <Nav.Link as={Link} to="/ride-booking">
              Ride Booking
            </Nav.Link>
            <Nav.Link as={Link} to="/ride-tracking">
              Ride Tracking
            </Nav.Link>
            <Nav.Link as={Link} to="/payment">
              Payment
            </Nav.Link>
            <Nav.Link as={Link} to="/notifications">
              Notifications
            </Nav.Link>
            <Nav.Link
              // Use button to ensure interactivity
              onClick={handleProfile}
              // Ensure the navLink and btn classes are applied
            >
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/help-support">
              Help & Support
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>

            {/* Profile and Logout sections */}
         

            <Nav.Link
              as="button" // Use button to ensure interactivity
              onClick={handleLogout}
              // Ensure the navLink and btn classes are applied
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
