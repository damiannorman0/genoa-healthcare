import React, { Component } from 'react';
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

class Profile extends Component {
	render() {
		return (
			<div>
				<AppHeader title={"Profile."}
						   selected={'profile'} />
				<AppFooter />
			</div>
		);
	}
}

export default Profile;
