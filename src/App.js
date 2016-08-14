import React, { Component } from 'react';
import Timer from './Timer/Timer';
import './App.css';

class App extends Component {

  render() {
    console.log(this.styles)
    return (
      <div className="container">
        <Timer />
      </div>
    );
  }
}

export default App;
