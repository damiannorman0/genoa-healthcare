import React, { Component } from 'react';

class Detail extends Component {
	render() {
		const {id} = this.props.match.params;
		return (
			<div className="container">
				{`${id}`}
			</div>
		);
	}
}

export default Detail;
