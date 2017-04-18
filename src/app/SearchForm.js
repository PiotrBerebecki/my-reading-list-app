import React, { Component } from 'react';

import './SearchForm.css';
import SearchIcon from './SearchIcon';


class SearchForm extends Component {
  render() {
    return (
      <form className="search__form" action="/search" method="get">
        <SearchIcon />
        <input className="search__input" name="q" type="text" placeholder="Search articles" required autoComplete="off"/>
      </form>
    );
  }
}


export default SearchForm;
