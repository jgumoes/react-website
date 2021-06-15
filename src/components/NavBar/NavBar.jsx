import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './NavBar.css'
import CompanyLogo from '../../Resources/Logo.svg'

const  NavBar = () => {
  return (
    <nav className="navbar">
      <img id="logo" src={CompanyLogo} alt=""/>
      <div className="buttons-container">
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
        <button id="login-button">Log in</button>
      </div>
    </nav>
  )
}

export default NavBar