import React, { useState, useCallback } from "react";
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
  @media (max-width: 600px) {
    width: 100%;
    padding-left: 0;
  }
`;

const SubText = styled.p`
  padding: 20px 0;
  font-weight: 600;
`;

const InformationContainer = ({ ...rest }) => {
  const detail = useSelector(({ product: { detail } }) => detail);
  const [products, setProduct] = useState([]);

  // Multiple selectbox handler
  const handleSelectBox = (e, callback) => {
    const parent = e.currentTarget;
    const current = e.target;
    if (current.nextElementSibling) current.nextElementSibling.disabled = false;
    if (parent.lastChild === current) {
      // 사용자 정의 함수
      if (callback) callback(e);
      // 초기화
      Array.from(parent.children).forEach((e, i) => {
        e.selectedIndex = 0;
        if (i !== 0) e.disabled = true;
      });
    }
  };

  // 선택한 옵션 테이블 추가
  const addProducts = e => {
    // 이미 선택한 옵션인 경우
    let hasProduct = false;
    const selectboxes = Array.from(e.currentTarget.children);
    // 셀렉트 박스에서 선택한 옵션들
    let product = selectboxes.reduce(
      (options, selectbox) => ({
        ...options,
        [selectbox.name]: selectbox.value
      }),
      {}
    );
    const key = selectboxes.map(selectbox => selectbox.value).join("");
    product.key = key;
    products.forEach(product => {
      if (product.key === key) hasProduct = true;
    });
    //  재고가 없는 경우
    if (detail.options.case[key].stock_count <= 0) {
      alert("재고가 없습니다.");
      return;
    }
    // 이미 있는 경우
    if (hasProduct) {
      alert("이미 선택한 옵션입니다.");
      return;
    }
    product = {
      ...product,
      // 카운트 초기 값
      count: 1,
      price: detail.discount_price,
      // TODO: option price response.json에서 가져오기
      ...detail.options.case[key]
    };
    // state에 저장
    setProduct([...products, product]);
  };

  // 선택한 옵션 제거
  const handleCancel = index => {
    products.splice(index, 1);
    setProduct([...products]);
  };

  // 선택 옵션 수량 증가
  const increaseCount = useCallback(
    index => {
      setProduct(
        products.map((product, i) => {
          // TODO: stock_count 체크
          if (index === i) {
            product.count += 1;
          }
          return product;
        })
      );
    },
    [products]
  );

  // 선택 옵션 수량 감소
  const decreaseCount = useCallback(
    index => {
      setProduct(
        products.map((product, i) => {
          if (index === i && product.count > 1) {
            product.count -= 1;
          }
          return product;
        })
      );
    },
    [products]
  );

  // 총 가격
  const getTotalPrice = useCallback(() => {
    return products.reduce(
      (total, product) =>
        (total += product.count * (product.price + product.option_price)),
      0
    );
  }, [products]);

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
        <Number
          text={detail.discount_rate}
          red
          style={{ paddingLeft: "10px" }}
        />
      </Row>
      <hr />
      {/* 옵션 선택 */}
      <SubText>옵션선택</SubText>
      <Row
        className="flex__column"
        onChange={e => handleSelectBox(e, addProducts)}
      >
        {detail.options.names.map((name, index) => (
          <SelectBox
            key={name}
            options={detail.options.contents[index]}
            name={name}
            disabled={index !== 0}
          />
        ))}
      </Row>
      {/* 선택 결과 테이블 */}
      <ProductOptionTable
        products={products}
        handleCancel={handleCancel}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
      {/* 총 금액 */}
      <Row className="flex__end">
        <SubText style={{ paddingRight: "30px" }}>총 상품 금액</SubText>
        <Number text={getTotalPrice()} unit="원" red />
      </Row>
    </Layout>
  );
};

export default InformationContainer;
