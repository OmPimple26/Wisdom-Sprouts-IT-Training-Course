import Navbar from "../components/Navbar"
import Fruits from './Fruits'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <h1 style={{textAlign:'center', padding:'0.6rem 0', fontFamily:'cursive', color:'#e74c3c'}}>Welcome to Fruits Shop</h1>
      <Fruits/>
    </div>
  )
}

export default Home