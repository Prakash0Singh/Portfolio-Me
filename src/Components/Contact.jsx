import React from "react";
import '../App.css'
import CONTACT from '../images/contact.png'
const Contact = () => {
  return (
    <>
    <div className="container-fluid back-image-contact">
      <div className="container" id="contact">
        <div className="row con">
          <div className="col-10 mx-auto">
            <h5 className="text-center display-4">Contact Me</h5>
            <div className="row">
            <div className="col-md-6 contact">
                  <img src={CONTACT} alt="SIDE BANNER" className="img-fluid" />
            </div>
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="userName"
                      placeholder="Enter Your Full Name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="useremail"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your E-Mail"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                      Enter Your Message
                    </label>
                    <textarea
                      className="form-control"
                      name="usermessage"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <input type="submit" className="btn btn-primary" value='SUBMIT'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
