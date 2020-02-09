// mockup data
import data from "../response";
import { createAction, handleActions } from "redux-actions";

// FIXME: 데이터 가공 위한 구문
const t = {};
data.options.data.forEach(data => {
  const key = data.positions.join("");
  t[key] = data.data;
});
data.options.case = t;

const GET_PRODUCT_DETAIL = "product/GET_PRODUCT_DETAIL";
const RESET_PRODUCT_DETAIL = "product/RESET_PRODUCT_DETAIL";

export const getProductDetail = createAction(GET_PRODUCT_DETAIL);
export const resetProductDetail = createAction(RESET_PRODUCT_DETAIL);

const initialState = {
  detail: null
};

export default handleActions(
  {
    [GET_PRODUCT_DETAIL]: (state, payload) => ({
      ...state,
      detail: data
    }),
    [RESET_PRODUCT_DETAIL]: (state, payload) => ({
      ...state,
      detail: null
    })
  },
  initialState
);
