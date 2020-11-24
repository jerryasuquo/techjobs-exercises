import React from "react";
import CardList from "./components/CardList";
import { friends } from "./components/array";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: friends,
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        this.setState({
          friends: jsonRes,
        });
      })
      .catch((err) => console.log(err));
  }

  handleChange = (e) => {
    this.setState(
      {
        searchInput: e.target.value,
      },
      () => console.log("InputTest", this.state.searchInput)
    );
  };

  render() {
    const filteredFriends = this.state.friends.filter((friend) => {
      return friend.name.toLowerCase().includes(this.state.searchInput);
    });

    return (
      <div>
        <form id="search-box">
          <input
            type="text"
            placeholder="search..."
            id="searchInput"
            onChange={this.handleChange}
          />
        </form>
        <CardList myFriends={filteredFriends} />
      </div>
    );
  }
}

export default App;
