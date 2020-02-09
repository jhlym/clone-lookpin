import React from "react";
import styled, { css } from "styled-components";
import * as utils from "../../utils";

const Header = styled.h1`
  ${props => {
    if (props.red) {
      return css`
        color: ${props.theme.red};
      `;
    } else if (props.discount) {
      return css`
        color: ${props.theme.discount};
        text-decoration: line-through;
      `;
    }
  }}
`;

const Number = ({ text, unit = "", ...rest }) => {
  return <Header {...rest}>{`${utils.numberWithCommas(text)}${unit}`}</Header>;
};

export default Number;
