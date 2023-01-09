import React from 'react'
import Book from "../Book/Book"
import "./BooksList.css"
import {Button} from "react-bootstrap"

const BooksList = ({books}) => {
  return (
    <div className="bookslist">
      <div className="filterbtn">
        <Button variant="success" >
          {" "}
          filter by done{" "}
        </Button>
        <Button variant="danger" >
          {" "}
          filter by not done{" "}
        </Button>
        <Button variant="info"  >
          {" "}
          Reset
        </Button>
      </div>
<div className='bookss'>

      {books.map((book) => (
        <Book book={book} />
        ))}
        </div>
    </div>
  );
}

export default BooksList