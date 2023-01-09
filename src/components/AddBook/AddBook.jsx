import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './AddBook.css'
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../../Redux/Actions/action";



const AddBook = () => {
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const [newBook, setNewBook] = useState({
  id: uuidv4(),
  img: "",
  title: "",
  isDone: true,
});

const handleChange = (e) => {
  setNewBook({ ...newBook, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
dispatch(addBook(newBook))
setShow(false);
};

  return (
    <div>
      {" "}
      <Button variant="dark" onClick={handleShow} style={{ marginTop: "8px" }}>
        Add book
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        className="addcontainer"
        bg="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addmodal">
            <label htmlFor="">Book Cover URL </label>
            <input type="text" name="img" onChange={handleChange} />
            <label htmlFor="">Book Name </label>
            <input type="text" name="title" onChange={handleChange} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBook;
