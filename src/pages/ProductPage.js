import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getProductDetail } from "../redux/product";
// layout
import DefaultLayout from "../components/Layout/DefaultLayout";

// container
import ImageContainer from "../containers/ImageContainer";
import InformationContainer from "../containers/InformationContainer";
import PartnerContainer from "../containers/PartnerContainer";

const Row = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  /* FIXME: REMOVED */
  background-color: red;
`;

const ProductPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 상품 상세 정보 호출
    dispatch(getProductDetail());
  });
  return (
    <DefaultLayout>
      <Row>
        <ImageContainer />
        <InformationContainer />
      </Row>
      <PartnerContainer />
    </DefaultLayout>
  );
};

export default ProductPage;
