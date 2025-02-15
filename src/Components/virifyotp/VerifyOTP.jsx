

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import "./VerifyOTP.css"
import { ROUTE_PATH } from "../routes/Routes";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(30);
  const [resent, setResent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const validateOTP = () => {
    const storedOtp = localStorage.getItem("otp");
    const otpExpiry = parseInt(localStorage.getItem("otpExpiry"), 10);

    if (Date.now() > otpExpiry) {
      alert("OTP expired! Please resend.");
      setOtp(""); // ✅ Clears OTP input field
      return;
    }

    if (otp === storedOtp) {
      alert("OTP Verified! Redirecting...");
      setOtp(""); // ✅ Clears OTP input field
      navigate(ROUTE_PATH.DASHBOARD); // Replace with your dashboard path
    } else {
      alert("Invalid OTP. Try again.");
      setOtp(""); // ✅ Clears OTP input field after wrong attempt
    }
  };

  const resendOTP = async () => {
    const email = localStorage.getItem("email");
    if (!email) {
      alert("No email found. Please restart.");
      return;
    }

    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    localStorage.setItem("otp", newOtp);
    localStorage.setItem("otpExpiry", Date.now() + 30000); // 30 seconds validity

    try {
      await emailjs.send(
        "service_bp3yueh",
        "template_4sunkb7",
        { to_email: email, otp: newOtp },
        "6aVLBfuIDz2545CuZ"
      );
      alert("New OTP sent!");
      setOtp(""); // ✅ Clears OTP input after resending
      setCountdown(30);
      setResent(true);
    } catch (error) {
      console.error("Error resending OTP:", error);
      alert("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <>
    <div className="varifyotp_container">
      <div className="varify_main_body">
      <div className="varify_left">
        <p className="varify_heading">Enter Otp sent to Email</p>
        <div className="varify_left_body">
        <input 
           type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
        className="varify_otp" />

        <div className="varify_flex">
          <div className="varify_flex_left">
            {countdown === 0 && !resent && (
        <p className="resendotp" onClick={resendOTP}>resend otp</p>
      )}
          </div>

          <div className="varify_flex_right">
            <p className="otp_countimg">
              0:{countdown} sec
            </p>
          </div>
        </div>
        <div className="varify_button">
          <button className="varify_btn" onClick={validateOTP}>Validate</button>
        </div>
        </div>
      </div>
      <div className="varify_right">
        <p className="varify_p">Web Application with Analytics Dashboard</p>
      </div>
      </div>
    </div>
    </>
  );
};

export default VerifyOTP;
