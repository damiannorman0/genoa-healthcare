import React, {Component} from 'react';
import PropTypes from "prop-types";
import styles from "components/toolTip/toolTip.module.css";

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
				<div className={styles.content}>
					<img src={physician.image} alt={`${physician.name}`} />
					<div className={styles.contentRow}>
						<div>Phyisican Name:</div><div>{physician.name} </div>
					</div>
					<div className={styles.contentRow}>
						<div>Specialty: </div><div>{physician.specialty}</div>
					</div>
					<div className={styles.contentRow}>
						<div>Education: </div><div>{physician.education}</div>
					</div>
				</div>
			)
		}

		return (
			<div className={styles.physicianToolTip}>
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

