import { useState } from "react";
import BooksFilter from "../filter/BooksFilter";
import "./Book.css"

import BookItem from "./BookItem";

const Book = ({ books }) => {

  const [filterYear, setFilterYear] = useState("2021");

  const OnChangeFilterSelect = (event) => {
    console.log(event.target.value)
    setFilterYear(event.target.value)
  }

  const booksMapped = books
  .filter((book) => book.dateRead.getFullYear().toString() === filterYear)
    .map((book) => (
    <BookItem 
    key={book.id}
    title={book.title}
    dateRead={book.dateRead}
    author={book.author}
    pageCount={book.pageCount}
    />
    ));


  return (
    <div>
      <BooksFilter OnChangeFilterSelect = {OnChangeFilterSelect}
                   filterYear = {filterYear}/>
      <div className="books-container">
      {booksMapped.length === 0 ?(
          <p>No leiste libros en el {filterYear}</p>
        ) : (
          booksMapped
        )
        }
      </div>
    </div>
  )
}

export default Book