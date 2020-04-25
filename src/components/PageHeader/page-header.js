import React from "react";

function PageHeader(props) {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="header-title">{props.title}</h1>
        <h3 className="header-subtitle">{props.subtitle}</h3>
      </div>
    </div>
  );
}

export default PageHeader;
