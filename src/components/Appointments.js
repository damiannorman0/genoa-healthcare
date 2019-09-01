import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import PropTypes from 'prop-types';
import {getDate, getTime} from "../Utils";

import ReactTooltip from "react-tooltip";

class Appointments extends Component {
	constructor(props) {
		super(props);
		let result;
		if (props.appointments.length) {
			result = (<div>Appointments ok</div>);
		} else {
			result = (<div>Appointments no data</div>);
		}
	}

	render() {
		const { appointments = [], dateFormat, timeFormat, navigate } = this.props;

		return (
			<div className="Appointments">
				<ReactTooltip />
				<ReactTable
					data={appointments}
					defaultPageSize={10}
					className="-striped -highlight"
					getTrProps={(state, rowInfo) => {
						if (rowInfo && rowInfo.row) {
							return {
								onClick: (e) => {
									navigate(`/appointment/${rowInfo.row._original.id}`);
								}
							}
						}else{
							return {}
						}
					}}

					columns={[
						{
							Header: "Name",
							id: "name",
							accessor: d => d.patient_name
						},
						{
							Header: "Physician",
							id: "physician",
							accessor: d => d.physician_name,
							Cell: row => {
								let fooRef;
								return (
									<div onMouseEnter={e => {
										ReactTooltip.show(fooRef);
									}} onMouseLeave={e => {
										ReactTooltip.hide(fooRef);
									}}>
										<div style={{ "position": "absolute" }} ref={ref => fooRef = ref} data-tip={row.value}></div>
										{row.value}
									</div>
								);
							}
						},
						{
							Header: "Created",
							id: "created",
							accessor: d => {
								return (`${getDate(d.created_at)}, ${getTime(d.created_at)}`)
							}
						},
						{
							Header: "Updated",
							id: "updated",
							accessor: d => {
								return (`${getDate(d.updated_at)}, ${getTime(d.updated_at)}`)
							}
						}
					]}
				/>
			</div>);
	}
};

Appointments.propTypes = {
	appointments: PropTypes.object.isRequired
};

Appointments.defaultProps = {
	appointments: []
};

export default Appointments;
