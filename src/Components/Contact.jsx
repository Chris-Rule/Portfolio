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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    console.log(name, email, message);
  }, [name, email, message]);

  return (
    <div className="contactPage">
      <section className="contactPanel">
        <form
          name="contact-form"
          id="contact-form"
          className="style-panel"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Input &gt; Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              onBlur={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Input &gt; E-mail</label>
            <input
              name="email"
              type="email"
              className="form-control"
              onBlur={handleEmailChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Input &gt; Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="10"
              onBlur={handleMessageChange}
            ></textarea>
          </div>
        </form>
        <section className="messagePreview">
          <h3>Output &gt; Preview</h3>
          <p>
            {" "}
            You have a message from <span>{name}</span>.
          </p>
          <p>They just wanted to say:</p>
          <p>{message}</p>
          <p>You can contact them at: {email}</p>
          <button
            name="form-submit"
            type="submit"
            className="btn btn-primary"
            form="contact-form"
          >
            Send it!
          </button>
          <p className="siteWarning">
            &#40;Form submission currently inactive&#41;
          </p>
        </section>
      </section>
    </div>
  );
};

export default Contact;
