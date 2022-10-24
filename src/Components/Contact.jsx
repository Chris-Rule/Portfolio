import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />

        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="first-name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea type="message" name="message" id="message" />
        </div>

        <button type="submit">Submit the results</button>
      </form>
    </div>
  );
};

export default Contact;
