import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './NavBar.css'

const  NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" class="nav-button">
        <button>
          HOME
        </button>
      </Link>
      <Link to="/about" class="nav-button">
        <button>
          ABOUT US
        </button>
      </Link>
      <Link to="/contact" class="nav-button">
        <button>
          CONTACT US
        </button>
      </Link>
    </nav>
  )
}

export default NavBar