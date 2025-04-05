import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import HomePage from "./pages/HomePage";   
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs"; // ChatBox is used inside this
import Services from "./pages/Services"; 

import NotFoundPage from "./pages/NotFoundPage"; 
// Insurance Pages
import HealthInsurance from "./pages/InsuranceTypes/HealthInsurance";
import VehicleInsurance from "./pages/InsuranceTypes/VehicleInsurance";
import LifeInsurance from "./pages/InsuranceTypes/LifeInsurance";
import MotorPolicyForm from "./pages/InsuranceTypes/MotorPolicyForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} /> {/* ChatBox is inside ContactUs.js */}
        <Route path="/services" element={<Services />} />

        {/* Insurance Routes */}
        <Route path="/health-insurance" element={<HealthInsurance />} />
        <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
        <Route path="/life-insurance" element={<LifeInsurance />} />
        <Route path="/vehicle-insurance/motorpolicyform" element={<MotorPolicyForm />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
