import React, { Component } from 'react';
import './App.css';
import BlackBox from './components/BlackBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BlackBox></BlackBox>
        </header>
      </div>
    );
  }
}

export default App;
