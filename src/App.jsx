import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CompAnalysis from "./Components/CompAnalysis";

export default function HomePage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<CompAnalysis />} />
      </Routes>
    </Router>
  );
}
