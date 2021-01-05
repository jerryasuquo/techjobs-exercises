import React, { Component } from "react";
import AddGifForm from "./AddGifForm";

export default class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }

  updateList = (res) => {
    const randomNums = Math.floor(Math.random() * res.data.length);
    this.setState({
      gifs: this.state.gifs.concat(res.data[randomNums]),
    });
  };

  clearList = () => {
    this.setState({
      gifs: [],
    });
  };

  render() {
    let gifs = this.state.gifs.map((v, i) => {
      return (
        <div className="col-sm-3" key={i}>
          <iframe src={v.embed_url} />
        </div>
      );
    });

    return (
      <div>
        <h1 className="text-center">GIPHY PARTY</h1>
        <AddGifForm handleSubmit={this.updateList} clearGifs={this.clearList} />
        {gifs}
      </div>
    );
  }
}
