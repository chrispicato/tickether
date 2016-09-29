import React, { Component } from 'react';

// renders logo and maps props
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Tickether</h1>
        <hr />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}