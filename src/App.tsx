import React, { Component } from 'react';
import './App.css';
import BlackBox from './components/BlackBox'
import Axis from './components/HOCBlackBox/Axis'
import FullyIntegrated from './components/FullyIntegrated'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FullyIntegrated width={300} />
        </header>
      </div>
    );
  }
}

export default App;
