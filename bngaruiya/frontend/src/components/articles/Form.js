import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addArticle } from "../../actions/articles";

export class Form extends Component {
  state = {
    title: "",
    email: "",
    content: ""
  };

  static propTypes = {
    addArticle: PropTypes.func.isRequired
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const { title, email, content } = this.state;
    const article = { title, email, content };
    this.props.addArticle(article);
    this.setState({
      title: "",
      email: "",
      content: ""
    });
  };

  render() {
    const { title, email, content } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Article</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea
              className="form-control"
              type="text"
              name="content"
              onChange={this.onChange}
              value={content}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addArticle }
)(Form);
