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

    fetch(`https://presto-backend-app.herokuapp.com//books`, {
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
    <div className="form-image">
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
      <div className="mal-1">
      <img
        alt="book"
        src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
      ></img>
    </div>
    </div>
  );
};


export default FormPage;