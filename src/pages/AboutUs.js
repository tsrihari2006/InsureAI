import React from "react";
import Navbar from "../components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";
import { FaRocket, FaLock, FaChartBar, FaBolt, FaBrain, FaClipboardList, FaUsers } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to our <strong>AI-powered Customer Behavior Prediction Platform</strong> for insurance companies.
          Our system utilizes <strong>advanced deep learning models</strong> to analyze customer interactions and predict behavior patterns,
          enabling insurance companies to make data-driven decisions with confidence.
        </p>

        {/* Section: Our Approach */}
        <div className="core-sections-grid">
          <div className="core-card">
            <FaUsers className="feature-icon" />
            <h3>Our Mission</h3>
            <p>
              Empower insurance companies with cutting-edge AI to understand customer tendencies,
              assess risks, and offer personalized solutions.
            </p>
          </div>

          <div className="core-card">
            <FaClipboardList className="feature-icon" />
            <h3>How It Works</h3>
            <ul className="about-list">
              <li>📌 Customers enter details for instant predictions.</li>
              <li>📌 Agents access a dashboard with analytics.</li>
              <li>📌 AI refines predictions continuously.</li>
            </ul>
          </div>

          <div className="core-card">
            <FaBrain className="feature-icon" />
            <h3>Our Technology</h3>
            <p>
              Deep learning algorithms fuel accurate behavior prediction, improving decision-making
              and customer engagement across the board.
            </p>
          </div>
        </div>

        {/* Section: Why Choose Us */}
        <h2 className="about-subtitle">Why Choose Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaRocket className="feature-icon" />
            <h3>AI-Driven Insights</h3>
            <p>Optimize insurance with powerful AI-based behavioral analytics.</p>
          </div>
          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Secure & Compliant</h3>
            <p>Data is securely processed with full compliance.</p>
          </div>
          <div className="feature-card">
            <FaChartBar className="feature-icon" />
            <h3>Data-Driven Analytics</h3>
            <p>Gain actionable insights for better risk assessment.</p>
          </div>
          <div className="feature-card">
            <FaBolt className="feature-icon" />
            <h3>Real-Time Predictions</h3>
            <p>Instant AI predictions for informed decisions.</p>
          </div>
        </div>

        <p className="about-description">
          Join us in transforming the insurance industry with AI-driven customer insights,
          improving efficiency, and enhancing customer satisfaction.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
