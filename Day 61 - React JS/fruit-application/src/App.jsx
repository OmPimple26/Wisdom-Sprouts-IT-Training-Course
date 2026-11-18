import { Button } from "react-bootstrap";
import Cardex from "./components/Cardex";
import { flowers } from "../data";
import "./App.css";
import { useEffect, useState } from "react";
import Flower_form from "./components/Flower_form";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getData() {
    const res = await axios.get(
      // "https://65199e52818c4e98ac6093fd.mockapi.io/flower_shop",
      "https://6afc5fe6892984c4494b80e4.mockapi.io/flower_shop"
    );

    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <h2 className="container text-center mt-4 py-2">Flower Shop</h2>

      <Button variant="outline-success" className="m-4" onClick={handleShow}>
        Add
      </Button>
      <section
        id="cards"
        className="d-flex justify-content-between flex-wrap gap-2 mt-4 mx-auto"
        style={{ width: "1024px" }}
      >
        {data.length == 0 ? (
          <h1>Flowers are not available/Sold</h1>
        ) : (
          <>
            {data.map((f, index) => {
              return <Cardex key={index} {...f} />;
            })}
          </>
        )}
      </section>

      <Flower_form
        show={show}
        handleShow={handleShow}
        handleClose={handleClose}
        getData={getData}
      />
    </>
  );
}

export default App;
