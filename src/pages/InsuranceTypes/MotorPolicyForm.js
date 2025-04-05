import React, { useState } from "react";

import "../../styles/MotorPolicyForm.css";
import Navbar from "../../components/layout/Navbar";



const MotorPolicyForm = () => {
  const [formData, setFormData] = useState({
    vehicleClass: "",
    registrationState: "",
    manufacturer: "",
    model: "",
    fuelType: "",
    makeYear: "2025",
    makeMonth: "January",
    rtoName: "",
    dateOfRegistration: "",
    idv: "",
    newVehiclePolicy: false,
    otherInsurerRenewal: false,
    twoWheeler: false,
    privateCar: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="header">Motor Policy</div>

        <div className="options-container">
          <div
            className={`option-box ${formData.newVehiclePolicy ? "selected" : ""}`}
            onClick={() => setFormData({ ...formData, newVehiclePolicy: !formData.newVehiclePolicy })}
          >
            🚗 New Vehicle Policy
          </div>
          <div
            className={`option-box ${formData.otherInsurerRenewal ? "selected" : ""}`}
            onClick={() => setFormData({ ...formData, otherInsurerRenewal: !formData.otherInsurerRenewal })}
          >
            🔄 Other Insurer Renewal
          </div>
        </div>

        <div className="form-content">
          <div className="input-box">
            <label>Registration State *</label>
            <select name="registrationState" value={formData.registrationState} onChange={handleChange}>
              <option value="">Select an Option</option>
              <option value="State 1">State 1</option>
              <option value="State 2">State 2</option>
            </select>
          </div>

          <div className="input-box">
            <label>Manufacturer *</label>
            <select name="manufacturer" value={formData.manufacturer} onChange={handleChange}>
              <option value="">Select an Option</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
            </select>
          </div>

          <div className="input-box">
            <label>Model *</label>
            <select name="model" value={formData.model} onChange={handleChange}>
              <option value="">Select an Option</option>
              <option value="Model A">Model A</option>
              <option value="Model B">Model B</option>
            </select>
          </div>

          <div className="input-box">
            <label>Fuel Type *</label>
            <select name="fuelType" value={formData.fuelType} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
            </select>
          </div>

          <div className="input-box">
            <label>Make Year *</label>
            <input type="text" value="2025" readOnly />
          </div>

          <div className="input-box">
            <label>Make Month *</label>
            <select name="makeMonth" value={formData.makeMonth} onChange={handleChange}>
              <option value="January">January</option>
              <option value="February">February</option>
            </select>
          </div>

          <div className="input-box">
            <label>RTO Name *</label>
            <select name="rtoName" value={formData.rtoName} onChange={handleChange}>
              <option value="">Select an Option</option>
              <option value="RTO 1">RTO 1</option>
              <option value="RTO 2">RTO 2</option>
            </select>
          </div>

          <div className="input-box">
            <label>Date of Registration *</label>
            <input type="date" name="dateOfRegistration" value={formData.dateOfRegistration} onChange={handleChange} />
          </div>

          <div className="input-box">
            <label>IDV *</label>
            <input type="text" name="idv" value={formData.idv} onChange={handleChange} />
          </div>
        </div>

        <div className="options-container">
          <div
            className={`option-box ${formData.twoWheeler ? "selected" : ""}`}
            onClick={() => setFormData({ ...formData, twoWheeler: !formData.twoWheeler })}
          >
            🏍️ Two Wheeler
          </div>
          <div
            className={`option-box ${formData.privateCar ? "selected" : ""}`}
            onClick={() => setFormData({ ...formData, privateCar: !formData.privateCar })}
          >
            🚗 Private Car
          </div>
        </div>

        <div className="action-buttons">
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default MotorPolicyForm;
