import React, { Component } from "react";
import PageHeader from "../components/PageHeader/page-header";
import AddedParagraph from "../components/AddedParagraph/addedParagraph";
import ServiceList from "../components/ServiceList/service-list";

class Service extends Component {
  state = {
    services: [
      "Mowing",
      "Weeding",
      "Hauling",
      "Trimming Bushes",
      "Pressure Washing",
      "Planting Flowers",
      "Lawn Aeration",
      "Yard Rolling",
      "Seperate things",
      " Mulching",
      "Edging",
      "Moving Furniture",
      "Stick Removal",
      "Cleaning Gutters",
      "Cleaning Windows",
      "Pressure Washing",
      "Patio Pressure Washing",
      "House Pressure Washing",
    ],
  };

  render() {
    return (
      <main>
        <PageHeader title="Services" subtitle="A taste of our best work" />
        <div>
          <AddedParagraph
            tclassName="header-green"
            pclassName="paragraph"
            title="Keeping Our Community Looking It's Best"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <img src="https://via.placeholder.com/400x250" alt="alt"></img>
        </div>
        <ServiceList services={this.state.services} />
      </main>
    );
  }
}

export default Service;
