import React, { Component } from 'react';
import Board from './components/Board/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board title="Learn in 2019"/>
      </div>
    );
  }
}

export default App;
