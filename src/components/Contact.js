import React from "react";
import Button from "./Button";
import '../css/Contact.css'

function Contact() {
  return (
    <div className="contact-page">
    <h3 className="mb-3 heading text-center">Connect with me</h3>
    <div className="contact-form ">
    
    <form>
        <div className="mb-3">
          <input type="text" className="form-control" id="" placeholder ="Name"/>
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" id=""  placeholder ="Phone No"/>
        </div>
        <div className="mb-3">
         
          <input type="email" className="form-control" id="" placeholder ="Email address" />
        </div>
        <div class="mb-3">
          <textarea className="form-control" id="" rows="3"  placeholder ="Write Something"/>
        </div>

        <Button text="Submit" />
      </form>
    </div>
      
    </div>
  );
}

export default Contact;
