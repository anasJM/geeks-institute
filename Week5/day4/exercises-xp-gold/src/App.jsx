import "./App.css";
import Card from "./Card";

function App() {
  const celebrities = [
    {
      title: "Bob Dylan",
      imageUrl:
        "https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Bob_Dylan",
      description:
        "Bob Dylan is an American singer, songwriter and cultural icon who has influenced music for more than five decades.",
    },
    {
      title: "Paul McCartney",
      imageUrl:
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/MaccaLyricsRFH051121_%2815_of_18%29_%28updated%29_%28cropped%29.jpg/500px-MaccaLyricsRFH051121_%2815_of_18%29_%28updated%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
      buttonLabel: "Go to Wikipedia",
      buttonUrl: "https://en.wikipedia.org/wiki/Paul_McCartney",
      description:
        "Paul McCartney is an English singer, songwriter, and musician best known as a member of the Beatles.",
    },
  ];

  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

  return (
    <>
      {celebrities.map((celebrity) => (
        <Card
          title={celebrity.title}
          imageUrl={celebrity.imageUrl}
          description={celebrity.description}
          buttonLabel={celebrity.buttonLabel}
          buttonUrl={celebrity.buttonUrl}
        />
      ))}

      <ul className="max-w-md mx-auto mt-6">
        {planets.map((list, index) => (
          <li key={index} className="border p-3 mb-2 rounded bg-gray-100">
            {list}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
