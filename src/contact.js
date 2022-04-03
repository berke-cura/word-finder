import React, { Component } from "react";
//import ContactForm from "./components/contactForm"
import('./index.css')

class Contact extends Component {
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="grid-container">
          <div className="grid-item item1"><label>NAME<input type="text" name="Name"/></label></div>
          <div className="grid-item item2"><label>EMAIL<input type="text" name="Email"/></label></div>
          <div className="grid-item item3"><label>SUBJECT<input type="text" name="Subject"/></label></div>
          <div className="grid-item item4"><label>MESSAGE<input type="text" name="Message"/></label></div>
          <button type="submit">SEND</button>
        </div>
      </form>
    );
  }
}

export default Contact;