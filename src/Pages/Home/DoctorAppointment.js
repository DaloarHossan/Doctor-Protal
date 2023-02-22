import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from  '../../assets/images/appointment.png'

const DoctorAppointment = () => {
	return (
		<div style={{backgroundImage:`url(${appointment})`}} className="hero mt-8 md:mt-40">
		<div className="hero-content flex-col lg:flex-row">
		  <img src={doctor} alt='' className="-mt-36 hidden md:block lg:w-1/2" />
		  <div className='lg:ml-24'>
			<h3 className='font-bold mb-4 text-secondary text-xl'>Appointment</h3>
			<h1 className="text-4xl font-bold text-white">Make an appointment today</h1>
			<p className="my-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
			<button className="btn btn-primary">Get Started</button>
		  </div>
		</div>
	  </div>
	);
};

export default DoctorAppointment;