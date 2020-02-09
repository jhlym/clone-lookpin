import React from "react";
import styled from "styled-components";

const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.red};
  border: 2px solid ${props => props.theme.red};
  font-weight: 600;
  padding: 0 20px;
  margin-left: 10px;
  @media (max-width: 600px) {
    padding: 0;
    margin: 0;
    width: 30%;
  }
`;

const Label = ({ text }) => {
  return <Span>{text}</Span>;
};

export default Label;
