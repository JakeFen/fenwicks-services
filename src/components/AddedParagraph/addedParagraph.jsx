import React from "react";

const AddedParagraph = ({
  title,
  paragraph,
  tclassName,
  pclassName,
  ...props
}) => {
  return (
    <div>
      <h4 className={tclassName}>{title}</h4>
      <p className={pclassName}>{paragraph}</p>
    </div>
  );
};

export default AddedParagraph;
