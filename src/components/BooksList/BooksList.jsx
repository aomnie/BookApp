import React, { useState, useEffect } from "react";
import Book from "../Book/Book"
import "./BooksList.css"
import {Button} from "react-bootstrap"
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { changeDone } from "../../Redux/Actions/action";


const BooksList = () => {

  const books = useSelector((state) => state.bookReducer.booksList);

  const dispatch = useDispatch()
  const [booksList, setBooksList] = useState([]);

  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);

 const handleBooksList = () => {
   if (done === true) {
     setBooksList(booksList.filter((task) => task.isDone === true));
   } else if (notDone === true) {
     setBooksList(booksList.filter((task) => task.isDone === false));
   }
 };
 
  useEffect(() => {
    setBooksList(books);
    handleBooksList();
  }, [done, notDone, books]);

  const handleDone = () => {
    setDone(true);
    setNotDone(false);
  };
  const handleNotDone = () => {
    setDone(false);
    setNotDone(true);
  };

  const handleReset = () => {
    setDone(false);
    setNotDone(false);
    dispatch(changeDone());
  };




  return (
    <div className="bookslist">
      <div className="filterbtn">
        <Button variant="success" onClick={handleDone}>
          {" "}
          filter by done{" "}
        </Button>
        <Button variant="danger" onClick={handleNotDone}>
          {" "}
          filter by not done{" "}
        </Button>
        <Button variant="info" onClick={handleReset}>
          {" "}
          Reset
        </Button>
      </div>
      <div className="bookss">
        {booksList.map((bookDetails) => (
          <Book bookDetails={bookDetails} />
        ))}
      </div>
    </div>
  );
}

export default BooksList