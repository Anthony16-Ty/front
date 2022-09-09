import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Books from "./components/Books";
import FormPage from "./components/FormPage";
// import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch(``)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  
  function addBooks(newBook) {
    const updatedBooks = [newBook, ...books];
    setBooks(updatedBooks);
  }

  function addReview(newReview) {
    const bookToUpdate = books.find((book) => {
      return book.id === newReview.book_id;
    });

    const updatedReviews = [newReview, ...bookToUpdate.reviews];
    bookToUpdate.reviews = updatedReviews;
    setBooks(
      books.map((book) => (book.id === bookToUpdate.id ? bookToUpdate : book))
    );

    setReviews(updatedReviews);
  }

  function handleUpdateLikes(updateLikes) {
    const updatedLikes = books.map((book) => {
      return book.id === updateLikes.id ? updateLikes : book;
    });
    setBooks(updatedLikes);
  }
  function handleDeleteReview(deletedReview) {
    const bookToUpdate = books.find((book) => {
      return book.id === deletedReview.book_id;
    });

    const updatedReview = bookToUpdate.reviews.filter((review) => {
      return review.id !== deletedReview.id;
    });

    bookToUpdate.reviews = updatedReview;
    setBooks(
      books.map((book) => (book.id === bookToUpdate.id ? bookToUpdate : book))
    );
    setReviews(updatedReview);
  }

  const booksToDisplay = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <NavBar />
     <br />
      <Routes>
      <Route exact path="/books" element={
        <Books
          handleUpdateLikes={handleUpdateLikes}
          addReview={addReview}
          books={books}
          booksToDisplay={booksToDisplay}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          handleDeleteReview={handleDeleteReview}
          reviews={reviews}
        />}
      />
      <Route exact path="/formpage" element={<FormPage  addBooks={addBooks} />} />
      
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />

      
      </Routes>
    </div>
  );
}

export default App;