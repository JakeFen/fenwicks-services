import React, { Component } from "react";
import ContactForm from "../../ContactForm/contact-form";
import OurMission from "../../OurMission/our-mission";

class ContactBanner extends Component {
  state = {
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
          selectField={this.state.selectField}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default ContactBanner;
