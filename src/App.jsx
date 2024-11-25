import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types"; // Import PropTypes for validation
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
/>


// import Navbar from "./components/Navbar";

// import HomePage from "./pages/HomePage";
import RideBooking from "./pages/RideBooking";
import RideTracking from "./pages/RideTracking";
import Payment from "./pages/Payment";
import Notifications from "./pages/Notifications";
import HelpSupport from "./pages/HelpSupport";
import UserProfile from "./pages/UserProfile";
import LoginForm from "./components/Login";
import SignupForm from "./components/Signupform";
import HomePage from "./pages/Home";
import ResponsiveNavbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
           
                <ResponsiveNavbar/>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ride-booking"
            element={
              <ProtectedRoute>
                     <ResponsiveNavbar/>
                <RideBooking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ride-tracking"
            element={
              <ProtectedRoute>
                 <ResponsiveNavbar/>
                <RideTracking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoute>
                      <ResponsiveNavbar/>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                   <ResponsiveNavbar/>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help-support"
            element={
              <ProtectedRoute>
                    <ResponsiveNavbar/>
                <HelpSupport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-profile"
            element={
              <ProtectedRoute>
                    <ResponsiveNavbar/>
                <UserProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

// Protected Route to prevent unauthorized access
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem("username");
  return isAuthenticated ? children : <Navigate to="/" />;
}

// PropType validation for ProtectedRoute
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
