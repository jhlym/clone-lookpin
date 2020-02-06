import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  /* FIXME: REMOVED */
  background-color: #000;
`;

const DefaultLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DefaultLayout;
