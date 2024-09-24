import React, { useState } from "react";
import "./css/Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

  return (
    <>
      <div className="container">
        <h1>EMAIL FIELD</h1>
        <form className="form" onSubmit={sendEmail}>
          <div className="input-container">
            <label>Email Address:</label>
            <input
              type="email"
              placeholder="example@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Message:</label>
            <textarea
              className="email-message"
              placeholder="Enter your message here..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Send Email</button>
        </form>
      </div>
    </>
  );
}
