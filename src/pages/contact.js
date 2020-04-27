import React, { Component } from "react";
import PageHeader from "../components/PageHeader/page-header";
import CompanyInfo from "../components/Contact/CompanyInfo/companyInfo";
import Form from "../components/Contact/Form/form";

class Contact extends Component {
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

  handleClick = (event) => {
    event.preventDefault();
    console.log("You Clicked Me!!");
  };

  render() {
    return (
      <main>
        <PageHeader title="Contact" subtitle="A taste of our best work" />
        <div className="contact-image-container container">
          <Form
            selectField={this.state.selectField}
            handleClick={this.handleClick}
          />
          <CompanyInfo />
        </div>
      </main>
    );
  }
}

export default Contact;
