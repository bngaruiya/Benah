import axios from "axios";
import { GET_ARTICLES, DELETE_ARTICLE, ADD_ARTICLE } from "./types";

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
      dispatch({
        type: ADD_ARTICLE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
