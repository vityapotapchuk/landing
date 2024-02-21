import "./Contacts.css";
import { FaPhone, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_6es17kr", "template_bg3q80a", form.current, {
        publicKey: "z3pJNmbhUCFmM_qxA",
      }).then(() => {alert("FORM SUCCESS!");
        }, (error) => {alert("FORM FAILED...", error.text);
      });
    e.target.reset();
  };
  return (
    <div id="contacts" className="contacts-section">
      <h1 className="title-contacts">CONTACTS</h1>
      <p className="h2-title">We are one-message away from the new start. <br/>
      Let's bring your ideas to life!</p>
      <div className="container-contacts">
        <div className="contacts">
          <h3>Get in touch</h3>
          <div className="contacts-item">
            <div className="fa-icon">
              <MdEmail />
            </div>

            <p>production@huragan.info</p>
          </div>
          <div className="contacts-item">
            <div className="fa-icon">
              <FaInstagramSquare />
            </div>
            <p>huragan.production</p>
          </div>
          <div className="contacts-item">
            <div className="fa-icon">
              <FaPhone />
            </div>

            <p>267 746 8462</p>
          </div>
        </div>

        <div className="form">
          <h3>Feel free to ask</h3>
          <form ref={form} onSubmit={sendEmail} action="#" type="submit">
            <input
              type="text"
              name="user_name"
              id=""
              placeholder="Enter your name"
              className="input"
              required
            />
            <input
              type="email"
              name="user_email"
              id=""
              placeholder="Enter your email"
              className="input"
              required
            />
            <input
              type="text"
              name="subject"
              id=""
              placeholder="Subject"
              className="input"
              required
            />
            <textarea
              name="message"
              id=""
              placeholder="Write your text"
              required
            ></textarea>
            <button className="btn"><span>Send message</span></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
