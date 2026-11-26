// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import './App.css'
// import ProductList from './components/ProductList';
// import CircularLoader from './components/CircularLoader';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");
//   const [sort, setSort] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchProducts = async() => {
//     try{
//       setLoading(true);
//       const response = await axios.get("https://fakestoreapi.com/products");
//       setProducts(response.data);
//       setError("");
//     }catch(err){
//       setError("Something went wrong while fetching products...")
//     }finally{
//       setLoading(false);
//     }
//   }

//   useEffect(()=>{
//     fetchProducts();
//   },[]);

//   console.log(products);

//   return (
//     <>
//     {
//       loading ? <CircularLoader/> : <ProductList products={products}/>
//     }
//     </>
//   )
// }

// export default App


import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ProductList from "./components/ProductList";
import CircularLoader from "./components/CircularLoader";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setError("");
    } catch (err) {
      setError("Something went wrong while fetching products...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let filteredProducts = products.filter((product)=>{
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  })

  // Sort products by price
  if(sort==="low"){
    filteredProducts.sort((a,b) => a.price - b.price);
  }else if(sort==="high"){
    filteredProducts.sort((a,b) => b.price - a.price);
  }

  return (
    <>
      <Navbar/>

      {loading ? (
        <CircularLoader />
      ) : error ? (
        <h2 className="message">{error}</h2>
      ) : (
        <ProductList products={products} filteredProducts={filteredProducts}/>
      )}

      <Footer/>
    </>
  );
}

export default App;
