import { useState } from "react";
import "./App.css";
import { CiCloudSun } from "react-icons/ci";
import { CiCloudMoon } from "react-icons/ci";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>
//     </>
//   )
// }


// function App() {
//   const [state, setState] = useState(0)

//   function change(){
//     setState(state+1);
//   }

//   console.log("Hello", {state});

//   return (
//     <>
//     <h1 onClick={change}>{state}</h1>
//     </>
//   )
// }


// function App() {
//   const [color, setColor] = useState("orange");

//   function changeColor() {
//     setColor("pink");
//   }

//   return (
//     <>
//       <div style={{height: "100vh", width: "100%", background: color}}>
//         <button onClick={changeColor}>Click Here</button>
//       </div>
//     </>
//   );
// }


// function App() {
//   const [state, setState] = useState(true);

//   function changeBackground() {
//     setState(!state);
//   }

//   return (
//     <>
//       <div style={{height: "100vh", width: "100%", background: state?'black':'inherit'}}>
//         {/* <button onClick={changeBackground}>Change Background</button> */}
//         <button onClick={changeBackground} style={{ color: state ? "orange" : "blue", fontSize: "50px" }}>{state ? <CiCloudSun /> : <CiCloudMoon />}</button>
//         <h2 style={{textAlign:'center', color:state?'blue':'orange'}}>Welcome to Dark mode and light mode</h2>
//         <p style={{color: state? 'white': 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
//       </div>
//     </>
//   );
// }


function App() {
  const [count,setCount] = useState(0);
  
  function Increment(){
    setCount(count + 1);
  }
 
  function Decrement(){
    setCount(count - 1);
  }
 
  function Reset(){
    setCount(0);
  }
 
  return(
    <div style={{height:'100vh',background:'orange',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <span style={{ color: count > 0 ? 'green' : count < 0 ? 'red' : 'blue' }}>{count}</span>
      <div>
        <button onClick={Increment} >+</button>
        <button onClick={Decrement} >-</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default App;
