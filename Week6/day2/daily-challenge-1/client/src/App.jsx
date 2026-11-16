import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = { message: "", postData: "" };

  submitInput = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: data.input,
      }),
    });

    const postMessage = await response.json();
    this.setState({
      postData: postMessage.input,
    });
  };

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3000/api/hello");
      const data = await response.json();
      this.setState({
        message: data.message,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <h1>Post to server:</h1>
        <form action="" onSubmit={this.submitInput}>
          <input type="text" name="input" placeholder="write something" />
          <input type="submit" value="Submit" />
        </form>
        {this.state.postData ? (
          <h2>
            I received your post request. this is what you sent me:{" "}
            {this.state.postData}
          </h2>
        ) : null}
      </>
    );
  }
}

export default App;
