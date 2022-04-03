import React, { Component } from "react";
import ContactForm from "./components/contactForm"

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>GOT MESSAGE?</h2>
        <p>You can contact us via contact form.
        </p>
        <ContactForm />
      </div>
    );
  }
}

export default Contact;