import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">🚗 InsurAI</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register')}>Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Transform Your Vehicle Insurance Experience with AI</h1>
        <p>Our intelligent platform assesses risk, recommends policies, and streamlines the process.</p>
        <button className="cta-button" onClick={() => navigate('/register')}>Get Started →</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>For Customers</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Check Eligibility</h3>
            <p>Instantly find out if you qualify for vehicle insurance.</p>
          </div>
          <div className="feature-card">
            <h3>Get Your Risk Score</h3>
            <p>Our AI analyzes your profile for a personalized risk assessment.</p>
          </div>
          <div className="feature-card">
            <h3>AI Policy Recommendations</h3>
            <p>Receive tailored policy suggestions based on your risk profile.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 InsurAI. All rights reserved. <a href="#">Privacy Policy</a></p>
      </footer>
    </div>
  );
};

export default HomePage;
