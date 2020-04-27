import React from "react";

const SelectFriend = ({
  services,
  label,
  className,
  options,
  onChange,
  ...props
}) => {
  return (
    <React.Fragment>
      {label && <label htmlfor={services}>{label}</label>}
      <select id={services} className={className} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default SelectFriend;
