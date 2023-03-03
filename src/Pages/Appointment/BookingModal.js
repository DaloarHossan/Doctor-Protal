import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate ,setTreatment}) => {
  const { name, slots } = treatment;
  const handelBookAppointment=e=>{
    e.preventDefault();
    const form=e.target;
   const name=form.fullName.value;
   const slot=form.slot.value;
   const email=form.email.value;
   const phone=form.phone.value;
    const booking={
      treatment:treatment.name,
      PatientName:name,
      slot,
      email,
      phone
    }
    console.log(booking);
    setTreatment(null) ;
  }

  
  return (
    <div>
      <input type="checkbox" id="book" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="book"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handelBookAppointment} className="gap-4 grid">
            <input
              type="text"
              disabled
              value={format(selectedDate, "PP")}
              placeholder="Type here"
              className="input input-bordered w-full "
            />

            <select name="slot" className="select select-bordered w-full">
              {
                slots?.map((slot,i)=> <option key={i} value={slot}>{slot}</option>)
                }
            </select>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              className="input input-bordered w-full bg-accent text-white"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
