import Main from './Views/Main/Main';
import ContactUs from './Views/ContactUs/ContactUs';
import AboutUs from './Views/AboutUs/AboutUs';
import './App.css'
import NavBar from './components/NavBar/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Router exact path="/">
          <Main />
        </Router>
      </Switch>

      <footer>
        <div className="content">
          Website Development by &nbsp; <u>AVAMAE</u>
        </div>
      </footer>
    </Router>
  );
}

export default App;