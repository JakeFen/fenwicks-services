import React from "react";
import Input from "../../../Input/input";
import SelectField from "../../../SelectField/selectField";
import Button from "../../../Button/button";

function ContactForm(props) {
  return (
    <div className="contact-container">
      <h3 className="questions-header text-center">
        Have <span className="header-green">Questions?</span>
      </h3>
      <form>
        <div className="contact-form-flex">
          <div className="contact-form-info">
            <Input
              name="home-fullname"
              type="text"
              placeholder="Name"
              className="contact-input"
              required
            />
            <Input
              name="home-email"
              type="email"
              placeholder="Email"
              className="contact-input"
              required
            />
            <SelectField
              services="home-contact-services"
              className="contact-input"
              options={props.selectField}
            />
          </div>
          <div className="contact-form-message">
            <textarea
              row="10"
              className="contact-textfield"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <Button
          label="Submit"
          type="submit"
          className="link-button-green contact-submit"
          handleClick={(event) => props.onSubmit(event)}
        />
      </form>
    </div>
  );
}

export default ContactForm;
