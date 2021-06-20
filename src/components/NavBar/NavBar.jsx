import {Link} from "react-router-dom"
import './NavBar.css'
import CompanyLogo from '../../Resources/Logo.svg'
import LightButton from "../LightButton/LightButton"

const  NavBar = () => {
  return (
    <nav className="navbar">
      <img id="logo" src={CompanyLogo} alt=""/>
      <div className="buttons-container">
        <Link to="/" className="nav-button">
          <button>
            HOME
          </button>
        </Link>
        <Link to="/about-us" className="nav-button">
          <button>
            ABOUT US
          </button>
        </Link>
        <Link to="/contact-us" className="nav-button">
          <button>
            CONTACT US
          </button>
        </Link>
        <LightButton text="Log in" ID="nav-bar"/>
      </div>
    </nav>
  )
}

export default NavBar