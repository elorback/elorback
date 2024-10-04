import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button, Form, Container } from "react-bootstrap";

export default function Contact() {
  const [formState, setFormState] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bb27l6e",
        "template_918f826",
        e.target,
        "eVQqGRRB_dy8imDVs"
      )
      .then((result) => {
        console.log(`Email sent: ${result.text}`);
      })
      .catch((result) => {
        console.log(`Could not send email: ${result.text}`);
      });

  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
const clearForm = () =>{
  setFormState({
    from_name: "",
    user_email: "",
    message: "",
  }
    
    );
};
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Contact Me</h1>
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="example@example.com"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            type="text"
            name="from_name"
            placeholder="First and Last name"
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Enter your message here..."
            rows={4}
            required
            onChange={handleChange}
          />
        </Form.Group>
        <Button onClick={clearForm()} type="submit" variant="primary">
          Send Email
        </Button>
      </Form>
    </Container>
  );
}
