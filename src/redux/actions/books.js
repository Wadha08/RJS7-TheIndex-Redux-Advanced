import { FETCH_ALL_BOOKS } from "./actionType";
import axios from "axios";

export const fetchAllBooks = () => {
  return async dispatch => {
    try {
      const res = await axios.get(
        "https://the-index-api.herokuapp.com/api/books/"
      );

      dispatch({
        type: FETCH_ALL_BOOKS,
        payload: res.data
      });
    } catch (err) {}
  };
};
