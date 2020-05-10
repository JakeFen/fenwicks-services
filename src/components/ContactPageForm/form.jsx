import React from "react";
import Input from "../Input/input";
import SelectField from "../SelectField/selectField";
import Button from "../Button/button";

const Form = (props) => {
  return (
    <div className="contact-form-wrapper">
      <h3 className="contact-form-header">
        Leave <span className="header-green">A Message</span>
      </h3>
      <form>
        <div className="contact-form-flex">
          <div className="contact-form-info">
            <Input
              label="Name: *"
              name="contact-fname"
              type="text"
              placeholder="Full Name"
              className="contact-input"
              required
            />
            <Input
              label="Email: *"
              name="contact-email"
              type="email"
              placeholder="Email Address"
              className="contact-input"
              required
            />
            <Input
              label="Phone: *"
              name="contact-phone"
              type="tel"
              placeholder="Phone Number"
              className="contact-input"
              required
            />
            <Input
              label="Address: *"
              name="text"
              type="text"
              placeholder="Address"
              className="contact-input"
              required
            />
          </div>
          <div className="contact-form-message">
            <SelectField
              services="contact-services"
              label="Subject: *"
              className="contact-input"
              options={props.selectField}
            />
            <label htmlFor="contact-message" className="">
              Message
            </label>
            <textarea
              rows="10"
              name="contact-message"
              className="contact-textfield"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <Button
          label="Submit"
          type="submit"
          className="link-button-green contact-submit"
          handleClick={(event) => props.handleClick(event)}
        />
      </form>
    </div>
  );
};

export default Form;
