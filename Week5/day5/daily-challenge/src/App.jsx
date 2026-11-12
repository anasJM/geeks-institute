import "./App.css";
import { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const addVote = (index) => {
    const updatedLanguages = languages.map((language, j) => {
      if (index === j) {
        return { ...language, votes: language.votes + 1 };
      } else {
        return language;
      }
    });

    setLanguages(updatedLanguages);
  };

  return (
    <>
      <h1 className="font-bold text-4xl text-center">Vote your language</h1>
      {languages.map((language, index) => (
        <div className="flex max-w-sm px-14 py-4 items-center justify-between mx-auto bg-blue-100 my-4">
          <p>{language.votes}</p>
          <p>{language.name}</p>
          <button
            onClick={() => addVote(index)}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2"
          >
            Click Here
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
