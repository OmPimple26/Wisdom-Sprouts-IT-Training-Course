import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Flower_form({ show, handleShow, handleClose, getData }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function sendData(e) {
    e.preventDefault();

    axios.post("https://65199e52818c4e98ac6093fd.mockapi.io/flower_shop", {
      name: name,
      image: image,
    });

    alert("Added Successfully...");

    handleClose();
    getData();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center fs-5">
            🌻🌼Add Your favourite Flowers 🪷🌸
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter flower name..."
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image Url:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url..."
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="outline-dark" type="submit">
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Flower_form;
