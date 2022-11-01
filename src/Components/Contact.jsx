import React from "react";
import '../App.css'
import CONTACT from '../images/contact.png'
const Contact = () => {
  return (
    <>
    <div className="container-fluid ">
        <div className="container mb-3 mt-3" id="contact">
        <div className="row">
       
      <div className="form-box">
      <h1 className="display-4 text-center contact-heading">Contact Us</h1>
      <img src={CONTACT} className="img-fluid-2 contact-img" alt="contact-us" />

      <form action="https://formsubmit.co/d1c6012d19ef63b27156f9fec97fc328" method="POST">
          <div className="form-group">
            <input className="form-control user-input" id="name" type="text" name="name" placeholder="Name" required/>
          </div>
          <div className="form-group">
            <input className="form-control user-input" id="email" type="email" name="email" placeholder="E-mail" required/>
          </div>
          <div className="form-group">
            <textarea className="form-control user-input" id="message" name="message" placeholder="Message..🖊" required></textarea>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
