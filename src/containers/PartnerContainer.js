import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Row from "../components/Row";

const Title = styled.span`
  margin-right: 8px;
  color: #868e96;
`;
const Content = styled.span`
  margin-right: 16px;
`;

const PartnerContainer = () => {
  const detail = useSelector(({ product: { detail } }) => detail);
  if (!detail) return null;
  return (
    <>
      <section>
        <h3>상품정보고시 정보</h3>
        <Row className="flex__wrap">
          {detail.partner.product_info.map((info, index) => (
            <span key={index}>
              <Title>{info[0]}</Title>
              <Content>{info[1]}</Content>
            </span>
          ))}
        </Row>
      </section>
      {/* 업체 정보 */}
      <section>
        <h3>업체 정보</h3>
        <Row className="flex__wrap">
          {detail.partner.partner_info.map((info, index) => (
            <span key={index}>
              <Title>{info[0]}</Title>
              <Content>{info[1]}</Content>
            </span>
          ))}
        </Row>
      </section>
    </>
  );
};

export default PartnerContainer;
