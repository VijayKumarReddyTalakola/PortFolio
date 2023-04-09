import React,{useRef} from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDiscord, FaInstagram, FaFacebook, FaGithub, FaLinkedin,FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_9inzcz7","template_lg8ahdf",formRef.current,"_8hE7B_7PzOSTxPxm")
        .then((result) => {  
            console.log(result.text); 
            toast.success('Email Sent '); 
            e.target.reset();
        },(error) => {
          console.log(error.text);
        }
        );
    };
    return (
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contact Me</h1>
          <p>Let's Keep in Touch</p>
        </div>
        <div className="contact-parent" id="contact">
          <div className="contact-details">
            <span className="primary-text">
              <span className="highlighted-text">Get in Touch </span>
            </span>
            <div className="colz">
              <div className="colz-icon">
                <a
                  href="https://www.facebook.com/vijaykumarreddy.talakola.3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/vijay_talakola/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://github.com/VijayKumarReddyTalakola"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/talakola-vijay-kumar-reddy-1b5028231/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://discord.com/channels/@me"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>
            <div className="contact-address">
              <div className="contact-info">
              <FaPhoneAlt/><span>+919515643851</span>
              </div>
              <div className="contact-info">
              <FaEnvelope/><span>talakolavijaykumar@gmail.com</span>
              </div>
              <div className="contact-info">
              <FaMapMarkerAlt/><span>4-126 , Mallavaram , Guntur , Andhra Pradesh , India - 522005</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" required placeholder="Name" name="user_name" />
              <input
                type="email"
                required
                placeholder="Email"
                name="user_email"
              />
              <textarea
                rows="4"
                required
                placeholder="Message"
                name="message"
              />
              <br />
              <button>Send</button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;
