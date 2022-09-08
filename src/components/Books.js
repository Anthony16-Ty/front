import EachBook from "./EachBook";
import SearchBar from "./SearchBar";

const Books = ({
  booksToDisplay,
  addReview,

  searchTerm,
  onSearch,
  handleUpdateLikes,
  handleDeleteReview,
  reviews,
}) => {
  const bookList = booksToDisplay.map((book) => (
    <EachBook
      key={book.id}
      book={book}
      addReview={addReview}
      handleUpdateLikes={handleUpdateLikes}
      handleDeleteReview={handleDeleteReview}
      reviews={reviews}
    />
  ));

  return (
    <div>
      <h6>Book title: </h6>
      <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
      <u>
        <h1>Books</h1>
      </u>
      <br />
      {bookList}
    </div>
  );
};

export default Books;