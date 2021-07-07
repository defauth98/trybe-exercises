import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import About from './components/About'
import Home from './components/Home'
import Users from './components/Users'
import StrictAcess from './components/StrictAcess'

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users/1">Users</Link></li>
          <li><Link to="/acess">Stric Acess</Link></li>
          <li><Link to="/denied">Stric Acess Denied</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage='hi!' />}/> 
        <Route path="/acess" render={(props) => <StrictAcess {...props} user={{username: 'joao', password:'1234'}} />}/> 
        <Route path="/denied" render={(props) => <StrictAcess {...props} user={{username: 'daniel', password:'1234'}} />}/> 
      </Switch>
    </Router>
  );
}
