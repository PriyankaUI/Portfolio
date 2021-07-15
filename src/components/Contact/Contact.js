import React from "react";
import "./Contact.css";
import Form from "./Form";

function Contact() {
  return (
    <div className="contact-page">
      <h3 className="pb-4 heading text-center">Connect with me</h3>
      <div className="row mx-auto">
        <div className="col-md-4 col-sm-12 ">
          <div className="contact_image"></div>
        </div>
        <div className="col-md-4 col-sm-2  ">
         <Form/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
