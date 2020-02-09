import React from "react";
import styled from "styled-components";

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const inde = ({ children, ...rest }) => {
  return <Row {...rest}>{children}</Row>;
};

export default inde;
