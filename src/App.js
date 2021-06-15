import Main from './Views/Main/Main';
import './App.css'
import NavBar from './components/NavBar/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <NavBar />

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