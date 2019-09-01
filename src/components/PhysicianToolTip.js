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
		const {physician} = this.props;

		if(this.state.show) {
			content = (
				<div className="content">
					<div className="content-row">
						<div>Phyisican Name:</div><div>{physician.name} </div>
					</div>
					<div className="content-row">
						<div>Specialty: </div><div>{physician.specialty}</div>
					</div>
					<div className="content-row">
						<div>Education: </div><div>{physician.education}</div>
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
	physician: PropTypes.object
};

PhysicianToolTip.defaultProps = {
	physician: {}
};

export default PhysicianToolTip;

