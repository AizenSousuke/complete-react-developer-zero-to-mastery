import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // Default
    this.state = {
      string: 'Hello Nik',
      newstring: 'Sup',
      oldstring: 'old'
    }
  }

  checkString() {
    if (this.state.string === 'Hello Nik')
    {
      this.setState({oldstring: this.state.string});
      this.setState({string : this.state.newstring});
    }
    else
    {
      this.setState({string : this.state.oldstring});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> 
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>{this.state.string}</p>
          {/* <button onClick={() => this.setState({string: this.state.newstring})}>Click me to change name</button> */}
          <button onClick={() => this.checkString()}>Click me to change name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Now
          </a>
        </header>
      </div>
    );
  }
}

export default App;
