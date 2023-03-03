import React from "react";

const AppointmentServices = ({ service,setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-lg mt-16">
      <div className="card-body text-center">
        <h2 className="text-xl text-secondary font-bold">{name}</h2>
        <p>{slots.length>0? slots[0] : 'Try another Day'}</p>
		<p className="uppercase">{slots.length} {slots.length> 1? 'spaces' : 'space'} Available</p>

        <div className="card-actions justify-center">
		<label htmlFor="book" onClick={()=>setTreatment(service)} className="btn btn-primary">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServices;
