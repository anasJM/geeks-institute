import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
  }
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    return <h1>An Error has occured</h1>;
  }
}

export default ErrorBoundary;
