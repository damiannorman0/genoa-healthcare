import React, { Component } from 'react';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

class Physician extends Component {
	render() {
		return (
			<div>
				<AppHeader title={"Physician."}
						   selected={'profile'} />
				<AppFooter />
			</div>
		);
	}
}

export default Physician;
