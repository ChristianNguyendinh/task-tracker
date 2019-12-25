import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
	render() {
		return (
			<div>
				<h1> my react app </h1>
				<Card
					title="test title"
					points="5"
					assignee="me" />
			</div>
			
		);
	}
}

export default hot(module)(App);
