import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Fillters from './Fillters';
import Home from './Home';
import Men from './Men';


export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {items:["book","test"]};
      }
    render() {
        return (
           <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/men">Men's Wear</Link>
            </li>
            <li>
                <Link to="/fillters">Fillter</Link>
            </li>
          </ul>
        </nav>

      <Switch>
          <Route path="/fillters" component={Fillters} />
          <Route path="/men" component={Men}/>
          <Route path="/" exact component={Home}/>
          
            
        </Switch>
        
        
      </div>
    </Router>
        );
    }
}
