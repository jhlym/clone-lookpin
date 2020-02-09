import React from "react";
import styled from "styled-components";
import Image from "./index";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: ${props => props.height};
  img {
    padding-left: 5px;
    cursor: pointer;
  }
  img:first-child {
    padding: 0;
  }
`;

const Thumbnails = ({ images, ...rest }) => {
  return (
    <Container {...rest}>
      {images.map(src => (
        <Image key={src} src={src} alt="thumbnail" width="auto" height="100%" />
      ))}
    </Container>
  );
};

Thumbnails.defaultProps = {
  images: [],
  height: "100px"
};

export default React.memo(Thumbnails);
