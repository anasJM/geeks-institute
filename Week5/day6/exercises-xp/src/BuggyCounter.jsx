import React from "react";

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => {
      const newCounter = prevState.counter + 1;
      if (newCounter >= 5) {
        throw new Error("I crashed!");
      }
      return { counter: newCounter };
    });
  };

  render() {
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default BuggyCounter;
