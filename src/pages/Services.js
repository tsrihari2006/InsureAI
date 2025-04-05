import React from "react";
import Navbar from "../components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
        <h1>Government Policies</h1>
        <p>
          Welcome to our insurance platform. We offer a variety of insurance 
          plans tailored to meet your needs and secure your future.
        </p>
      </div>
    </>
  );
};

export default Services;
