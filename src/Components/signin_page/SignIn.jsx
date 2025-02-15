
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./SignIn.css";
import { ROUTE_PATH } from "../routes/Routes";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Function to generate a 6-digit OTP
  const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

  const sendOTP = async () => {
    if (!email) {
      alert("Please enter an email.");
      return;
    }

    const otp = generateOTP();
    localStorage.setItem("otp", otp);
    localStorage.setItem("otpExpiry", Date.now() + 30000); // OTP expires in 30 seconds
    localStorage.setItem("email", email);

    try {
      await emailjs.send(
        "service_bp3yueh",   // Your EmailJS service ID
        "template_4sunkb7",  // Your EmailJS template ID
        {
          to_email: email,  // Match EmailJS template variable
          otp: otp,         // Match OTP variable in EmailJS template
        },
        "6aVLBfuIDz2545CuZ"  // Your EmailJS public key
      );

      alert(`OTP sent to ${email}`);
      setEmail(""); // ✅ Clears input field
      navigate(ROUTE_PATH.OTPVARIFY);

    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Please try again.");
    }
  };

  return (
    <>
    <div className="signin_container">
      <div className="sign_body">
      <div className="sigin_left">
        <p className="signin_heading">Sign In</p>
        <input 
        type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
     className="sign_email" 
     required/>
     <div className="btn">
      <button className="sign_btn"  onClick={sendOTP}>Send Otp</button>
      </div>
      </div>
      <div className="sign_right">
        <p className="signin_right">Web Application with Analytics Dashboard</p>
      </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
