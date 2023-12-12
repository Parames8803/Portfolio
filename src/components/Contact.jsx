import React, { useEffect } from "react";
import AOS from "aos";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { RiWhatsappLine } from "react-icons/ri";
import contactGif from "../assets/gif/contact.gif";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const btnHello = () => {
    window.location.href = "mailto:parameswaran8803@gmail.com";
  };
  return (
    <div className="contact" id="5" data-aos="zoom-in" data-aos-duration="1500">
      <div className="content">
        <div className="title">{"05. Contact/>"}</div>
        <div className="intro">Get in touch</div>
        <div className="desc">
          Seeking collaboration or have a question? I'm all ears! Be it a
          potential project, a brilliant idea, or just a friendly hello, I'm
          excited to hear from you.
        </div>
        <div className="btn">
          <button className="hello" onClick={btnHello}>
            Say hello
          </button>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/parameswaran-eswaran">
            <TiSocialLinkedinCircular />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=9952213571">
            <RiWhatsappLine />
          </a>
        </div>
      </div>
      <div className="gif">
        <img src={contactGif} width={550} height={550}/>
      </div>
    </div>
  );
};

export default Contact;
