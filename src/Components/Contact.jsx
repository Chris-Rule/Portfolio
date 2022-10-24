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
          <label htmlFor="name"> Name</label>
          <input type="text" name="first-name" id="name" />
        </div>

        <div>
          <label htmlFor="email"> Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="message"> Message</label>
          <textarea type="message" name="message" id="message" />
        </div>

        <button type="submit">Submit the results</button>
      </form>
    </div>
  );
};

export default Contact;
