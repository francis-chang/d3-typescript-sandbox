import React, { Component } from 'react';
import './App.css';
import BlackBox from './components/BlackBox'
import Axis from './components/HOCBlackBox/Axis'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Axis x={20} y={10}></Axis>
        </header>
      </div>
    );
  }
}

export default App;
