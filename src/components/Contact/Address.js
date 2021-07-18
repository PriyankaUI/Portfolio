import React from 'react'
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";

const Address = () => {
    return (
        <>
          <div className="contact-image-div">
              <div className="icon">
                <PhoneAndroidIcon className="contact-icon"/> 7008943631
              </div>
              <div className="icon">
                <EmailIcon className="contact-icon"/> priyanka1997.pradhan@gmail.com
              </div>
              <div className="icon">
                <HomeIcon className="contact-icon"/> Balasore, Odisha
              </div>
              <img src="images/kingdom-848.png" alt="" className="image-contact"/>
            </div>  
        </>
    )
}

export default Address
