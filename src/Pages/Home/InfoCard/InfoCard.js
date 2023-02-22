import React from 'react';

const InfoCard = ({card}) => {
	const {name,icon,description,bgClass} = card;
	
	return (
		<div  className={`card card-side p-6 text-white ${bgClass} shadow-xl`}>
  <figure><img src={icon} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    
  </div>
</div>
	);
};

export default InfoCard;