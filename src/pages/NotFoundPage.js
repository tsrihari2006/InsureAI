import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  heading: {
    fontSize: "2rem",
    color: "#dc3545",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontSize: "1.2rem",
  },
};

export default NotFoundPage;
