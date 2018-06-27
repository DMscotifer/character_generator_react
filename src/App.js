import React, { Component } from 'react';
import './App.css';
import CharacterBox from './containers/CharacterBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Old School RPG Character Creator</h1>
        </header>
        <p className="App-intro">
        </p>
        <div className="character-sheet">
          <CharacterBox/>
        </div>
      </div>
    );
  }
}

export default App;
