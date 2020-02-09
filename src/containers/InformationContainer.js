import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
// components
import Row from "../components/Row";
import Label from "../components/Label";
import Number from "../components/Header/Number";
import SelectBox from "../components/SelectBox";
import ProductOptionTable from "../components/Table/ProductOptionTable";

const Layout = styled.div`
  width: 50%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
`;

const SubText = styled.p`
  padding: 20px 0;
  font-weight: 600;
`;

const InformationContainer = ({ ...rest }) => {
  const detail = useSelector(({ product: { detail } }) => detail);
  const [products, setProduct] = useState([]);

  const handleSelectBox = e => {
    const parent = e.currentTarget;
    const current = e.target;
    if (current.nextElementSibling) current.nextElementSibling.disabled = false;
    if (parent.lastChild === current) {
      Array.from(parent.children).forEach((e, i) => {
        // 추가
        // 초기화
        e.selectedIndex = 0;
        if (i !== 0) e.disabled = true;
      });
    }
  };

  if (!detail) return null;

  return (
    <Layout {...rest}>
      {/* 상품 정보 */}
      <Row style={{ marginBottom: "40px" }}>
        <h1>{detail.name}</h1>
        <Label text="무료배송" />
      </Row>
      <Number text={detail.price} unit="원" discount />
      <Row>
        <Number text={detail.discount_price} unit="원" />
        <Number text={detail.discount_rate} red style={{ paddingLeft: "10px" }} />
      </Row>
      <hr />
      {/* 옵션 선택 */}
      <SubText>옵션선택</SubText>
      <Row className="flex__column" onChange={handleSelectBox}>
        {detail.options.names.map((name, index) => (
          <SelectBox key={name} options={detail.options.contents[index]} name={name} disabled={index !== 0} />
        ))}
      </Row>
      {/* 선택 결과 테이블 */}
      {/* <ProductOptionTable /> */}
      {/* 총 금액 */}
      <Row className="flex__end">
        <SubText style={{ paddingRight: "30px" }}>총 상품 금액</SubText>
        <Number text="0" unit="원" red />
      </Row>
    </Layout>
  );
};

export default InformationContainer;
