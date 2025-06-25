import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [fadeClass, setFadeClass] = useState("fade-enter");

  // Trigger fade-out when location changes
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setFadeClass("fade-exit");
    }
  }, [location, displayLocation]);

  // After fade-out, change the route and fade in
  useEffect(() => {
    if (fadeClass === "fade-exit") {
      const timeout = setTimeout(() => {
        setDisplayLocation(location); // Switch view after fade out
        setFadeClass("fade-enter"); // Trigger fade in
      }, 500); // Match CSS fade duration
      return () => clearTimeout(timeout);
    }
    if (fadeClass === "fade-enter") {
      const timeout = setTimeout(() => {
        setFadeClass(""); // Cleanup class after fade-in
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [fadeClass, location]);

  return (
    <div className={`fade-container ${fadeClass}`}>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Personal Website by Eric Lorback</h1>
        <NavBar />
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
