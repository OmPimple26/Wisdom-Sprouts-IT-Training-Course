import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";

function Cake_Form_Edit({ getData, handleCloseEdit, id }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // console.log(name,image,price,"!@!@")

  async function getDataaaaaa() {
    const res = await axios.get(
      `https://6afc5fe6892984c4494b80e4.mockapi.io/cakes/${id}`,
    );

    setName(res.data.name);
    setImage(res.data.image);
    setPrice(res.data.price);
  }

  useEffect(() => {
    getDataaaaaa();
  }, []);

  async function update_add_Cake(e) {
    e.preventDefault();

    await axios.put(
      `https://6afc5fe6892984c4494b80e4.mockapi.io/cakes/${id}`,
      { name: name, image: image, price: price },
    );

    toast.success("Cake Updated successully..");

    getData();

    handleCloseEdit();
  }

  return (
    <>
      <Form onSubmit={update_add_Cake}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            value={name}
            type="text"
            placeholder="Enter cake"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            value={image}
            type="text"
            placeholder="image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}
            type="text"
            placeholder="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
}

export default Cake_Form_Edit
