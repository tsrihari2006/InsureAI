require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Log environment variables to debug
console.log("Loaded ENV Variables:");
console.log("EMAIL:", process.env.EMAIL);
console.log("EMAIL_PASSWORD:", process.env.EMAIL_PASSWORD ? "Loaded ✅" : "Not Loaded ❌");
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "Loaded ✅" : "Not Loaded ❌");

// ✅ Ensure required environment variables are present
if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD || !process.env.JWT_SECRET) {
    console.error("❌ Missing required environment variables!");
    process.exit(1);
}

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/insuranceDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ User Schema
const UserSchema = new mongoose.Schema({
    fullName: String,
    email: { type: String, unique: true, required: true },
    password: String,
    role: { type: String, enum: ["customer", "agent"], default: "customer" },
    otp: String,
    otpExpiry: Date,
});

const User = mongoose.model("User", UserSchema);

// ✅ Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false, // ✅ Fixes potential SSL/TLS issues
    },
});

// ✅ Verify Nodemailer setup
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Nodemailer setup error:", error);
    } else {
        console.log("✅ Nodemailer ready to send emails");
    }
});

// ✅ Generate OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// ✅ JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET;

// ✅ User Signup
app.post("/signup", async (req, res) => {
    try {
        const { fullName, email, password, role } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, password: hashedPassword, role });
        await newUser.save();

        res.status(201).json({ message: "Signup successful! You can log in now." });
    } catch (error) {
        console.error("❌ Signup Error:", error);
        res.status(500).json({ error: "Server error during signup" });
    }
});

// ✅ User Login (Sends OTP)
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ error: "User not found" });
        if (!await bcrypt.compare(password, user.password)) return res.status(400).json({ error: "Invalid password" });

        const otp = generateOTP();
        user.otp = otp;
        user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
        await user.save();

        // ✅ Send OTP with improved email format
        await transporter.sendMail({
            from: `"InsurAI" <${process.env.EMAIL}>`,
            replyTo: process.env.EMAIL, // ✅ Ensures replies go to your email
            to: user.email,
            subject: "Your OTP Code",
            text: `Your OTP code is: ${otp}\n\nThis OTP is valid for 10 minutes.\n\nIf you didn't request this, please ignore.`,
            html: `<p>Your OTP code is: <strong>${otp}</strong></p>
                   <p>This OTP is valid for <strong>10 minutes</strong>.</p>
                   <p>If you didn't request this, please ignore.</p>
                   <p>Regards, <br> InsurAI</p>`,
        });

        res.json({ message: "OTP sent to your email" });
    } catch (error) {
        console.error("❌ Login Error:", error);
        res.status(500).json({ error: "Server error during login" });
    }
});

// ✅ Verify OTP and Generate Token
app.post("/verify-otp", async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email });

        if (!user || user.otp !== otp || new Date() > user.otpExpiry) {
            return res.status(400).json({ error: "Invalid or expired OTP" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

        user.otp = null;
        user.otpExpiry = null;
        await user.save();

        res.json({ message: "Login successful!", token });
    } catch (error) {
        console.error("❌ OTP Verification Error:", error);
        res.status(500).json({ error: "Server error during OTP verification" });
    }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
