import React from "react";

const ArrayInput = ({
  title,
  type,
  name,
  placeholder,
  value,
  onChange,
  onClick,
}) => {
  const handleChange = (e) => {
    onChange && onChange(e);
  };
  return (
    <div>
      <h2>{title}</h2>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button onClick={onClick}>+</button>
    </div>
  );
};

export default ArrayInput;
