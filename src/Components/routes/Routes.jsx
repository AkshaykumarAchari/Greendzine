import SignIn from "../signin_page/SignIn";
import Navbar from "./nav_and_footer/navbar/Navbar";
import Footer from "./nav_and_footer/footer/Footer";
import VerifyOTP from "../virifyotp/VerifyOTP";
import Dashboard from "../dashboard/Dashboard";
import Navlbar2 from "./nav_and_footer/navbar/Navlbar2";

export const ROUTE_PATH = {
  SIGNIN: "/",
  OTPVARIFY: "/OTP_varify",
  DASHBOARD: "/Dashboard_page",
};

export const route = [
  {
    path: ROUTE_PATH.SIGNIN,
    element: (
     <>
     <Navbar />
     <SignIn/>
     <Footer/>
     </>
    ),
  },
  {
  path: ROUTE_PATH.OTPVARIFY,
  element: (
   <>
      <Navbar />
     <VerifyOTP/>
     <Footer/>
   </>
  ),
},
  {
    path: ROUTE_PATH.DASHBOARD,
    element: (
     <>
         <Navlbar2 />
     <Dashboard/>
     <Footer/>
     </>
    ),
  },
];
