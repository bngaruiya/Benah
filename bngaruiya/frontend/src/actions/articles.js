import axios from "axios";
import { GET_ARTICLES, DELETE_ARTICLE, ADD_ARTICLE } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

//GET ARTICLES
export const getArticles = () => (dispatch, getState) => {
  axios
    .get("/api/blog/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE ARTICLE
export const deleteArticle = id => (dispatch, getState) => {
  axios
    .delete(`/api/blog/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteArticle: "Article Deleted" }));
      dispatch({
        type: DELETE_ARTICLE,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD ARTICLE
export const addArticle = article => (dispatch, getState) => {
  axios
    .post("/api/blog/", article, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addArticle: "Article Added" }));
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
