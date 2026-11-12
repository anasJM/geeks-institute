import { useState } from "react";

function Phone() {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState(2020);

  const changeColor = () => {
    setColor("blue");
  };

  return (
    <>
      <br />
      <br />
      <br />
      <h1>My phone is {brand}</h1>
      <h2>
        is it a {color} {model} from {year}
      </h2>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default Phone;
