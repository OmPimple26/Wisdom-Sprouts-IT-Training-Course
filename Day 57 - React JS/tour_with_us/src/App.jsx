import { useState } from "react";
import Tours from "./components/Tours";
import { destinations } from "./data";

function App() {
  const [state, setState] = useState(destinations);

  function remove(id) {
    const result = state.filter(function (items) {
      return items.id != id;
    });

    setState(result);
  }

  return (
    <>
      <Tours state={state} remove={remove} />
    </>
  );
}

export default App;
