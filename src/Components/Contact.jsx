import React from "react";
import '../App.css'
import CONTACT from '../images/contact.png'
const Contact = () => {
  return (
    <>
    <div className="container-fluid ">
        <div className="container" id="contact">
        <div className="row">
       
      <div className="form-box">
      <h1 className="display-4 text-center contact-heading">Contact Us</h1>
      <img src={CONTACT} className="img-fluid contact-img" alt="contact-us" />

      <form action="https://formsubmit.co/d1c6012d19ef63b27156f9fec97fc328" method="POST">
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input className="form-control" id="name" type="text" name="name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input className="form-control" id="email" type="email" name="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea className="form-control" id="message" name="message"></textarea>
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
