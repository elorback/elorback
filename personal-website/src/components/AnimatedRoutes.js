// components/AnimatedRoutes.js
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [fadeClass, setFadeClass] = useState("fade-enter");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setFadeClass("fade-exit");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    let timeout;
    if (fadeClass === "fade-exit") {
      timeout = setTimeout(() => {
        setDisplayLocation(location);
        setFadeClass("fade-enter");
      }, 500);
    } else if (fadeClass === "fade-enter") {
      timeout = setTimeout(() => {
        setFadeClass("");
      }, 500);
    }
    return () => clearTimeout(timeout);
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

export default AnimatedRoutes;
