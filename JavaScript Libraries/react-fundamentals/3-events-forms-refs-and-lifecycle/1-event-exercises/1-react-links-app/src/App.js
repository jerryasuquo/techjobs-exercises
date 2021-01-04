import React, { Component } from "react";
import CustomLink from "./CustomLinks";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { linksDisabled: false };
  }

  handleButtonClick = () => {
    this.setState({ linksDisabled: !this.state.linksDisabled });
  };

  handleLinkClick = (event) => {
    if (this.state.linksDisabled) {
      event.preventDefault();
    }
  };

  render() {
    let linksArr = [
      {
        href: "https://inf-paces-school.netlify.app/courses",
        text: "Inf-Paces School",
      },
      {
        href: "https://facebook.github.io/react/",
        text: "React Docs",
      },
      {
        href: "https://www.codewars.com/dashboard",
        text: "CodeWars",
      },
    ];
    let links = linksArr.map((link, index) => {
      <CustomLink
        key={index}
        href={link.href}
        text={link.text}
        handleClick={this.handleLinkClick}
      />;
    });

    let buttonText = !this.state.linksDisabled
      ? "Enable Links"
      : "Disable Links";

    let headerText = this.state.linksDisabled ? "Enabled" : "Disabled";

    return (
      <div>
        <h1>Here are some of my favorite links!</h1>
        <h2>Links are currently {headerText.toUpperCase()}</h2>
        {links}
        <button onClick={this.handleButtonClick}>{buttonText}</button>
      </div>
    );
  }
}
