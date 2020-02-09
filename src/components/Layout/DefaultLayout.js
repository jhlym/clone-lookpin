import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 20px 0;
`;

const DefaultLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default DefaultLayout;
