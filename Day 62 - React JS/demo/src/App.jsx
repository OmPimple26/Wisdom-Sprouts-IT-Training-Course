import { useState, useEffect } from 'react';
import './App.css';
import MyComponent from './components/MyComponent'
import axios from 'axios'

function App() {
  // const [state, setState] = useState(false);


  // const [data, setData] = useState([]);

  // async function getData(){
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(res.data);
  //   setData(res.data);
  // }

  // useEffect(function(){
  //   getData();
  // }, [])


  useEffect(()=>{
    const timer = setInterval(()=>{
      console.log("Hello React");
    }, 1000)

    setTimeout(()=>{
      clearInterval(timer);
      console.log("Timer cleared");
    }, 5000)
  }, [])


  return (
    <>
    {/* {
      state ? <h1>Hello</h1> : <MyComponent/>
    } */}


    {/* <div>{data}</div>
    <button onClick={getData}>Get Data</button> */}


    <h1>Timer Example</h1>
    </>
  )
}

export default App
