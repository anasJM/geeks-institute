import { useState } from "react";

function Exercise1() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState(0);
  const form = document.querySelector("form");

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <>
      <h1>New book</h1>
      <form action="" name="user-info-form" onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <br />
        <br />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <br />
        <br />
        <label htmlFor="genre">Genre</label>
        <input type="text" id="genre" name="genre" />
        <br />
        <br />
        <label htmlFor="year">Year published</label>
        <input type="number" id="year" name="year" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Exercise1;
