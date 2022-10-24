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
          <label>
            Name
            <input type="text" name="first-name" />
          </label>
        </div>

        <div>
          <label>
            Email
            <input type="email" name="email" />
          </label>
        </div>

        <div>
          <label>
            Message
            <textarea type="message" name="message"></textarea>
          </label>
        </div>

        <button type="submit">Submit the results</button>
      </form>
    </div>
  );
};

export default Contact;
