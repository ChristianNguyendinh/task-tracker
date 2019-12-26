import React, { Component } from "react";
import "./Bucket.css";
import Lane from "../Lane";

class Bucket extends Component {
	constructor(props) {
		super(props);
		
		const laneData = this.generateLaneData (this.props.cards);
		this.laneList = this.formatLaneData(laneData);
	}

	generateLaneData(cardData) {
		const laneToCardsMap = {};

		cardData.forEach((cardDatum) => {
			if (!(cardDatum.status in laneToCardsMap)) {
				laneToCardsMap[cardDatum.status] = [];
			}

			laneToCardsMap[cardDatum.status].push(cardDatum);
		});

		return Object.keys(laneToCardsMap).map((laneTitle) => {
			return {
				title: laneTitle,
				cards: laneToCardsMap[laneTitle]
			};
		});
	}

	formatLaneData(laneData) {
		const percentWidthPerLane = 100 / laneData.length;
		return laneData.map((lane, index) => {
			return (
				<Lane
					key={ index }
					title={ lane.title }
					cards={ lane.cards }
					width={ `calc(${percentWidthPerLane.toFixed(4)}% - 3em` } />
			);
		});
	}

	render() {
		return (
			<div className="bucket">
				<div className="bucket-title">{ this.props.title }</div>
				<div className="bucket-lanes">{ this.laneList }</div>
			</div>
		);
	}
}

export default Bucket
					
