import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp  } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from 'emailjs-com'




const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_4j4ju8z', 'template_tqact72', form.current, '_YPbQI5x2H9bdew3Y')
 
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};





  return (
  <section id="contact" >
    <h5>Get In Touch</h5>
    <h2>Contact Me </h2>
     
    <div className='container contact__container'>
      <div className='contact__options'>

        <article className='contact__option'>
        < MdOutlineMail  className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>zfadel989@gmail.com</h5>
          <a href='mailto:zfadel989@gmail.com' target="_blank">Send a Message</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+7735435969</h5>
          <a href='https://api.whatsapp.com/send?phone=7735435969' target="_blank">Send a Message</a>
        </article>

        <article className='contact__option'>
          <BsLinkedin className='contact__option-icon'/>
          <h4>linkedin</h4>
          <h5>zaid Fadel</h5>
          <a href='https://www.linkedin.com/in/zaid-fadel-a69a0018b/' target="_blank">Send a Message</a>
        </article>
      </div>



      <form ref={form} onSubmit={sendEmail}>
       <input type="text" name='name'   placeholder='Your Full Name' required />
       <input type="email" name='email'   placeholder='Your Email' required />
       <textarea name='message' rows='7' placeholder='Your Message' required > </textarea>
       <button type='submit' className='btn btn-primary' >Send Message</button>
     
      </form>
       </div>
  </section>
  
  
  )
}

export default Contact
