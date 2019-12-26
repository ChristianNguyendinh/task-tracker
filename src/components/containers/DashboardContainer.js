import React, { Component } from "react";
import cardData from "../../mockData/cardData";
import Dashboard from "../Dashboard";

class DashboardContainer extends Component {
	render() {
		return (
			<div className="DashboardApp">
				<Dashboard cards={ cardData } />
			</div>
		);
	}
}

export default DashboardContainer;

