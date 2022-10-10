import "./contact.css";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_thylbsn",
        "template_j6fzmyh",
        formRef.current,
        "w2BwBw01fItpwRBvP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Connect</h1>
          <div className="c-info">
            
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              sharmilas2023@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Bangalore, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> Get in touch...</b> 
           
          </p>
          <form className="connect" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" /><br></br>
            <input  type="text" placeholder="Subject" name="user_subject" /><br></br>
            <input  type="text" placeholder="Email" name="user_email" /><br></br><br></br>
            <textarea rows="5" placeholder="Message" name="message" /><br></br>
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
