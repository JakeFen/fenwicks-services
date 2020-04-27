import React from "react";

const CompanyInfo = (props) => {
  return (
    <div>
      <h3>Contact Info</h3>
      <div>
        <p>Fenwick's Services</p>
        <ul>
          <li>
            Phone: <a href="tel:4195030994">(419) 503-0994</a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:fenwicksservices@gmail.com">
              Fenwicksservices@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyInfo;
