import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search/search-box.component";

class App extends Component {
	constructor() {
		super();

		// Default
		this.state = {
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

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		// Pull the two variables out of this.state and store it into the two variables on the left as a constant
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name
				.toLowerCase()
				.includes(searchField.toLowerCase());
		});

		return (
			<div className="App">
				<header className="App-header">
					<h1>Monster Rolodex</h1>
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
					<SearchBox
						placeholder="Search monsters here"
						handleChange={this.handleChange}
					/>
					<CardList monsters={filteredMonsters} />
				</header>
			</div>
		);
	}
}

export default App;
