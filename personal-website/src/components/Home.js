import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/home.css";

export default function Home() {
  const navigate = useNavigate();
  const [fadeClass, setFadeClass] = useState("fade-enter");
  const [targetRoute, setTargetRoute] = useState(null);

  useEffect(() => {
    if (fadeClass === "fade-exit") {
      const timeout = setTimeout(() => {
        navigate(targetRoute); // navigate after fade out
        setFadeClass("fade-enter"); // fade in next page
      }, 0);
      return () => clearTimeout(timeout);
    }
    if (fadeClass === "fade-enter") {
      const timeout = setTimeout(() => {
        setFadeClass("");
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [fadeClass, navigate, targetRoute]);

  const handleNavigation = (path) => {
    setTargetRoute(path);
    setFadeClass("fade-exit"); // start fade-out
  };

  return (
    <Container className={`mt-5 text-center`}>
      <div className="fade-container">
        <h1>Welcome to My Personal Website</h1>
        <p className="lead">
          Explore my work, learn more about me, and get in touch!
        </p>
        <Button
          variant="primary"
          onClick={() => handleNavigation("/about")}
          className="me-2"
        >
          About Me
        </Button>
        <Button variant="primary" onClick={() => handleNavigation("/contact")}>
          Contact Me
        </Button>
      </div>
    </Container>
  );
}
