import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  async function getData() {
    try{
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
      setFilteredData(res.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Search functionality
  function searchProducts(value){
    setSearch(value);
    const result = data.filter((item)=>{return item.title.toLowerCase().includes(value.toLowerCase());});
    setFilteredData(result);
  }

  // Category filter
  function button_filter(category) {
    const result = data.filter((item)=>{return item.category === category;});
    setFilteredData(result);
    setSearch("");
  }

  // Show all products
  function showAll() {
    setFilteredData(data);
    setSearch("");
  }

  return (
    <>
      <input type="text" placeholder="Search your product..." value={search} onChange={(e) => searchProducts(e.target.value)}/>

      <button onClick={showAll}>All</button>
      <button onClick={() => button_filter("electronics")}>Electronics</button>
      <button onClick={() => button_filter("women's clothing")}>Women</button>
      <button onClick={() => button_filter("men's clothing")}>Men</button>
      <button onClick={() => button_filter("jewelery")}>Jewellery</button>

      {
        filteredData.map((item) => {
          const{id,title,image} = item;

          return (
            <div key={id}>
              <h4>{id}. {title}</h4>
              <img src={image} alt={title} height="100px"/>
            </div>
          );
        })
      }
    </>
  );
}

export default App;
