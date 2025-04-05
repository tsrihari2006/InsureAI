import React, { useState } from "react";
import "./Home.css"; // Ensure your styles are linked

const Header = () => {
  return (
    <header className="no-login-button" id="header">
      <div className="headerBlueTop">
        <div className="container">
          <marquee width="100%" direction="left" height="inherit">
            <p>
              <a href="node/16778.html">
                Payment Services will not be available on March 23, 2025.
              </a>
            </p>
          </marquee>
        </div>
      </div>
      <div className="bg-yellow headerBlueTop">
        <div className="container d-flex justify-content-between align-items-center">
          <ul>
            <li>
              <a href="screen-reader-access.html">Screen reader access</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="menuBlock">
      <div className="container-menu">
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        {menuOpen && (
          <ul className="navbar">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/claims">Claims</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <img src="sites/default/files/uploads/banner/motorins-min.png" alt="Banner" className="w-100" />
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <main className="container">
        <h1>Welcome to UIIC</h1>
        <p>Your trusted insurance provider.</p>
      </main>
    </div>
  );
};

export default Home;
