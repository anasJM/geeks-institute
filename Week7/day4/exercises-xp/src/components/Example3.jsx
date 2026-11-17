import data from "../data/data.json";
import { Component } from "react";

class Example3 extends Component {
  state = {};
  render() {
    return (
      <>
        {data.Experiences.map((experience, index) => (
          <article key={index}>
            <img
              src={experience.logo}
              alt={experience.companyName}
              width="150px"
            />
            <br />
            <a href={experience.url}>{experience.companyName}</a>
            <h6>{experience.roles[0].title}</h6>
            <p>
              {experience.roles[0].startDate} {experience.roles[0].location}
            </p>
            <p>{experience.roles[0].description}</p>
          </article>
        ))}
      </>
    );
  }
}

export default Example3;
