

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignIn from "./Components/signin_page/SignIn";
// import VerifyOTP from "./Components/VerifyOTP";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/verify" element={<VerifyOTP />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { useRoutes } from "react-router-dom";
import "./App.css";
import { route } from "./Components/routes/Routes";
import { Suspense } from "react";

function App() {
  const routing = useRoutes(route);

  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>{routing}</Suspense>
  </>
  )
}

export default App

