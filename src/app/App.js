import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import MainContent from './../articles/MainContent';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => (
            <MainContent tag="javascript"/>
          )} />
          <Route path="/:section/:tag" render={({match}) => (
            <MainContent tag={match.params.tag}/>
          )} />
        </div>
      </Router>
    );
  }
}


export default App;
