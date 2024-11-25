import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";

function ResponsiveNavbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/"); // Redirect to login page
  };

  const handleProfile = () => {
    navigate("/user-profile"); // Navigate to UserProfile component
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/home" className="fw-bold fs-3">
          RideEase
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
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
            <Nav.Link as={Link} to="/help-support">
              Help & Support
            </Nav.Link>
          </Nav>
          <Dropdown align="end" className="ms-3">
            <Dropdown.Toggle
              variant="link" // Use 'link' to make the background transparent
              className="d-flex align-items-center p-0 border-0"
            >
              <i
                className="bi bi-person-circle"
                style={{
                  fontSize: "1.9rem",
                  color: "white",
                }}
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.ItemText className="text-center">
                <small>{username}</small>
              </Dropdown.ItemText>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;
