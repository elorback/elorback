import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button } from "react-bootstrap";
import "./css/Contact.css";

export default function Contact() {
  const [formState, setFormState] = useState({
    from_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const clearForm = () => {
    setFormState({
      from_name: "",
      user_email: "",
      message: "",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bb27l6e", // your EmailJS service ID
        "template_918f826", // your EmailJS template ID
        e.target,
        "eVQqGRRB_dy8imDVs" // your EmailJS user ID / public key
      )
      .then((result) => {
        console.log(`Email sent: ${result.text}`);
        clearForm();
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.log(`Could not send email: ${error.text}`);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="example@example.com"
            value={formState.user_email}
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
            value={formState.from_name}
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
            value={formState.message}
            rows={4}
            required
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">Send Email</Button>
      </Form>
    </div>
  );
}
