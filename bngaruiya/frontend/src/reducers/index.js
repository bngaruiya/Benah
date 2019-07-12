import { combineReducers } from "redux";
import articles from "./articles";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  articles,
  errors,
  messages
});
