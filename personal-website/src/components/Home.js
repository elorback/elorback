import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="mt-5 text-center">
      <h1>Welcome to My Personal Website</h1>
      <p className="lead">
        Explore my work, learn more about me, and get in touch!
      </p>
      <Button variant="primary" href="/about" className="me-2">
        About Me
      </Button>
      <Button variant="primary" href="/contact">
        Contact Me
      </Button>
    </Container>
  );
}
