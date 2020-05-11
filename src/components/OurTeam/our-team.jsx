import React from "react";

const OurTeam = ({ ...props }) => {
  return (
    <div className="our-team-container">
      <h3 className="header">
        Our <span className="header-green">Team</span>
      </h3>
      <img src="https://via.placeholder.com/300x400" alt="alt" />
      <h5>Isaac Fenwick</h5>
      <p className="header-green teamates-role">Founder</p>
      <p className="paragraph">
        Isaac started Fenwick's Services when he was 18 years old. He already
        had a full-time job but he knew when he started going to college he was
        going to have to make more to pay for it. He started working smaller
        jobs for family members to get his name out there. After a few months he
        was getting more clients and knew the could make this business work.
      </p>
    </div>
  );
};

export default OurTeam;
