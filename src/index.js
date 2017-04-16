import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import reducer from './reducers';
import App from './App';
import './index.css';


const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
