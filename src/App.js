import React, { Component } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainContent from './MainContent';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => (
            <MainContent tag="favourite-tag"/>
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
