import React from "react";
import PageHeader from "../components/PageHeader/page-header";
import OurMission from "../components/OurMission/our-mission";
import AddedParagraph from "../components/AddedParagraph/addedParagraph";
import OurTeam from "../components/OurTeam/our-team";

function About() {
  return (
    <main>
      <PageHeader title="About Us" subtitle="A taste of our best work" />
      <div className="about-page-container container">
        <div className="about-information">
          <OurMission link={false} />
          <AddedParagraph
            tclassName="header-green"
            pclassName="paragraph"
            title="Keeping Our Community Looking It's Best"
            paragraph="Fenwick's Services is devoted to creating a 
            beautiful community one house at a time! In 2020, for 
            every 20 hours we are hired to do work, we will be donating 
            an hour of free services to deserving families. These include 
            those who are financially pressed, physically incapable, or 
            simply deserve a thank you. By utilizing our company, not only 
            will you be receiving a great service, but you will be playing 
            a role in helping other deserving families out as well!"
          />
        </div>
        <div className="about-our-team">
          <OurTeam />
        </div>
      </div>
    </main>
  );
}

export default About;
