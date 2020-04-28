import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/search/search.styles.css"
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
	constructor() {
		super();

		// Default
		this.state = {
			string: "Hello Nik",
			newstring: "Sup",
			oldstring: "old",
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		// Things to init
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ monsters: users }));
	}

	checkString() {
		if (this.state.string === "Hello Nik") {
			this.setState({ oldstring: this.state.string });
			this.setState({ string: this.state.newstring });
		} else {
			this.setState({ string: this.state.oldstring });
		}
	}

	addMonster(name) {
		const newMonsters = [
			...this.state.monsters,
			{ name: name, id: (this.state.monsters.length + 1).toString() },
		];
		this.setState({ monsters: newMonsters });
	}

	deleteMonster(id) {
		const newMonsters = [...this.state.monsters];
		const newList = newMonsters.filter((monster) => monster.id !== id);
		this.setState({ monsters: newList });
	}

	render() {

		// Pull the two variables out of this.state and store it into the two variables on the left as a constant
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster => {
			return monster.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<p>{this.state.string}</p>
					{/* <button onClick={() => this.setState({string: this.state.newstring})}>Click me to change name</button> */}
					<button onClick={() => this.checkString()}>
						Click me to change name
					</button>
					Search:
					<input
						type="search"
						className="search"
						placeholder="Search for a monster..."
						onChange={(e) => {
							this.setState({ searchField: e.target.value }, () => {
								console.log(this.state);
							});
						}
						}
					/>
					<CardList monsters={filteredMonsters} />
					<h3>
						Monster Size:{" "}
						<i>
							<b>{this.state.monsters.length}</b>
						</i>
					</h3>
					<button
						onClick={() =>
							this.addMonster(
								"Monster " +
									Math.floor(Math.random() * 100).toString()
							)
						}
						style={{ padding: "15px", borderRadius: "15px" }}
					>
						Add Monster
					</button>
				</header>
			</div>
		);
	}
}

export default App;
