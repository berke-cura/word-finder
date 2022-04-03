import React, { Component } from "react";
import axios from "axios";
import Modal from './components/modal';
//import ContactForm from "./components/contactForm"
import('./index.css')

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      show: false,
      isSended: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.click = this.click.bind(this);
  }
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  click = () => {
    const headers = { 'Access-Control-Allow-Origin': '*' }
    var data = {
      service_id: 'service_f15ktbo',
      template_id: 'template_w71x8ay',
      user_id: 'Ddh_OrBYFK4IU7CJc',
      template_params: {
        'name': this.state.name,
        'customer_mail': this.state.mail,
        'subject': this.state.subject,
        'message': this.state.message
      }
    };
    axios.post("https://api.emailjs.com/api/v1.0/email/send", data, headers)
      .then((response) => {
        this.showModal()
      })
      .catch((err) => {
        console.log(err)
      });

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="grid-container">
          <div className="grid-item item1"><label>NAME<input type="text" name="Name" onChange={(e) => this.setState({ name: e.target.value })} /></label></div>
          <div className="grid-item item2"><label>EMAIL<input type="text" name="Email" onChange={(e) => this.setState({ mail: e.target.value })} /></label></div>
          <div className="grid-item item3"><label>SUBJECT<input type="text" name="Subject" onChange={(e) => this.setState({ subject: e.target.value })} /></label></div>
          <div className="grid-item item4"><label>MESSAGE<input type="text" name="Message" onChange={(e) => this.setState({ message: e.target.value })} /></label></div>
          <button type="submit" onClick={this.click}>SEND</button>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>Modal</p>
          </Modal>
        </div>
      </form>
    );
  }
}

export default Contact;