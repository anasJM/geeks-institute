import React from "react";
import Child from "./Child";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  shouldComponentUpdate = () => {
    return true;
  };

  changeFavoriteColor = () => {
    this.setState({
      favoriteColor: "blue",
    });
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevState.favoriteColor !== this.state.favoriteColor) {
      setTimeout(() => {
        this.setState({
          favoriteColor: "yellow",
        });
        console.log("after update");
      }, 3000);
    }
  };

  render() {
    return (
      <>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeFavoriteColor}>Change color</button>
      </>
    );
  }
}

export default Color;
