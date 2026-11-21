import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [state,setState] = useState([]);

  async function createData(){
    await axios.post("https://6afc5fe6892984c4494b80e4.mockapi.io/fruits", {name:'banana', price:120});
    alert("Successfull");
  }

  function done(){
    createData();
  }

  async function readData(){
    let res = await axios.get("https://6afc5fe6892984c4494b80e4.mockapi.io/fruits");
    // console.log(res);
    console.log(res.data);
    setState(res.data);
  }

  function getData(){
    readData();
  }

  return (
    <>
      <button onClick={done}>Generate</button>
      <button onClick={getData}>Get Data</button>

      {
        state.map((i)=>{
          return(
            <>
              <h1>{i.name}</h1>
              <h1>{i.price}</h1>
            </>
          )
        })
      }
    </>
  )
}

export default App