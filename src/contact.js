import React, { Component } from "react";
//import ContactForm from "./components/contactForm"
import ('./index.css')

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

<div class="grid-container">
  <div class="grid-item item1"><label>NAME<input type="text"  name="Letter Count" /></label></div>
  <div class="grid-item item2"><label>EMAIL<input type="text"  name="Existing Letters" /></label></div>
  <div class="grid-item item3"><label>SUBJECT<input type="text"  name="Not Existing Letters" /></label></div>  
  <div class="grid-item item4"><label>MESSAGE<input type="text"  name="Letter and Place" /></label></div>
  <button type="submit">SEND</button>

</div>
      </form>

    );
  }
}

export default Contact;