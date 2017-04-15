import React, { Component } from 'react';


class MainContent extends Component {

  render() {
    return (
      <div>
        {this.props.tag}
      </div>
    );
  }
}


export default MainContent;
