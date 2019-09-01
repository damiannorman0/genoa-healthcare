import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import PropTypes from 'prop-types';
import {getDate, getTime} from "../Utils";
import PhysicianToolTip from "./PhysicianToolTip";

import ReactTooltip from "react-tooltip";

const Appointments = (props) => {
	const {appointments = [], dateFormat, timeFormat, navigate, physicians} = props;
	return (
		<div className="Appointments">
			<ReactTooltip/>
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
					} else {
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
								<div className="cell" onMouseEnter={e => {
									fooRef.show();

								}} onMouseLeave={e => {
									fooRef.hide();
								}}>
									<PhysicianToolTip ref={ref => fooRef = ref} physician={physicians[row.original.physician_id]} />
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
};

Appointments.propTypes = {
	appointments: PropTypes.array.isRequired,
	physicians: PropTypes.object
};

Appointments.defaultProps = {
	appointments: [],
	physicians: {}
};

export default Appointments;
