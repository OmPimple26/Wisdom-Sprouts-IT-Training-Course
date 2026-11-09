const products = [
  {
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
  },
  {
    id: 2,
    name: "Mobile Phone",
    price: 25000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2000,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 3500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
  },
  {
    id: 5,
    name: "Digital Camera",
    price: 45000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 4500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600"
  },
  {
    id: 7,
    name: "Wireless Mouse",
    price: 1200,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600"
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 3000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600"
  },
  {
    id: 9,
    name: "Tablet",
    price: 22000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600"
  },
  {
    id: 10,
    name: "Computer Monitor",
    price: 15000,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600"
  },
  {
    id: 11,
    name: "Running Shoes",
    price: 2800,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
  },
  {
    id: 12,
    name: "Casual T-Shirt",
    price: 799,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
  },
  {
    id: 13,
    name: "Denim Jacket",
    price: 2200,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
  },
  {
    id: 14,
    name: "Travel Backpack",
    price: 1800,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600"
  },
  {
    id: 15,
    name: "Sunglasses",
    price: 999,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
  },
  {
    id: 16,
    name: "Leather Wallet",
    price: 1200,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600"
  },
  {
    id: 17,
    name: "Modern Sofa",
    price: 25000,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
  },
  {
    id: 18,
    name: "Comfortable Chair",
    price: 4500,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
  },
  {
    id: 19,
    name: "Table Lamp",
    price: 1500,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600"
  },
  {
    id: 20,
    name: "Coffee Table",
    price: 6500,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600"
  },
  {
    id: 21,
    name: "Electric Blender",
    price: 2500,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600"
  },
  {
    id: 22,
    name: "Coffee Maker",
    price: 5500,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
  },
  {
    id: 23,
    name: "Refrigerator",
    price: 32000,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600"
  },
  {
    id: 24,
    name: "Indoor Plant",
    price: 599,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600"
  },
  {
    id: 25,
    name: "Programming Book",
    price: 650,
    category: "Books",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
  },
  {
    id: 26,
    name: "Football",
    price: 1200,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600"
  },
  {
    id: 27,
    name: "Mountain Bicycle",
    price: 12000,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600"
  },
  {
    id: 28,
    name: "Perfume",
    price: 1800,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600"
  },
  {
    id: 29,
    name: "Travel Suitcase",
    price: 3500,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600"
  },
  {
    id: 30,
    name: "Wireless Earbuds",
    price: 2200,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600"
  }
];

export default products;