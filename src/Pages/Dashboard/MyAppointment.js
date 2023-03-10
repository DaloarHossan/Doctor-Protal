import { async } from '@firebase/util';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyAppointment = () => {
   const {user}=useContext(AuthContext);
  const selectedDate = new Date()
  
   const date=format(selectedDate,'PP')
   
   const {data:booking=[]}=useQuery({queryKey:['myAppointment',user.email],
	queryFn:async ()=>{
		const res=await fetch(`http://localhost:5000/booking?email=${user.email}&date=${date}`);
		const data=await res.json();
		return data;
		
	}
   })
    
	return (
		<div className='md:p-12 p-7'>
			<div className='flex justify-between mb-6'>
			<h1 className='text-2xl '>My appointment</h1>
			<button className='btn btn-outline '>Date</button>
			</div>
			<div>
			<div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Service</th>
        <th>time</th>
      </tr>
    </thead>
    <tbody>
      
      {
		booking && booking.map((book,i)=><tr>
			<th>{i+1}</th>
			<td>{book.PatientName}</td>
			<td>{book.treatment}</td>
			<td>{book.slot}</td>
		  </tr>)
	  }

    </tbody>
  </table>
</div>
			</div>
		</div>
	);
};

export default MyAppointment;