import React from "react";
import { Link } from "react-router-dom";
//import carInsuranceImage from "../../assets/car-insurance.jpg"; // Ensure you have an image in the assets folder
//import safeDrivingImage from "../../assets/safe-driving.jpg"; // Another image for illustration
//import "../../styles/VehicleInsurance.css"; // Assuming you have a CSS file for styling
//import Navbar from "../../components/layout/Navbar";
const VehicleInsurance = () => {
  return (
    
    <div className="vehicle-insurance-container">
      <h1>Vehicle Insurance</h1>
      <p>
        Welcome to the Vehicle Insurance page. Here, you can explore different insurance plans
        to protect your vehicle from accidents, theft, and unexpected damages.
      </p>

      

      <h2>Why is Vehicle Insurance Important?</h2>
      <ul>
        <li>Protects you financially in case of accidents.</li>
        <li>Covers damage caused by natural disasters or theft.</li>
        <li>Ensures legal compliance as most countries require vehicle insurance.</li>
        <li>Provides peace of mind while driving.</li>
      </ul>

      <Link to="/vehicle-insurance/motorpolicyform" >
        now start to apply
      </Link>
    </div>
  );
};

export default VehicleInsurance;
