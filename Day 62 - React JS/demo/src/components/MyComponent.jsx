import { useState , useEffect } from 'react';
import '../App.css';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(2);


  // console.log("Component is getting updated", count);

  // useEffect(function(){
  //   console.log("Component mount");
  //   console.log("Nice");
  //   console.log("Wow");
  
  // function random(){
  //   return Math.random();
  // }

  // console.log(random());
  // },[])


  function printName(){
    console.log("Hello Om", count);
  }

  useEffect(function(){
    printName();
  }, [count])

  return (
    <div style={{display:'flex', alignItems:'center', padding:'4px', margin:'4px'}}>
      <span style={{fontSize:'2rem'}}>{count}</span>
      <button style={{fontSize:'2rem'}} onClick={()=>{setCount(count+1)}}>+</button>
      <span style={{fontSize:'2rem'}}>{state}</span>
      <button style={{fontSize:'2rem'}} onClick={()=>{setState(state*2)}}>*</button>
    </div>
  )
}

export default MyComponent
