import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [otpSent, setOtpSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setOtpSent(true); // Show OTP input field
                alert("OTP sent to your email.");
            } else {
                setError(data.error || "Invalid credentials");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:5000/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: formData.email, otp }),
            });

            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token);
                alert("Login successful!");
                navigate("/dashboard");
            } else {
                setError(data.error || "Invalid OTP");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-form">
                    <h2>Login</h2>
                    {error && <p className="error-message">{error}</p>}
                    {!otpSent ? (
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label>Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handleOtpSubmit}>
                            <div className="input-group">
                                <label>Enter OTP</label>
                                <input type="text" value={otp} onChange={handleOtpChange} required />
                            </div>
                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? "Verifying..." : "Verify OTP"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
