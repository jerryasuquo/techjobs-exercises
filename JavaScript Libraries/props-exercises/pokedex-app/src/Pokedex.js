import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokecard.css";

class Pokedex extends Component {
  render() {
    var pokeList = this.props.pokedex.map((pokemon) => {
      return (
        <Pokecard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
        />
      );
    });
    return (
      <div>
        <h1 className="title">Pokedex</h1>
        <section id="container">
          <ul className="card-box">{pokeList}</ul>
        </section>
      </div>
    );
  }
}

Pokedex.defaultProps = {
  pokedex: [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ],
};

export default Pokedex;
