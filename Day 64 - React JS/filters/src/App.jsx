import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  // console.log(search);

  const filteredArray = data.filter(function (item) {
    return item.title.toLowerCase().includes(search.toLowerCase())
  })

  async function getData() {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  data.forEach((item)=>{
    console.log(item.category);
  })

  function button_filter(category){
    let result = data.filter(function(item){
      return item.category.includes(category);
    })
    setData(result);
  }


  return (
    <>
    <input type="text" placeholder="search your product..." onChange={(e) => {setSearch(e.target.value);}}/>
    <button>Search</button>
    <button onClick={()=>{getData()}}>All</button> 
    <button onClick={()=>{button_filter("electronics")}}>Electronics</button> 
    <button onClick={()=>{button_filter("women's clothing")}}>Women</button> 
    <button onClick={()=>{button_filter("men's clothing")}}>Men</button>
    <button onClick={()=>{button_filter("jewelery")}}>Jwellery</button>

    {
      data.map(function(items){
        const{id,title,image} = items;
          return (
            <>
            <h4 key={id}>{id}.{title}</h4>
            <img src={image} alt='img' height={"100px"} />
            </>
          )
        })
      }
    </>
  );
}

export default App;
