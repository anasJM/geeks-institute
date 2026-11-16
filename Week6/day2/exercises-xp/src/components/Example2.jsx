import data from "../data/data.json";
import { Component } from "react";

class Example2 extends Component {
  state = {};
  render() {
    return (
      <>
        <ul>
          {data.Skills.map((skill, index) => (
            <div key={index}>
              <h4>{skill.Area}</h4>
              <ul>
                {skill.SkillSet.map((item, index) => (
                  <li key={index}>{item.Name}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </>
    );
  }
}

export default Example2;
