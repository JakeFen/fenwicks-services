import React from "react";

function ContactForm() {
  return (
    <div>
      <form>
        <input type="text" name="fullname" placeholder="Your Name"></input>
        <input type="text" name="email" placeholder="Your Email"></input>
        <select>
          <option value="landscaping">Landscaping</option>
          <option value="house-care">House Care</option>
          <option value="snow-removal">Snow Removal</option>
          <option value="Other">Other</option>
        </select>
        <textarea>Hello there, this is some text in a text area</textarea>
        <input type="submit" value="Submit" className="link-button"/>
      </form>
    </div>
  );
}

export default ContactForm;
