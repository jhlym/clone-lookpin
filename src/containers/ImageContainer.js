import React, { useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import MainImage from "../components/Image";
import Thumbnails from "../components/Image/Thumbnails";

const Layout = styled.figure`
  width: 50%;
`;

const ImageContainer = ({ ...rest }) => {
  const detail = useSelector(({ product: { detail } }) => detail);
  const [mainImgUrl, setMainImgUrl] = useState(null);

  const thumbnailClick = e => {
    setMainImgUrl(e.target.src);
  };

  if (detail === null) return null;

  return (
    <Layout {...rest}>
      <MainImage src={mainImgUrl || detail.photo_url} alt="main_image" width="100%" height="auto" />
      <Thumbnails images={detail.images} height="100px" onClick={thumbnailClick} />
    </Layout>
  );
};

export default ImageContainer;
