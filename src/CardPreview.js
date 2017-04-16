import React from 'react';

import './CardPreview.css';


export const CardPreview = () => (
  <article className="card">
    <h2 className="card__title">Arrow functions are awesome</h2>
    <div className="card__image" style={{backgroundImage: 'url(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2016/02/1454335927es6-arrow-functions-new-fat-and-concise-syntax-in-js07-array-filter-method.png)'}} />
    <div className="card__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </article>
);
