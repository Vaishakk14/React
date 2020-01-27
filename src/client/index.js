import React, { Component } from 'react';
import { render } from 'react-dom';
import Game from './game';

class App extends Component {
  render() {
    return <div>
      <Game />
    </div>;
  }
}

render(<App />, document.getElementById('abcde'));