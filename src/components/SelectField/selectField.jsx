import React from "react";

const SelectFriend = ({ className, options, onChange, ...props }) => {
  return (
    <select className={className} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default SelectFriend;
