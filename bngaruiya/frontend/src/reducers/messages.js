import { CREATE_MESSAGE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    //Alerts for adding or deleting an article
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
