import React from 'react';
import Banner from './Banner';

import DoctorAppointment from './DoctorAppointment';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Terms from './Terms';
import InfoCards from './InfoCard/InfoCards';
import Contact from './Contact';


const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<InfoCards></InfoCards>
			<Services></Services>
		    <Terms></Terms>
			<DoctorAppointment></DoctorAppointment>
			<Reviews></Reviews>
			<Contact></Contact>
		</div>
	);
};

export default Home;