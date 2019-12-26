import React, { Component } from "react";
import cardData from "../../mockData/cardData";
import Bucket from "../Bucket";

class CardApp extends Component {
	render() {
		return (
			<div className="CardApp">
				<Bucket
					title="my bucket 1"
					cards={ cardData } />
				<Bucket
					title="my bucket 2"
					cards={ cardData } />
			</div>
		);
	}
}

export default CardApp;

