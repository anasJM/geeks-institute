import { useState } from "react";

function Events() {
  const [isLogedOn, setIsLogedOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked!");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`the ‘Enter key’ was pressed, your input is ${e.target.value}`);
    }
  };

  const toggle = (e) => {
    if (isLogedOn) {
      setIsLogedOn(false);
      e.target.textContent = "OFF";
    } else {
      setIsLogedOn(true);
      e.target.textContent = "ON";
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <button onClick={clickMe}>Alert</button>
      <br />
      <input type="text" onKeyDown={handleKeyDown} placeholder="type here" />
      <br />
      <button onClick={toggle}>ON</button>
    </>
  );
}

export default Events;
