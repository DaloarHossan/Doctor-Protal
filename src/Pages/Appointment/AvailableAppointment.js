import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import AppointmentServices from "./AppointmentServices";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selected }) => {
  const [treatment, setTreatment]=useState(null);
  const {data:services=[] }=useQuery('appointment',async()=>{
      const res=await fetch("http://localhost:5000/appointment");
      const data=await res.json();
      return data;
  });
  return (
    <section className="mt-16 md:px-16 px-4">
      <p className="text-center text-secondary font-bold">
        Available Appointment on {format(selected, "PP")}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <AppointmentServices
            key={service._id}
            service={service}
			setTreatment={setTreatment}
          ></AppointmentServices>
        ))}
      </div>
	 { treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} selectedDate={selected}></BookingModal>}
    </section>
  );
};

export default AvailableAppointment;
