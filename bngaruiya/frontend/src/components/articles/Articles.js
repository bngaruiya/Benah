import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getArticles, deleteArticle } from "../../actions/articles";

export class Articles extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    getArticles: PropTypes.func.isRequired,
    deleteArticle: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    return (
      <Fragment>
        <h2>Articles</h2>
        <div className="card card-body mt-4 mb-4">
          {this.props.articles.map(article => (
            <div className="list-group" key={article.id}>
              <h3 className="list-group-item-heading">
                <a>{article.title}</a>
              </h3>
              <small className="text-muted">{article.email}</small>
              <p className="list-group-item-text">{article.content}</p>
              <button
                onClick={this.props.deleteArticle.bind(this, article.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.articles.articles
});

export default connect(
  mapStateToProps,
  { getArticles, deleteArticle }
)(Articles);
