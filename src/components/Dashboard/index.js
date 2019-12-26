import React, { Component } from "react";
import "./Dashboard.css";

class Dashboard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			...this.getTotals(this.props.cards)
		};
	}

	getTotals(cardData) {
		return {
			totalCards: this.getTotalCards(cardData),
			totalPoints: this.getTotalPoints(cardData)
		};
	}

	getTotalCards(cardData) {
		return cardData.length;
	}

	getTotalPoints(cardData) {
		return cardData.reduce((accumulator, cardDatum) => {
			return accumulator += cardDatum.points;
		}, 0);
	}

	render() {
		return (
			<div className="Dashboard">
				<div>Total Cards: { this.state.totalCards }</div>
				<div>Total Points: { this.state.totalPoints }</div>
			</div>
		);
	}
}

export default Dashboard;

