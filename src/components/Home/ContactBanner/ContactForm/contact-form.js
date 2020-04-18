import React from "react";

function ContactForm() {
  return (
    <div className="contact-container">
      <h2 className="questions-header text-center">
        Have <span className="header-green">Questions?</span>
      </h2>
      <form>
        <div className="contact-form-flex">
          <div className="contact-form-info">
            <input
              type="text"
              name="fullname"
              placeholder="Name"
              className="contact-input"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="contact-input"
            ></input>
            <select className="contact-input">
              <option value="landscaping">Landscaping</option>
              <option value="house-care">House Care</option>
              <option value="snow-removal">Snow Removal</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="contact-form-message">
            <textarea row="10" className="contact-input" placeholder="Message"></textarea>
          </div>
        </div>

        <input type="submit" value="Submit" className="link-button-green contact-submit" />
      </form>
    </div>
  );
}

export default ContactForm;
