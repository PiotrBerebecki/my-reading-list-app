import React, { Component } from 'react';

import { CardPreview } from './CardPreview';
import './MainContent.css';

class MainContent extends Component {

  render() {
    return (
      <main className="main">
        <CardPreview />
      </main>
    );
  }
}


export default MainContent;
