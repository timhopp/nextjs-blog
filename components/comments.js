import React, { Component } from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    console.log("Comment submitted" + this.state.comment);
    event.preventDefault();
  }
  render() {
    return (
      <div className="row justify-content-center">
        <div className="bg-light border-rounded p-4 m-2">
          <h2 className="text-center">Comments</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              <h5> Add A Comment</h5>
              <input
                type="text"
                value={this.state.comment}
                onChange={this.handleChange}
              />
            </label>
            <input
              className="btn btn-success m-2"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Comments;
