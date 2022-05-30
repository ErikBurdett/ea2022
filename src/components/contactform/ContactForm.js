import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import "../../components/contactform/ContactForm.css"

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://ea-node.herokuapp.com/api/contact", {
      mode: 'cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
  <MDBContainer>
    <MDBRow>
      <MDBCol md="6">
    <form className="contact-container mb-5"  onSubmit={handleSubmit}>
      <div className="mt-4">
        <label className="m-2" htmlFor="name">Name:</label>
        <input className="m-2" type="text" id="name" required />
      </div>
      <div className="mt-1">
        <label className="m-2" htmlFor="email">Email:</label>
        <input className="m-2" type="email" id="email" required />
      </div>
      <div className="mt-1">
        <label className="m-2" htmlFor="message">Message:</label>
        <textarea className="form-control mb-4" rows="3" type="text" id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default ContactForm;