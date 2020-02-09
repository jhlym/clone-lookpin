import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px 0;
  margin-top: 5px;

  &:invalid {
    color: gray;
  }

  &[disabled] {
    background-color: #bdbdbd;
  }
`;

const SelectBox = ({ options, name, ...rest }) => {
  return (
    <Select required defaultValue="" {...rest} name={name}>
      <option value="" disabled hidden>
        {name}
      </option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
