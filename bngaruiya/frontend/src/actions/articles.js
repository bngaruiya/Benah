import axios from "axios";
import { GET_ARTICLES, DELETE_ARTICLE, ADD_ARTICLE, GET_ERRORS } from "./types";
import { createMessage } from "./messages";

//GET ARTICLES
export const getArticles = () => dispatch => {
  axios
    .get("/api/blog/")
    .then(res => {
      dispatch({
        type: GET_ARTICLES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

//DELETE ARTICLE
export const deleteArticle = id => dispatch => {
  axios
    .delete(`/api/blog/${id}/`)
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
export const addArticle = article => dispatch => {
  axios
    .post("/api/blog/", article)
    .then(res => {
      dispatch(createMessage({ addArticle: "Article Added" }));
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
