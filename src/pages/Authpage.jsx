// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Navbar from "./components/Navbar"; // Navbar component
// import LoginForm from "./components/Login";
// import SignupForm from "./components/Signupform";
// import HomePage from "./pages/Home";
// import RideBooking from "./pages/RideBooking"; // RideBooking page
// import Notifications from "./pages/Notifications";
// import RideTracking from "./pages/RideTracking";
// import Payment from "./pages/Payment";
// import HelpSupport from "./pages/HelpSupport";

// function App() {
//   return (
//     <Router>
//       <div>
//         <ToastContainer />
//         {/* Include Navbar only on specific routes */}
//         <Routes>
//           {/* This route is for login/signup without Navbar */}
//           <Route path="/" element={<LoginForm />} />
//           <Route path="/signup" element={<SignupForm />} />

//           {/* For other routes, include the Navbar */}
//           <Route
//             path="/*"
//             element={
//               <>
//                 <Navbar /> {/* Global Navbar */}
//                 <Routes>
//                   <Route path="/home" element={<HomePage />} />
//                   <Route path="/ride-booking" element={<RideBooking />} />
//                   <Route path="/ride-tracking" element={<RideTracking />} />
//                   <Route path="/payment" element={<Payment />} />
//                   <Route path="/help-support" element={<HelpSupport />} />
//                   <Route path="/notifications" element={<Notifications />} />
//                 </Routes>
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
