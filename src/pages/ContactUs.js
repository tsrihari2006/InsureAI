import React from "react";
import Navbar from "../components/layout/Navbar";
import ChatBox from "../components/ChatBox"; // ChatBox only exists here
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ContactUs.css"; // Ensure this file exists

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        {/* Left Section: Contact Information */}
        <div className="contact-content">
          <h1>Contact Us</h1>
          <p>Welcome to our insurance platform. We provide various insurance plans to help secure your future.</p>

          <div className="contact-info-box">
            <h3>Get in Touch</h3>
            <p><strong>Email:</strong> support@insurance.com</p>
            <p><strong>Twitter:</strong> @InsuranceSecure</p>
            <p><strong>Instagram:</strong> @InsuranceSecure</p>
            <p><strong>Facebook:</strong> facebook.com/InsuranceSecure</p>
          </div>
        </div>

        {/* Right Section: ChatBox */}
        <div className="contact-chatbox">
          <ChatBox userId="customer123" userType="customer" />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
