import React from "react";
import "./css/About.css"; // Keep your custom CSS if needed
import { Card, Container, Row, Col } from "react-bootstrap"; // Import necessary Bootstrap components
import photo from "../images/PHOTO.jpg";

export default function About() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">About Me</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={photo} alt="Your Image" />
            <Card.Body>
              <Card.Title>Eric Lorback</Card.Title>
              <Card.Text>
                College Graduate from <br />
                California State University, Northridge (CSUN)
                <br />
                <br /> B.S. in Computer Science Cal State, Northridge - Dec 2023
                <br />
                <br />
                Certifications:
                <br />
                <br />
                Responsive Web Design - Sept 4, 2024
                <br />
                Front End Framework Libraries - Sept 20, 2024
                <br />
                Back End Development and API's - Oct 9, 2024
                <br />
                Foundational C# - Sept 27, 2024
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Background</Card.Title>
              <Card.Text>
                As a passionate Full Stack Developer based in Los Angeles, I
                possess a strong foundation in crafting scalable web
                applications and social media platforms.
                <br />
                My experience includes:
                <br />
                <br /> Bookwyrm
                <ul>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>Java-SpringBoot</li>
                  <li>OpenLibrary API</li>
                  <li>RESTful APIs</li>
                </ul>
                SquadSeek
                <ul>
                  <li>React</li>
                  <li>Express</li>
                  <li>Node</li>
                  <li>MongoDB</li>
                  <li>RESTful APIs</li>
                </ul>
                Proficient in a robust array of technologies—including
                JavaScript, Python, SQL, MySQL, NoSQL, and various frameworks—I
                am committed to continuous learning and innovation in software
                development, always striving to translate complex requirements
                into accessible, efficient solutions.
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Body>
              <Card.Title>My Interests</Card.Title>
              <Card.Text>Outside of my </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
