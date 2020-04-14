import React from "react";
import ContactForm from "./ContactForm/contact-form.js";
import OurMission from "./OurMission/our-mission.js";

function ContactBanner() {
  return (
    <div className="contact-banner-container container">
      <OurMission />
      <ContactForm />
    </div>
  );
}

export default ContactBanner;
