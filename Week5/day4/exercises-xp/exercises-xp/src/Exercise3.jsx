import "./Exercise.css";

const Exercise = () => {
  const styleHeader = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <>
      <h1 style={styleHeader}>hello</h1>
      <p className="para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <a href="">link</a>
      <form action="">
        <input type="text" name="" id="" />
      </form>
      <img
        src="https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
        alt=""
      />
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </>
  );
};

export default Exercise;
