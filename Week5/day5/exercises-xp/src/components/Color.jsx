import { useState, useEffect } from "react";

function Color() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached!");
  }, []);

  const changeFavoriteColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <>
      <br />
      <br />
      <br />
      <h1>My favorite color is {favoriteColor}</h1>
      <button onClick={changeFavoriteColor}>Change color</button>
    </>
  );
}

export default Color;
