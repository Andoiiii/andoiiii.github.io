import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Navbar from "./assets/Navbar";
import Home from "./pages/Home";
import Projects from "./Projects";
import OhNo from "./pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<><Navbar openPage="Home" /><Home /></>} />
          <Route path="/projects" element={<><Navbar openPage="Projects" /><Projects /></>} />
          <Route path="/resume" element={<><Navbar openPage="Resume" /><OhNo /></>} />
          <Route path="/art" element={<><Navbar openPage="Art" /><OhNo /></>} />
          <Route path="/notes" element={<><Navbar openPage="Notes" /><OhNo /></>} />
          <Route path="/contact" element={<><Navbar openPage="Contact" /><OhNo /></>} />
          <Route path="*" element={<><Navbar openPage="Projects" /><OhNo /></>} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();