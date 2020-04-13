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
      oldstring: 'old',
      monsters: [
        {
          'name': 'monster1',
          'id': '1'
        },
        {
          'name': 'monster2',
          'id': '2'
        },
        {
          'name': 'monster3',
          'id': '3'
        },
        {
          'name': 'monster4',
          'id': '4'
        },
        {
          'name': 'monster5',
          'id': '5'
        }
      ]
    };
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
    };
  }

  addMonster(name) {
    const newMonsters = [...this.state.monsters, {'name': name, 'id': (this.state.monsters.length+1).toString()}];
    this.setState({monsters: newMonsters});
  }

  deleteMonster(id) {
    const newMonsters = [...this.state.monsters];
    const newList = newMonsters.filter((monster) => 
      monster.id !== id
    );
    this.setState({monsters: newList});
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
          <h3>Monster Size: <i><b>{this.state.monsters.length}</b></i></h3>
          <button onClick={() => this.addMonster("Monster " + (Math.floor(Math.random() * 100)).toString())} style={{padding: "15px", borderRadius: "15px"}}>Add Monster</button>
          <p>
            {
              this.state.monsters.map(monsters =>
                <>
                  <p key={monsters.id}>
                    {
                      monsters.name
                    }
                  </p>
                  <button onClick={() => this.deleteMonster(monsters.id)} style={{padding: "15px", borderRadius: "15px"}}>Delete Monster</button>
                </>
              )
            }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
