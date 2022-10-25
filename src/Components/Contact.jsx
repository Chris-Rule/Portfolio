import "./Contact.css";
import GithubIcon from "../Icons/GithubIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
const Contact = () => {
  return (
    <div className="contact-page">
      <section className="social-links">
        <GithubIcon />
        <h2>Contact Form</h2>
        <LinkedInIcon />
      </section>
      <form
        name="contact v2"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit="submit"
        className="contact-panel"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div hidden>
          <input name="bot-field" />
        </div>

        <div>
          <label>
            Input &gt; Name
            <input type="text" name="first-name" />
          </label>
        </div>

        <div>
          <label>
            Input &gt; Email
            <input type="email" name="email" />
          </label>
        </div>

        <div>
          <label>
            Input &gt; Message
            <textarea type="message" name="message" rows="5"></textarea>
          </label>
        </div>
        <div className="button-container">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
