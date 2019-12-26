import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import CardContainer from "./components/containers/CardContainer";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<h1> my react app </h1>
				<CardContainer />
			</div>
			
		);
	}
}

export default hot(module)(App);
