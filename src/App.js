import Main from './Views/Main/Main';
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
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

      <Switch>
        <Route path="/about">
          <div>About Us</div>
        </Route>
        <Router exact path="/">
          <Main />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;