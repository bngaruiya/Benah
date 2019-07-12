import { CREATE_MESSAGE } from "./types";

//CREATE MESSAGE - creates a new article.
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
