import { FETCH_ALL_AUTHORS } from "./actionType";
import axios from "axios";

export const fetchAllAuthors = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/authors"
      );

      dispatch({
        type: FETCH_ALL_AUTHORS,
        payload: res.data
      });
    } catch (err) {}
  };
};
