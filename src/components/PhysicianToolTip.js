import React, {Component} from 'react';
import PropTypes from "prop-types";

class PhysicianToolTip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}

	show() {
		this.setState({
			show: true
		});
	}

	hide () {
		this.setState({
			show: false
		});
	}

	render() {
		let content;
		if(this.state.show) {
			content = (
				<div className="content">
					<div className="content-row">
						<div>Phyisican Name:</div><div>ok1</div>
					</div>
					<div className="content-row">
						<div>Specialty:</div><div>ok2</div>
					</div>
					<div className="content-row">
						<div>Education:</div><div>ok3</div>
					</div>
				</div>
			)
		}

		return (
			<div className="physician-tool-tip">
				{content}
			</div>
		);
	}
};

PhysicianToolTip.propTypes = {
	image: PropTypes.string
};

PhysicianToolTip.defaultProps = {
	image: ''
};

export default PhysicianToolTip;

