import React from "react";
import Box from "./Box";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var boxesArr = [];
    const numBoxes = 18;

    for (let i = 0; i < numBoxes; i++) {
      let randomColor = this.getRandomColor();
      boxesArr.push({
        id: i,
        color: randomColor,
      });
    }
    this.state = { boxesArr };

    // setInterval(() => {
    //   const newBoxes = this.state.boxesArr.slice();
    //   const randomBoxIndex = Math.floor(Math.random() * newBoxes.length);
    //   newBoxes[randomBoxIndex] = Object.assign({}, newBoxes[randomBoxIndex], {
    //     color: this.getRandomColor(),
    //   });
    //   this.setState({
    //     boxesArr: newBoxes,
    //   });
    // }, 500);
  }

  handleChange() {
    const newBoxesArr = this.state.boxesArr.slice();
    const randomBoxIndex = Math.floor(Math.random() * newBoxesArr.length);
    newBoxesArr[randomBoxIndex] = Object.assign(
      {},
      newBoxesArr[randomBoxIndex],
      {
        color: this.getRandomColor(),
      }
    );

    this.setState({
      boxesArr: newBoxesArr,
    });
  }

  getRandomColor() {
    let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    return this.props.allColors[colorIndex];
  }

  render() {
    const boxes = this.state.boxesArr.map((box) => (
      <Box
        handleClick={this.handleChange.bind(this)}
        key={box.id}
        color={box.color}
      />
    ));
    return <div>{boxes}</div>;
  }
}

App.defaultProps = {
  allColors: [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "Darkorange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ],
};
