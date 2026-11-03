import { useState } from "react";
import Tours from "./components/Tours";
import { destinations } from "./data";
import NothingLeft from "./components/NothingLeft";

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
      {state.length == 0 ? <NothingLeft setState={setState} destinations={destinations}/> : <Tours state={state} remove={remove}/>}
    </>
  );
}

export default App;
