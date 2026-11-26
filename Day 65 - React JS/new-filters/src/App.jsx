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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");

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

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  // Sort products by price
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <div style={{ width: "96%", margin: "auto" }}>
        <Navbar />

        <section className="filters">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </section>

        <section className="category-filters">
          <button
            onClick={() => {
              setCategory("All");
            }}
          >
            All
          </button>{" "}
          <button
            onClick={() => {
              setCategory("men's clothing");
            }}
          >
            Men
          </button>{" "}
          <button
            onClick={() => {
              setCategory("women's clothing");
            }}
          >
            Women
          </button>{" "}
          <button
            onClick={() => {
              setCategory("electronics");
            }}
          >
            Electronics
          </button>{" "}
          <button
            onClick={() => {
              setCategory("jewelery");
            }}
          >
            Jwellery
          </button>
        </section>

        {loading ? (
          <CircularLoader />
        ) : error ? (
          <h2 className="message">{error}</h2>
        ) : (
          <ProductList products={filteredProducts} />
        )}

        <Footer />
      </div>
    </>
  );
}

export default App;
