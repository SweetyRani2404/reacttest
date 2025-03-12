import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard"; 

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-black p-4 flex justify-center gap-6 items-center">
          <Link to="/" className="text-white text-lg font-semibold">Home</Link>
          <div className="h-6 w-px bg-gray-400"></div>
          <Link to="/dashboard" className="text-white text-lg font-semibold">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;