import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import './Appointments.css';
import PropTypes from 'prop-types';
import {getDate, getTime} from "../Utils";

const Appointments = (props) => {
	let result;
	if (props.appointments.length) {
		result = (<div>Appointments ok</div>);
	} else {
		result = (<div>Appointments no data</div>);
	}

	const { appointments = [], dateFormat, timeFormat, navigate } = props;

	return (
		<div className="Appointments">
			<h1>appointments</h1>
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
						accessor: d => d.physician_name
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
};

Appointments.propTypes = {
	appointments: PropTypes.object.isRequired
};

Appointments.defaultProps = {
	appointments: []
};

export default Appointments;
