import "./NewBook.css";
import BookForm from "./BookForm";
import { useState } from "react";


const NewBook = ({onBookAdded }) => {

  const saveBookDataHandler = (bookData) => {

    const bookDataWithId = {
      ...bookData,
      id: Math.random(),
    };
    onBookAdded(bookDataWithId)
  } 

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };


  return (
    <div className="new-book">
      {!showForm && (
        <button onClick={handleShowForm} className="btn">
          Agregar Lectura
        </button>
      )}
      {showForm && (
        <BookForm
          onBookDataSaved={saveBookDataHandler}
          setShowForm={setShowForm}
        />
      )}
  </div>
  );
};

export default NewBook;