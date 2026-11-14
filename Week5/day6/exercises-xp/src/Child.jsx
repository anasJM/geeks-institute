import { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  componentWillUnmount = () => {
    alert("unmouted hello world!");
  };

  changeState = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return <h1>Hello World!</h1>;
  }
}

export default Child;
