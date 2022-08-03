import {
  FETCH_CONVERSATIONS_BEGIN,
  FETCH_CONVERSATIONS_SUCCESS,
  FETCH_CONVERSATIONS_FAIL,
  FETCH_MESSAGES_BEGIN,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAIL,
  SEND_MESSAGE_BEGIN,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  SEND_CONVERSATION_BEGIN,
  SEND_CONVERSATION_SUCCESS,
  SEND_CONVERSATION_FAIL
} from "../action/messageActions";

const initialState = {
  loading: false,
  usersId: null,
  conversations: [],
  messages: [],
  users: [],
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
        users: action.payload.users,
      };
    case FETCH_CONVERSATIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_MESSAGES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };
    case FETCH_MESSAGES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEND_MESSAGE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      };
    case SEND_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEND_CONVERSATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case SEND_CONVERSATION_SUCCESS:
      return {
        ...state,
        loading: false,
        conversations: action.payload,
      };
    case SEND_CONVERSATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
