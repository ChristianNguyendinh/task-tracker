import React, { Component } from "react";
import "./Lane.css";
import Card from "../Card";

class Lane extends Component {
	constructor(props) {
		super(props);

		this.cardList = this.props.cards.map((card, index) => {
			return (
				<Card
					key={ index }
					title={ card.title }
					points={ card.points }
					assignee={ card.assignee } />
			);
		});

		this.styleOverride = {
			width: this.props.width
		};
	}

	render() {
		return (
			<div className="Lane" style={ this.styleOverride }>
				<div className="lane-header">
					<span className="lane-title">{ this.props.title }</span>
					<span>&nbsp;&nbsp;&nbsp;</span>
					<span className="lane-count">{ this.props.cards.length }</span>
				</div>
				<div className="lane-card-list">
					{ this.cardList }
				</div>
			</div>
		);
	}
}

export default Lane;

