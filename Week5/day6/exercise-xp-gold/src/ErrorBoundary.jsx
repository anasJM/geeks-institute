import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: "",
    errorInfo: "",
  };

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    console.log("Error:", error);
    console.log("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <p>Error: Something went wrong!</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
