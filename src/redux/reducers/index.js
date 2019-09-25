import { combineReducers } from "redux";
import authorsReducer from "./authors";
import booksReducer from "./books";
import { universal } from "postcss-selector-parser";

const rootReducer = combineReducers({
  booksState: booksReducer,
  authorsState: authorsReducer
});

export default rootReducer;
