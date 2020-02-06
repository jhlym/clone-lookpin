import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 50%;
`;

const InformationContainer = ({ ...rest }) => {
  return <Layout {...rest}>InformationContainer</Layout>;
};

export default InformationContainer;
