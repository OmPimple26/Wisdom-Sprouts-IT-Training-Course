import { useState } from "react";
import { foods } from "../data.js";
import Home from "./pages/Home.jsx";
import "./App.css";
import EmptyState from "./components/Nothing_left.jsx";

function App() {
  const [state, setState] = useState(foods);

  function onload() {
    setState(foods);
  }

  function removeItem(id) {
    let result = state.filter((item) => {
      return item.id != id;
    });

    setState(result);
  }

  return (
    <>
      {state.length == 0 ? (
        <EmptyState onload={onload} />
      ) : (
        <Home state={state} removeItem={removeItem} />
      )}
    </>
  );
}

export default App;
