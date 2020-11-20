import React, { Component } from "react";
import PropTypes from "prop-types";

class Pokecard extends Component {
  render() {
    return (
      <div>
        <li className="card">
          <h2>{this.props.name}</h2>
          <img src={this.props.image} alt={this.props.name} />
          <p>
            <b>Type: {this.props.type}</b>
          </p>
        </li>
      </div>
    );
  }
}

Pokecard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
};

export default Pokecard;
