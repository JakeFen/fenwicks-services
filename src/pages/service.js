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
              title="Keeping Our Community Looking Its Best"
              paragraph="Do you have overgrown bushes or weeds invading your garden? Do you wish your house was as clean as the day you bought it? By taking advantage of our wide selection of services, you can have your home looking pristine all year long!  From mowing to edging to power washing, we at Fenwick’s Services are dedicated to ensuring that you have a home you are proud to show off. Book an appointment with us today and soon your house will be the envy of the neighborhood!"
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
