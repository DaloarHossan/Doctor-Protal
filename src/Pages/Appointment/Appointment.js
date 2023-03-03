import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
	const [selected, setSelected] = useState(new Date());
	return (
		<div>
			<AppointmentBanner setSelected={setSelected} selected={selected}></AppointmentBanner>
			<AvailableAppointment selected={selected}></AvailableAppointment>
		</div>
	);
};

export default Appointment;