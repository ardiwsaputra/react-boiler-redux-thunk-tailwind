import { FETCH_EXAMPLE } from "../actions/types";

const initialState = {
  example: {},
};

export default function ajaxReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXAMPLE:
      return {
        ...state,
        example: action.payload,
      };
    default:
      return state;
  }
}
