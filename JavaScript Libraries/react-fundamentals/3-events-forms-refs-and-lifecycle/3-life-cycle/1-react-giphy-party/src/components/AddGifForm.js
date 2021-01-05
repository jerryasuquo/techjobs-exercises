import React, { Component } from "react";

export default class AddGifForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  componentDidMount() {
    let randomTerms = [
      "happy",
      "funny",
      "baby",
      "silly",
      "party",
      "dance",
      "sing",
      "music",
      "jump",
      "run",
    ];

    const randomTermsResult =
      randomTerms[Math.floor(Math.random() * randomTerms.length)];

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${randomTermsResult}&api_key=dc6zaTOxFJmzC`
    )
      .then((result) => result.json())
      .then((jsonResult) => {
        this.props.handleSubmit(jsonResult);
      });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  getGifs = (event) => {
    event.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC`
    )
      .then((result) => result.json())
      .then((jsonResult) => {
        this.props.handleSubmit(jsonResult);
      });
    this.setState({
      searchTerm: "",
    });
  };

  resetGifs = () => {
    this.props.clearGifs();
  };

  render() {
    return (
      <div>
        <div className="row">
          <form
            className="form-inline col-sm-offset-3 col-sm-4"
            onSubmit={this.getGifs}
          >
            <input
              type="text"
              className="form-control"
              value={this.state.searchTerm}
              name="searchTerm"
              onChange={this.handleChange}
            />
            <input
              type="submit"
              className="btn btn-primary"
              value="Search Giphy"
            />
          </form>
          <button className="col-sm-2 btn btn-danger" onClick={this.resetGifs}>
            Remove Images
          </button>
        </div>
      </div>
    );
  }
}
