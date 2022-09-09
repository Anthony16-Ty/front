import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = ({ addBooks }) => {
  let history = useNavigate();
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    likes: 0,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewBook({ ...newBook, [name]: value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    const addNewBook = {
      title: newBook.title,
      author: newBook.author,
      likes: 0,
    };

    fetch(`http://localhost:9292/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewBook),
    })
      .then((response) => response.json())
      .then(addBooks);
    setNewBook({
      title: "",
      author: "",
      likes: 0,
    });
    history.push("/books");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add book: </h4>

        <input
          type="text"
          placeholder="Book Title"
          name="title"
          value={newBook.title}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newBook.author}
          onChange={handleChange}
        ></input>
        <br />

        <input className="button" type="submit" />
      </form>
      <img
        alt="book"
        src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      ></img>
    </div>
  );
};


export default FormPage;