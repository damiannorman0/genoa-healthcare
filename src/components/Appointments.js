import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import PropTypes from 'prop-types';
import {getDate, getTime} from "../Utils";
import PhysicianToolTip from "components/PhysicianToolTip.js";


const Appointments = (props) => {
	const {appointments = [], navigate, physicians} = props;
	return (
		<div className="Appointments">
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
						Header: "Date",
						id: "start",
						accessor: d => {
							return (`${getDate(d.start)}, ${getTime(d.start)}`)
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
