import { useState } from "react";

function Forms() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [textArea, setTextArea] = useState("halo halo halo!");
  const [selectedCar, setSelectedCar] = useState("volvo");

  const mySubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    if (isNaN(data.userAge)) {
      setErrorMessage("your age must be a number");
    } else if (data.userAge) {
      setErrorMessage("");
      alert(`you are submitting ${data.userInput}`);
    }
  };

  let header = "";
  if (username !== "" && age !== 0) {
    header = (
      <h1>
        Hello {username} {age}
      </h1>
    );
  }

  let errMessage = "";
  if (errorMessage !== "") {
    errMessage = errorMessage;
  }

  return (
    <>
      {header}
      <form action="" onSubmit={mySubmitHandler}>
        {/* usename */}
        <label htmlFor="user-input">Enter your name:</label>
        <br />
        <input
          type="text"
          id="user-input"
          name="userInput"
          placeholder="Type here"
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* age */}
        <br />
        <br />
        <label htmlFor="user-age">Enter your age:</label>
        <br />
        <input
          type="text"
          id="user-age"
          name="userAge"
          placeholder="Type here"
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <textarea name="" id="" rows={4} value={textArea}></textarea>
        <br />
        <select
          value={selectedCar}
          onChange={(e) => setSelectedCar(e.target.value)}
        >
          <option value="dacia">Dacia</option>
          <option value="volvo">Volvo</option>
          <option value="seat">Seat</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <h3>{errMessage}</h3>
    </>
  );
}

export default Forms;
