import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const FlexImage = ({ ...rest }) => {
  return <Image {...rest} />;
};

FlexImage.defaultProps = {
  width: "100%",
  height: "auto"
};

export default FlexImage;
