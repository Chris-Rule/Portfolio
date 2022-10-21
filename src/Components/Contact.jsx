import { useEffect, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("a random citizen");
  const [email, setEmail] = useState("allright, keep your secrets");
  const [message, setMessage] = useState("Hey, nice website!");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(name, email, message);
  }, [name, email, message]);

  return (
    <div>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            onBlur={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            onBlur={handleEmailChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            onBlur={handleMessageChange}
          ></textarea>
        </div>
      </form>
      <section className="messagePreview">
        <h2>Message Preview</h2>
        <p> You have a message from {name}.</p>
        <p>They just wanted to say:</p>
        <p>{message}</p>
        <p>You can contact them at: {email}</p>
      </section>
      <button type="submit" className="btn btn-primary" form="contact-form">
        Send it!
      </button>
      <p className="siteWarning">
        &#40;Form submission currently inactive&#41;
      </p>
    </div>
  );
};

export default Contact;
