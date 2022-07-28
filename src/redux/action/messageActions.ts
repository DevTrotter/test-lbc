import { fetchApi } from "../../utils/fetchApi";

export const getFetchExemple = () => async (dispatch) => {
  dispatch({
    type: FETCH_EXAMPLE_BEGIN,
  });
  try {
    const res = await fetchApi({
      method: "GET",
      url: ``,
    });
    const movies = res.data;
    dispatch({
      type: GET_EXAMPLE_SUCCESS,
      payload: movies.results,
    });
    return movies.results;
  } catch (err) {
    dispatch({
      type: FETCH_EXAMPLE_FAIL,
      payload: err.response.data.error,
    });
  }
};

export const FETCH_EXAMPLE_BEGIN = "FETCH_EXAMPLE_BEGIN";
export const GET_EXAMPLE_SUCCESS = "GET_EXAMPLE_SUCCESS";
export const FETCH_EXAMPLE_FAIL = "FETCH_EXAMPLE_FAIL";
