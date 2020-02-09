import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import * as utils from "../../utils";

const Table = styled.table`
  margin: 30px 0;
  border-top: 1px solid ${props => props.theme.lightGray};
  border-collapse: collapse;
  td {
    padding: 15px 0;
  }
  td.right {
    text-align: right;
  }
  td.header {
    font-weight: 600;
  }
  tr.title td {
    border-bottom: 1px solid #dee2e6;
  }
  tr.price td {
    border-bottom: 1px solid ${props => props.theme.lightGray};
  }
  svg {
    color: ${props => props.theme.lightGray};
    cursor: pointer;
  }
`;

const ControlBox = styled.span`
  display: inline-block;
  border: 1px solid ${props => props.theme.lightGray};
  font-weight: 400;
  padding: 0 10px;
  cursor: pointer;
`;

const Count = styled.span`
  padding: 0 20px;
`;

const OptionRow = React.memo(({ product, handleCancel, decreaseCount, increaseCount, index }) => {
  return (
    <>
      <tr className="title">
        <td className="header">{`${product.색상}/${product.사이즈}/${product.기장}`}</td>
        <td className="right">
          <FontAwesomeIcon icon={faWindowClose} onClick={e => handleCancel(index)} />
        </td>
      </tr>
      <tr className="price">
        <td className="header">
          <ControlBox onClick={() => decreaseCount(index)}>-</ControlBox>
          <Count>{product.count}</Count>
          <ControlBox onClick={() => increaseCount(index)}>+</ControlBox>
        </td>
        <td className="right">{utils.numberWithCommas(`${(product.price + product.option_price) * product.count}`)}원</td>
      </tr>
    </>
  );
});

const ProductOptionTable = ({ products, ...rest }) => {
  return (
    <Table>
      <tbody>
        {products.map((product, index) => (
          <OptionRow key={index} {...rest} product={product} index={index} />
        ))}
      </tbody>
    </Table>
  );
};

ProductOptionTable.defaultProps = {
  products: [],
  handleCancel: () => {},
  increaseCount: () => {},
  decreaseCount: () => {}
};

export default ProductOptionTable;
