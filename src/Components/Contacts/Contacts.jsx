import "./Contacts.css";
import {FaPhone, FaInstagramSquare} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {useEffect, useState} from "react";

function Contacts() {

  const BOT_TOKEN = '6850361739:AAFxuAKiZJY4sMK6bI9PGu_z09lZQ2RRNgI';
  const API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const TELEGRAM_CHAT_ID = '@HRGN_group';

  const [isLoading, setLoading] = useState(false)
  const [inputs] = useState([
    {
      type:"text",
      id: "name",
      placeholder:"Enter your name",
      required:true,
    },
    {
      type:"email",
      id: "email",
      placeholder:"Enter your email",
      required:true,
    },
    {
      type:"phone",
      id: "phone",
      placeholder:"Enter your phone",
      required:false,
    },
  ])
  const [isResult, setResult] = useState(null)
  const [isError, setError] = useState(null)
  const [form, setForm] = useState({name: null, email: null, phone: null})
  const timeString = new Date().toLocaleString();

  useEffect(() => {
    console.log(form);
  }, [form]);


  const handleStateForm = (e, typeForm) => setForm({
    name: typeForm === "name" ? e.target.value : form.name,
    email: typeForm === "email" ? e.target.value : form.email,
    phone: typeForm === "phone" ? e.target.value : form.phone,
  })

  const sendEmail = async (e) => {
    e.preventDefault();

    const text = `🚀Hey, you have new message!🚀\n👤name: ${form.name}!\n📨email: ${form.email}\n📱phone: ${form.phone}\nCreated on: ${timeString}`;

    try {
      setLoading(true)

      const result = await fetch(API, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          chat_id: TELEGRAM_CHAT_ID,
        })
      })

      const json = await result.json();

      setResult(json)
      console.log(json)
      setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
      setResult(null)
      setError("Fetch server error")
    }
  };


  return (
    <div id="contacts" className="contacts-section">
      <h1 className="title-contacts">CONTACTS</h1>
      <p className="h2-title">
        We are one-message away from the new start. Let s bring your ideas to life!
      </p>
      <div className="container-contacts">
        <div className="contacts">
          <h3>Get in touch</h3>
          <div className="contacts-item">
            <div className="fa-icon">
              <MdEmail/>
            </div>

            <p>production@huragan.info</p>
          </div>
          <div className="contacts-item">
            <div className="fa-icon" >
              <FaInstagramSquare/>
            </div>
            <p>huragan.production</p>
          </div>
          <div className="contacts-item">
            <div className="fa-icon">
              <FaPhone/>
            </div>

            <p>267 746 8462</p>
          </div>
        </div>

        <div className="form">
          <h3>Feel free to ask!</h3>
          {isError && (<div>{isError}</div>)}
          {isResult ? (
            <div>
              <h1>Thank you {form.name}</h1>
            </div>
          ) : (
            <form onSubmit={sendEmail}>
              {inputs.map((inp) => (
                <input
                  key={inp.id}
                  type={inp.type}
                  placeholder={inp.placeholder}
                  className="input"
                  onChange={e => handleStateForm(e, inp.id)}
                  required={inp.required}
                />
              ))}
              <button className="btn" type="submit" >
                <span>{isLoading ? "Sending..." : "Send message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
