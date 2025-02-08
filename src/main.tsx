import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDom from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./pages/LandingPage.tsx";
import Cart from "./pages/Cart.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  </StrictMode>
);
