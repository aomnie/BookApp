import React, { useState } from "react";
import "./Book.css";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeDone, editBook } from "../../Redux/Actions/action";

const Book = ({ bookDetails }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [read, setRead] = useState(bookDetails);

  const handleDone = () => {
    dispatch(changeDone({ id: bookDetails.id }));
  };

  const handleChange = (e) => {
    setRead({ ...read, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    dispatch(editBook(read));
    setShow(false);
  };

  return (
    <div className="book-card ">
      <img
        src={bookDetails.img}
        alt={bookDetails.title}
        className="book-cover"
      />
      <h1 className="book-title"> {bookDetails.title} </h1>

      <button
        className={`read-button ${bookDetails.isDone ? "read" : "Done"}`}
        onClick={handleDone}
      >
        {bookDetails.isDone ? "Done" : "Read"}
      </button>
      <button className="editbtn" onClick={handleShow}></button>

      {/* edit modal */}
      <Modal show={show} onHide={handleClose} className="themed-modal">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <label>Book Cover</label>
          <input
            type="text"
            name="img"
            defaultValue={bookDetails.img}
            onChange={handleChange}
          />
          <label>Book Title</label>
          <input
            type="text"
            name="title"
            defaultValue={bookDetails.title}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Book;
