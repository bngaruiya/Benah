import { GET_ARTICLES, DELETE_ARTICLE, ADD_ARTICLE } from "../actions/types.js";

const initialState = {
  articles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter(
          article => article.id !== action.payload
        )
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    default:
      return state;
  }
}
