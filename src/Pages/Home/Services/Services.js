import React from "react";
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from "./Service";

const services = [
	{
        _id:1,
		img:fluoride,
		name:'Fluoride Treatment',
		description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',	
    },
	{
        _id:2,
		img:cavity,
		name:'Cavity Filling',
		description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',	
    },
	{
        _id:3,
		img:whitening,
		name:'Teeth Whitening',
		description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',	
    }
];
const Services = () => {
  return (
    <div className="mt-8">
      <div className="text-center">
        <h1 className="text-xl text-secondary font-bold">Our services</h1>
        <h2 className="text-3xl">Services we provide</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
		{
			services.map(service =><Service key={service._id}
			service={service}
			></Service>)
		}
	  </div>
    </div>
  );
};

export default Services;
