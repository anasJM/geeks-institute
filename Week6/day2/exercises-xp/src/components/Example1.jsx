import data from "../data/data.json";
import { Component } from "react";

class Example1 extends Component {
  state = {};
  render() {
    return (
      <>
        <ul>
          {data.SocialMedias.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default Example1;
