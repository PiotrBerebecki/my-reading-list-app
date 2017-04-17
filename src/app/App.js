import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './NavBar';
import MainContent from './MainContent';
import ArticlesList from './../articles/ArticlesList';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <MainContent>
            <Route exact path="/" render={() => (
              <ArticlesList tag="javascript"/>
            )} />
            <Route path="/:section/:tag" render={({match}) => (
              <ArticlesList tag={match.params.tag}/>
            )} />
          </MainContent>
        </div>
      </Router>
    );
  }
}


export default App;
