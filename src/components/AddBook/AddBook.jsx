import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './AddBook.css'


const AddBook = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {" "}
      <Button variant="dark" onClick={handleShow} style={{ marginTop: "8px" }}>
        Add book
      </Button>
      <Modal show={show} onHide={handleClose} className="addcontainer"  bg="dark" >
        <Modal.Header closeButton>
          <Modal.Title>Add a new book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addmodal">
            <label htmlFor="">Book Cover URL </label>
            <input type="text" />
            <label htmlFor="">Book Name </label>
            <input type="text" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddBook;
