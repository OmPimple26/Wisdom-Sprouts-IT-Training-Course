import './Navbar.css'
import burger from '../assets/chicken_burger.jpg'

const Navbar = () => {
  return (
    <div id='navbar-wrapper'>
      <img src={burger} alt="burger" />
      <h4>Buy Now</h4>
    </div>
  )
}

export default Navbar
