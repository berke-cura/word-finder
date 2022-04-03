import { useState } from "react";
import axios from "axios";
import Modal from "./components/modal";

//import ContactForm from "./components/contactForm"
import('./index.css')

const Contact = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const [isSending, setIsSendig] = useState()
  const [isSended, setIsSended] = useState()
  const [isSubmit, setIsSubmit] = useState()
  
  const click = () =>  {
    var data = {
      service_id: 'service_f15ktbo',
      template_id: 'template_w71x8ay',
      user_id: 'Ddh_OrBYFK4IU7CJc',
      template_params: {
          'name': name,
          'customer_mail': email,
          'subject': subject,
          'message': message
      }
    };
    const headers = {'Content-Type': 'application/json'}
    axios.post("https://api.emailjs.com/api/v1.0/email/send", data, headers)
        .then(() => {
            setIsSubmit(true)
        })
        .catch((err) => {
            console.log(err)
        });
  }


  return (
   
      <div className="grid-container">
        <div className="grid-item item1"><label>NAME<input type="text" name="Name" onChange={(e) => setName(e.target.value)}/></label></div>
        <div className="grid-item item2"><label>EMAIL<input type="text" name="Email" onChange={(e) => setEmail(e.target.value)}/></label></div>
        <div className="grid-item item3"><label>SUBJECT<input type="text" name="Subject" onChange={(e) => setSubject(e.target.value)}/></label></div>
        <div className="grid-item item4"><label>MESSAGE<input type="text" name="Message" onChange={(e) => setMessage(e.target.value)}/></label></div>
        <button type="submit" onClick={click} >SEND</button>
        <Modal show={isSubmit} hide={setIsSubmit}></Modal>
      </div>

  );
}

export default Contact;