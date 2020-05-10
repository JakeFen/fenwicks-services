import React from "react";

const OurTeam = ({ ...props }) => {
  return (
    <div>
      <h3 className="header">
        Our <span className="header-green">Team</span>
      </h3>
      <img src="https://via.placeholder.com/300x400" alt="alt" />
      <h5>Isaac Fenwick</h5>
      <p>Founder</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim possimus
        dolore architecto porro eos similique esse tempore cumque deserunt
        accusamus, libero, exercitationem optio officiis ea harum a? Aspernatur,
        doloremque dolorum!
      </p>
    </div>
  );
};

export default OurTeam;
