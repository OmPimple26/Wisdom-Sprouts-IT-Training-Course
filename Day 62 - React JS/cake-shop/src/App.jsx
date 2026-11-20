import axios from "axios";
import "./App.css";
import Cardex from "./components/Cardex";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Cake_Form from "./components/Card_Form";
import Cake_Form_Edit from './components/Cake_Form_Edit';

function App() {
  // ADD_Cake
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Edit_Cake
  const [id, setId] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (id) => {
    // console.log(id, "!@#");
    setId(id);
    setShowEdit(true);
  };

  const [state, setState] = useState([]);

  async function getData() {
    const res = await axios.get(
      "https://6afc5fe6892984c4494b80e4.mockapi.io/flower_shop",
    );

    setState(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  // Delete function
  async function deleteCake(id) {
    await axios.delete(
      `https://6afc5fe6892984c4494b80e4.mockapi.io/flower_shop/${id}`,
    );

    toast.error("Cake has been deleted successfully...");

    getData();
  }

  return (
    <>
      <h2 className="heading">Welcome to Cake Shop 🍰🎂</h2>

      <button
        onClick={handleShow}
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          padding: "4px 8px",
          border: "2px solid black",
          borderRadius: "6px",
          marginLeft: "50px",
          backgroundColor: "greenyellow",
        }}
      >
        Add
      </button>

      <section id="wrapper">
        {state.map((c) => {
          return <Cardex key={c.id} {...c} deleteCake={deleteCake} handleShowEdit={handleShowEdit}/>;
        })}
      </section>

      <ToastContainer />

      {/* Add Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cake_Form getData={getData} handleClose={handleClose} />
        </Modal.Body>
      </Modal>

      {/* Edit Modal */}
        <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Cake</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Cake_Form_Edit id={id} getData={getData} handleCloseEdit={handleCloseEdit} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;
