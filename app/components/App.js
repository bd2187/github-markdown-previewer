import React, { Component } from 'react';
import Main from './Main';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route render={() => <h1>Not Found</h1>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
