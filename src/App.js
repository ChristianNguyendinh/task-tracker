import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Lane from "./components/Lane";

class App extends Component {
	constructor(props) {
		super(props);

		this.cardList = [
			{
				title: "test title",
				points: "5",
				assignee: "me"
			},
			{
				
				title: "test title2",
				points: "2",
				assignee: "you"
			}
		];
	}

	render() {
		return (
			<div>
				<h1> my react app </h1>
				<Lane cards={ this.cardList } />
			</div>
			
		);
	}
}

export default hot(module)(App);
