import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaFacebookF, FaPhone, FaLocationArrow } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import '../styles/Contact.scss';

class Contact extends Component {
  render() {
    return (
      <div id="contact-page">
        <h1 className="lg-heading">
          Contact<span className="text-secondary">Me</span>
        </h1>
        <div className="boxes">
          <div className="box">
            <a href="tel:+306984377089">
              <FaPhone className="contact-icon" />
              <span className="text-secondary">Phone: </span> +306984377089
            </a>
          </div>
          <div className="box">
            <a href="https://goo.gl/maps/FicBriLJVFn3634k8">
              <FaLocationArrow className="contact-icon" />
              <span className="text-secondary">Location: </span> Amsterdam, NL
            </a>
          </div>
          <div className="box">
            <MdMail className="contact-icon" />
            <a href="mailto:krikonis.chr@gmail.com">
              <span className="text-secondary">Email: </span> krikonis.chr@gmail.com
            </a>
          </div>
          <div className="box">
            <a href="https://www.linkedin.com/in/krikonis-chr/">
              <FaLinkedin className="contact-icon" />
              <span className="text-secondary">LinkedIn: </span>
              linkedin.com/in/krikonis-chr
            </a>
          </div>
          <div className="box">
            <a href="https://github.com/krik-chry/">
              <FaGithub className="contact-icon" />
              <span className="text-secondary">Github: </span>
              krik-chry
            </a>
          </div>
          <div className="box">
            <a href="https://www.facebook.com/xrisostomos.krikonis">
              <FaFacebookF className="contact-icon" />
              <span className="text-secondary">Facebook: </span>
              Xrisostomos Krikonis
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
