import "./BookForm.css";
import { useState } from "react";

const BookForm = ({ onBookDataSaved, setShowForm }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [readDate, setReadDate] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeAuthorHandler = (event) => {
    setAuthor(event.target.value);
  };
  const changePageCountHandler = (event) => {
    setPageCount(event.target.value);
  };
  const changeReadDateHandler = (event) => {
    setReadDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const bookData = {
      title,
      author,
      pageCount,
      dateRead: new Date(readDate),
    };
    // console.log(bookData)
    onBookDataSaved(bookData);
    setTitle("");
    setAuthor("");
    setPageCount("");
    setReadDate("");
  };

  const handleShowFormFalse = () => {
    setShowForm(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-book-controls">
        <div className="new-book-control">
          <label>Título</label>
          <input onChange={changeTitleHandler} type="text" value={title} />
        </div>
        <div className="new-book-control">
          <label>Autor</label>
          <input onChange={changeAuthorHandler} type="text" value={author} />
        </div>
        <div className="new-book-control">
          <label>Páginas</label>
          <input
            onChange={changePageCountHandler}
            value={pageCount}
            type="number"
            min="1"
            step="1"
          />
        </div>
        <div className="new-book-control">
          <label>¿Cuándo terminaste de leerlo?</label>
          <input
            onChange={changeReadDateHandler}
            value={readDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
        <div className="new-book-control">
          <label htmlFor="">Category</label>
          <input type="text" value="agregar mirando la clase" />
        </div>
        <div className="new-book-control">
          <label htmlFor="">Tipo</label>
          <select name="" id=""className="new-book-control">
            <option value="">Ficcion</option>
            <option value="">Aventura</option>
          </select>
        </div>
      </div>
      <div className="new-book-actions">
        <button type="submit">Agregar lectura</button>
      </div>
      <div className="new-book-actions">
        <button type="submit">Agregar</button>
        <button onClick={handleShowFormFalse}>Cancelar</button>
      </div>
    </form>
  );
};

export default BookForm;
