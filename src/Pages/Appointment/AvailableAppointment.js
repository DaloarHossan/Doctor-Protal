import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentServices from "./AppointmentServices";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment]=useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="mt-16">
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
