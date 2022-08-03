import { fetchApi } from "../../utils/fetchApi";
import { getLoggedUserId } from '../../utils/getLoggedUserId';

export const fetchConversations = () => async (dispatch) => {
  dispatch({
    type: FETCH_CONVERSATIONS_BEGIN,
  });
  try {
    const id = getLoggedUserId()
    const resConversations = await fetchApi({
      method: "GET",
      url: `/conversations/${id}`,
    });
    const conversations = resConversations.data;
    const resUsers = await fetchApi({
      method: "GET",
      url: `/users`,
    });
    const users = resUsers.data.filter(user => user.id !== id)
    dispatch({
      type: FETCH_CONVERSATIONS_SUCCESS,
      payload: {
        id,
        conversations,
        users,
      }
    });
  } catch (err) {
    dispatch({
      type: FETCH_CONVERSATIONS_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const fetchMessages = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_MESSAGES_BEGIN,
  });
  try {
    const res = await fetchApi({
      method: "GET",
      url: `/messages/${id}`,
    });
    const messages = res.data;
    dispatch({
      type: FETCH_MESSAGES_SUCCESS,
      payload: messages,
    });
  } catch (err) {
    dispatch({
      type: FETCH_MESSAGES_FAIL,
      payload: err.response.data.error,
    });
  }
}

export const addNewMessage = (data) => async (dispatch, getState) => {
  const { messages } = getState().messageReducer;
  const newMessagesArray = [...messages]
  dispatch({
    type: SEND_MESSAGE_BEGIN,
  });
  try {
    console.log(data)
    const res = await fetchApi({
      method: "POST",
      url: `/messages/${data.conversationId}`,
      data,
    });
    newMessagesArray.push(res.data)
    dispatch({
      type: SEND_MESSAGE_SUCCESS,
      payload: newMessagesArray,
    });
  } catch (err) {
    dispatch({
      type: SEND_MESSAGE_FAIL,
      payload: err,
    });
  }
}

export const addNewConversation = (data) => async (dispatch, getState) => {
  const { conversations } = getState().messageReducer;
  const newConversationsArray = [...conversations]
  dispatch({
    type: SEND_CONVERSATION_BEGIN,
  });
  try {
    const res = await fetchApi({
      method: "POST",
      url: `/conversations/${data.senderId}`,
      data,
    });
    newConversationsArray.push(res.data)

    dispatch({
      type: SEND_CONVERSATION_SUCCESS,
      payload: newConversationsArray,
    });
  } catch (err) {
    dispatch({
      type: SEND_CONVERSATION_FAIL,
      payload: err,
    });
  }
}

export const FETCH_CONVERSATIONS_BEGIN = "FETCH_CONVERSATIONS_BEGIN";
export const FETCH_CONVERSATIONS_SUCCESS = "FETCH_CONVERSATIONS_SUCCESS";
export const FETCH_CONVERSATIONS_FAIL = "FETCH_CONVERSATIONS_FAIL";
export const FETCH_MESSAGES_BEGIN = "FETCH_MESSAGES_BEGIN";
export const FETCH_MESSAGES_SUCCESS = "FETCH_MESSAGES_SUCCESS";
export const FETCH_MESSAGES_FAIL = "FETCH_MESSAGES_FAIL";
export const SEND_MESSAGE_BEGIN = "SEND_MESSAGE_BEGIN";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAIL = "SEND_MESSAGE_FAIL";
export const SEND_CONVERSATION_BEGIN = "SEND_CONVERSATION_BEGIN";
export const SEND_CONVERSATION_SUCCESS = "SEND_CONVERSATION_SUCCESS";
export const SEND_CONVERSATION_FAIL = "SEND_CONVERSATION_FAIL";
