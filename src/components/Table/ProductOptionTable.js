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

const ProductOptionTable = () => {
  return (
    <Table>
      <tbody>
        {/* Item Title */}
        <tr className="title">
          <td className="header">네이비/Medium/Short</td>
          <td className="right">
            <FontAwesomeIcon icon={faWindowClose} />
          </td>
        </tr>
        {/* Count/Price */}
        <tr className="price">
          <td className="header">
            <ControlBox>-</ControlBox>
            <Count>2</Count>
            <ControlBox>+</ControlBox>
          </td>
          <td className="right">{utils.numberWithCommas("2000000")}원</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProductOptionTable;
