import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import * as productActions from "../redux/product";
// layout
import DefaultLayout from "../components/Layout/DefaultLayout";

// container
import ImageContainer from "../containers/ImageContainer";
import InformationContainer from "../containers/InformationContainer";
import PartnerContainer from "../containers/PartnerContainer";

const Row = styled.div`
  display: flex;
  width: 100%;
  /* height: 60%; */
`;

const ProductPage = () => {
  const dispatch = useDispatch();
  const detail = useSelector(({ product: { detail } }) => detail);
  // mount
  useEffect(() => {
    // 상품 상세 정보 호출
    dispatch(productActions.getProductDetail());
  });

  // unmount
  useEffect(() => {
    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <DefaultLayout>
      <Row>
        <ImageContainer />
        <InformationContainer />
      </Row>
      <div dangerouslySetInnerHTML={{ __html: detail && detail.html }}></div>
      <PartnerContainer />
    </DefaultLayout>
  );
};

export default ProductPage;
