import './App.css';
import Signup from './components/Signup'
import Profile from './components/Profile'
import Login from './components/Login'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Signup /></Route>
          <Route path='/Profile'><Profile /></Route>
          <Route path='/Login'><Login /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

