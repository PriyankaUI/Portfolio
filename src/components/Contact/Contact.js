import React, { useState } from "react";
import "./Contact.css";
import Form from "./Form";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Address from "./Address";
import FormSuccess from "./FormSuccess";
import ParticleBackground from "../../ParticleBackground";
import { Bubblesbackground } from "../../Bubblesbackground";
function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div className="contact-page">
      <h3 className="pb-4 mt-2 heading text-center">Connect with me</h3>
      <div className="  contact-div">
        <div className="row mx-auto">
          <div className="col-md-6 col-sm-12 p-0">
            <Address />
          </div>
          <div className="col-md-6 col-sm-12 p-0">
            {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
          </div>
        </div>
      </div>
    </div>
    <Bubblesbackground/>
    <ParticleBackground/>
    </>
  );
}

export default Contact;
