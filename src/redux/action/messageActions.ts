import { fetchApi } from "../../utils/fetchApi";
import { getLoggedUserId } from '../../utils/getLoggedUserId';

export const fetchConversations = () => async (dispatch) => {
  dispatch({
    type: FETCH_CONVERSATIONS_BEGIN,
  });
  try {
    const id = getLoggedUserId()
    const res = await fetchApi({
      method: "GET",
      url: `/conversations?senderId=${id}`,
    });
    const conversations = res.data;
    dispatch({
      type: FETCH_CONVERSATIONS_SUCCESS,
      payload: {
        id,
        conversations,
      }
    });
  } catch (err) {
    dispatch({
      type: FETCH_CONVERSATIONS_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const FETCH_CONVERSATIONS_BEGIN = "FETCH_CONVERSATIONS_BEGIN";
export const FETCH_CONVERSATIONS_SUCCESS = "FETCH_CONVERSATIONS_SUCCESS";
export const FETCH_CONVERSATIONS_FAIL = "FETCH_CONVERSATIONS_FAIL";
