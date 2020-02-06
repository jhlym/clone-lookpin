// mockup data
import data from "../response";
import { createAction, handleActions } from "redux-actions";

const GET_PRODUCT_DETAIL = "product/GET_PRODUCT_DETAIL";

export const getProductDetail = createAction(GET_PRODUCT_DETAIL);

const initialState = {
  detail: null
};

export default handleActions(
  {
    [GET_PRODUCT_DETAIL]: (state, payload) => ({
      detail: data
    })
  },
  initialState
);
