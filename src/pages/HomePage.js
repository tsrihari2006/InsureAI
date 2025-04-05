import React from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../components/layout/Navbar";// Use Link for navigation
import "../styles/Home.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div>
      {/* Breaking News Ticker */}
      <div className="news-container">
        <div className="news-content">
          🔥 Breaking News:Customer behavior trends are shifting! Stay updated with the latest insights for smarter insurance decisions.🚀
        </div>
      </div>

      {/* Header Section */}
      <header className="header">
        <h1>InsurAI</h1>
        <p>Predict Your Insurance by AI</p>
        <div className="auth-buttons">
          <Link to="/login"><button className="login-btn">Login</button></Link>
          <Link to="/signup"><button className="signup-btn">Signup</button></Link>
        </div>
      </header>

      {/* Navigation Menu */}
      <Navbar/>

      {/* Bootstrap Carousel */}
      <div id="insuranceCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.britannica.com/70/245970-050-D1417D86/Life-insurance-text-from-wooden-blocks.jpg"
                className="d-block w-100 carousel-img" alt="Insurance 2" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIIHK1sCtw_WjphnVZTkAVKfGfD5xQPfBQI4SRNiG1g4P5WW4LEmq8UoKHlKaGV2FVQU&usqp=CAU"
                className="d-block w-100 carousel-img" alt="Insurance 2" />
          </div>
          <div className="carousel-item">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/5/CL/GW/GP/9653610/vehicle-insurance.png"
                className="d-block w-100 carousel-img" alt="Insurance 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#insuranceCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#insuranceCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Other sections remain the same */}
      <section className="class1">
        <div className="class2">
          <h2>
            Vehicle Insurance
          </h2>
          <div>
             <p>Vehicle insurance isn’t just an expense—it’s your shield against unexpected accidents, protecting both you and others on the road. A single mishap can drain your savings, but the right coverage ensures peace of mind and financial security. Drive with confidence, knowing you're protected no matter what comes your way! 🚗💙
           </p>
          </div>
        </div>
        <div className="class2">
          <h2>
            Life Insurance
          </h2>
          <div>
             <p>Life insurance provides financial security for your loved ones, ensuring they are protected even in your absence. It helps cover expenses like loans, education, and daily needs, preventing financial hardship. With the right policy, you can create a safety net for your family's future. Investing in life insurance today gives peace of mind and long-term stability. 💙🛡️
           </p>
          </div>
        </div>
        <div className="class2">
          <h2>
            Health Insurance
          </h2>
          <div>
             <p>Health insurance is essential for protecting yourself from high medical costs and ensuring timely treatment without financial stress. It covers hospitalization, surgeries, and emergency care, giving you peace of mind in uncertain times. With rising healthcare expenses, having a good policy safeguards your savings and ensures access to quality care. Investing in health insurance today secures a healthier and worry-free future for you and your family. 💙🏥
           </p>
          </div>
        </div>

      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="tagline">Transform Your Insurance by AI</div>
      </section>

      {/* Services Section */}
     

<section className="services" id="services">
  <h2>Insurance Prediction</h2>
  <div className="service-list">
 
    <Link to="/vehicle-insurance" className="service">
    <h3>Vehicle Insurance</h3>
    </Link>
    <Link to="/life-insurance" className="service">
      <h3>Life Insurance</h3>
    </Link>
    <Link to="/health-insurance" className="service">
      <h3>Health Insurance</h3>
    </Link>
  </div>
</section>
{/* About Us Section */}
<section className="about" id="about">
        <h2>About Us</h2>
        <p>
        "We are revolutionizing insurance with AI-powered predictive analytics. Our deep learning-based system helps insurance companies understand customer behavior, personalize offerings, and improve retention with real-time insights."
        </p>
        <Link to="/about" className="btn">Know More</Link>
      </section>



{/* Footer Section */}
      <footer className="footer">
        <div className="contact">
          <p>Call: 9014018810</p>
          <p>WhatsApp Available</p>
          <p>Email: <a href="mailto:naveennagati881@gmail.com">naveennagati881@gmail.com</a></p>
          <p>Address: Telangana, Suryapet, Chilukur, Bethavolue</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
