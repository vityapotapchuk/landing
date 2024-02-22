import "./Contacts.css";
import {FaPhone, FaInstagramSquare} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {useEffect, useState} from "react";

function Contacts() {

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
      required:true,
    },
  ])
  const [isResult, setResult] = useState(null)
  const [isError, setError] = useState(null)

  const [form, setForm] = useState({name: null, email: null, phone: null})

  useEffect(() => {
    console.log(form);
  }, [form]);

  // function validName(name){
  //   if(name.length > 3) {
  //     setError(null)
  //   } else {
  //     setError("No valid name length")
  //   }
  // }

  const handleStateForm = (e, typeForm) => setForm({
    name: typeForm === "name" ? e.target.value: form.name,
    email: typeForm === "email" ? e.target.value : form.email,
    phone: typeForm === "phone" ? e.target.value : form.phone,
  })

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)

      const result = await fetch("https://test.api.stels.app/media/request", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(form)

      })

      const json = await result.json();

      setResult(json)
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
          <h3>Feel free to ask</h3>
          {isError && (<div>{isError}</div>)}
          {isResult ? (
            <div>
              <h1>Thank you {isResult.data.name}</h1>
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
              <button className="btn" type="">
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
