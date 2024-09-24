import React, { useState } from "react";
import "./css/Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formState, setFormState] = useState({
    from_name: "",
    email: "",
    message: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
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
  return (
    <>
      <div className="container">
        <h1>EMAIL FIELD</h1>
        <form className="form" onSubmit={sendEmail}>
          <div className="input-container">
            <label>Email Address:</label>
            <input
              type="email"
              name="user_email"
              placeholder="example@example.com"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="name">Full Name:</label>
            <input
              type="text"
              name="from_name"
              placeholder="Jon Doe"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label>Message:</label>
            <textarea
              className="email-message"
              name="message"
              placeholder="Enter your message here..."
              required
              onChange={handleChange}
            />
          </div>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </>
  );
}
