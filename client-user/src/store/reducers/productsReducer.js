import { FETCH_PRODUCTS } from "../actions/actionType";

const stateData = {
  products: [],
};

export default function productsReducer(state = stateData, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.data,
      };

    default:
      return state;
  }
}
