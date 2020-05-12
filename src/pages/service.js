import React, { Component } from "react";
import PageHeader from "../components/PageHeader/page-header";
import AddedParagraph from "../components/AddedParagraph/addedParagraph";
import ServiceList from "../components/ServiceList/service-list";
import ServiceImage from "../images/Service/services-image.jpeg";

class Service extends Component {
  state = {
    services: [
      "Mowing",
      "Weeding",
      "Hauling",
      "Mulching",
      "Yard Rolling",
      "Edging",
      "Stick Removal",
      "Pressure Washing",
      "Cleaning Gutters",
      "Cleaning Windows",
      "Trimming Bushes",
      "Planting Flowers",
      "Lawn Aeration",
      "Moving Furniture",
      "Seperate things",
    ],
  };

  render() {
    return (
      <main>
        <PageHeader title="Services" subtitle="A taste of our best work" />
        <div className="service-content container">
          <div className="service-paragraph-image">
            <AddedParagraph
              tclassName="header-green"
              pclassName="paragraph"
              title="Keeping Our Community Looking It's Best"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <div>
              <img src={ServiceImage} alt="alt"></img>
            </div>
          </div>
          <ServiceList services={this.state.services} />
        </div>
      </main>
    );
  }
}

export default Service;
