import React from "react";
import styled from "styled-components";
import Image from "./index";

const Container = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  img {
    padding-left: 5px;
    cursor: pointer;
  }
  img:first-child {
    padding: 0;
  }
`;

const Thumbnails = ({ images, width, height, ...rest }) => {
  return (
    <Container width={width} height={height} {...rest}>
      {images.map(src => (
        <Image key={src} src={src} alt="thumbnail" width="auto" height="100%" />
      ))}
    </Container>
  );
};

Thumbnails.defaultProps = {
  images: [],
  width: "100%",
  height: "10%"
};

export default React.memo(Thumbnails);
