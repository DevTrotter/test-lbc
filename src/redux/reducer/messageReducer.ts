import {
  FETCH_CONVERSATIONS_BEGIN,
  FETCH_CONVERSATIONS_SUCCESS,
  FETCH_CONVERSATIONS_FAIL,
} from "../action/messageActions";

const initialState = {
  loading: false,
  usersId: null,
  conversations: [],
  messages: [],
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONVERSATIONS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CONVERSATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersId: action.payload.id,
        conversations: action.payload.conversations,
      };
    case FETCH_CONVERSATIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
