import {
  FETCH_EXAMPLE_BEGIN,
  GET_EXAMPLE_SUCCESS,
  FETCH_EXAMPLE_FAIL,
} from "../action/messageActions";

const initialState = {
  loading: false,
  users: [],
  conversations: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXAMPLE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_EXAMPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        conversations: action.payload,
      };
    case FETCH_EXAMPLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
