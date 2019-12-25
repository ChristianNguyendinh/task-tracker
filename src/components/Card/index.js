import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Card">
				<div className="card-title">
					{ this.props.title }
				</div>
				<div className="card-info">
					<div className="card-points">
						{ this.props.points }
					</div>
					<div className="card-assignee">
						{ this.props.assignee }
					</div>
				</div>
			</div>
		)
	}
}

export default Card;

