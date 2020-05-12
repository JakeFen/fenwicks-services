import React, { Component } from "react";
import ContactForm from "../../ContactForm/contact-form";
import OurMission from "../../OurMission/our-mission";

class ContactBanner extends Component {
  state = {
    action: "fenwicks-services/php/index.php",
    selectField: [
      {
        value: "landscaping",
        name: "Landscaping",
      },
      {
        value: "house-care",
        name: "House Care",
      },
      {
        value: "snow-removal",
        name: "Snow Removal",
      },
      {
        value: "other",
        name: "Other",
      },
    ],
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("You clicked me!!");
  };

  render() {
    return (
      <div className="contact-banner-container container">
        <OurMission link={true} />
        <ContactForm
          action={this.state.action}
          selectField={this.state.selectField}
        />
      </div>
    );
  }
}

export default ContactBanner;
