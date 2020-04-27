import React from "react";
import PropTypes from "prop-types";

const FormInput = ({
  name,
  type = "text",
  placeholder,
  onChange,
  className = "",
  value,
  error,
  label,
  ...props
}) => {
  return (
    <React.Fragment>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </React.Fragment>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  // eslint-disable-next-line no-dupe-keys
  type: PropTypes.oneOf(["text", "number", "password", "email"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default FormInput;
