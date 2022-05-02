import { useState } from "react";
import BookCard from "../ui/BookCard";
import ReadDate from "./ReadDate";
import "./BookItem.css";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  //[a, b] Arreglo de 2 posiciones
  const [newTitle, setNewTitle] = useState(title) 
  // newTitle = title = "Name of book"
  //const [a, b] = [1,2]Arreglo de 2 posiciones
  //a = 1
  //b= 2

  const clickHandler = () => {
      console.log("click")
      setNewTitle('Actualizado')
  }

  return (
    <BookCard className="book-item-container">

      <h2>{newTitle}</h2>
      <h3>{author}</h3>
      <ReadDate dateRead = {dateRead}/>
      <p>{pageCount} paginas</p>
      <button onClick={clickHandler}> Clickeame </button>
    </BookCard>
  );
};

export default BookItem;