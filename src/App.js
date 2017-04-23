import React, { Component } from 'react'
import Home from './components/Home'
import Discover from './components/Discover'
import Understand from './components/Understand'
import Contribute from './components/Contribute'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// import data from './data';

class App extends Component{
    render(){
        return(
            <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/discover" component={Discover}/>
                <Route path="/understand" component={Understand}/>
                <Route path="/contribute" component={Contribute}/>
            </div>
            </Router>
        );
    }
};
export default App