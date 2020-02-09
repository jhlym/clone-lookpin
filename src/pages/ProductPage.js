import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../redux/product";
// layout
import DefaultLayout from "../components/Layout/DefaultLayout";
// container
import ImageContainer from "../containers/ImageContainer";
import InformationContainer from "../containers/InformationContainer";
import PartnerContainer from "../containers/PartnerContainer";
// components
import Row from "../components/Row";

const ProductPage = () => {
  const dispatch = useDispatch();
  const detail = useSelector(({ product: { detail } }) => detail);
  // mount
  useEffect(() => {
    // 상품 상세 정보 호출
    dispatch(productActions.getProductDetail());
    // dispatch(productActions.initProductDetail());
  }, [dispatch]);

  // unmount
  useEffect(() => {
    return () => {
      dispatch(productActions.resetProductDetail());
    };
  }, [dispatch]);

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
