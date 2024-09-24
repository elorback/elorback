import React from "react";
import "./css/About.css"; // Keep your custom CSS if needed
import { Card, Container, Row, Col } from "react-bootstrap"; // Import necessary Bootstrap components
import photo from '../images/IMG_7217.jpg';

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
                Recent College Graduate from <br />California State University, Northridge
                <br />
                <br />
                Certifications:
                <br />
                <br />
                Responsive Web Design - Sept 4, 2024<br />
                Front End Framework Libraries - Sept 20, 2024
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Biography</Card.Title>
              <Card.Text>
                As a passionate Full Stack Developer based in Los Angeles, I possess a strong foundation in crafting scalable web applications and social media platforms. My experience includes developing Bookwyrm, a fully responsive application using React, Bootstrap, and Java-SpringBoot, where I implemented efficient features such as the OpenLibrary API to enhance user engagement. Additionally, my work on SquadSeek at California State University involved the creation of a social media application utilizing RESTful APIs, Node.js, and MongoDB, showcasing my ability to deliver intuitive user experiences. Proficient in a robust array of technologies—including JavaScript, Python, SQL, NoSQL, and various frameworks—I am committed to continuous learning and innovation in software development, always striving to translate complex requirements into accessible, efficient solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
