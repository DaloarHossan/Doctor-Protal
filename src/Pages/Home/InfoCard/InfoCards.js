import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const cards=[
	{
	_id:'1',
	icon:clock,
	name:'Opening Hours',
	description:'Lorem Ipsum is simply dummy text of the pri',
	bgClass:'bg-gradient-to-r from-secondary to-primary',
    },
	{
	_id:'2',
	icon:marker,
	name:'Visit Our Location',
	description:'Brooklyn, NY 10036, United States',
	bgClass:'bg-accent',
    },
	{
	_id:'3',
	icon:phone,
	name:'Contact Us Now',
	description:'+000 123 456789',
	bgClass:'bg-gradient-to-r from-secondary to-primary',
    }

]
const InfoCards = () => {
	return (
		<div className='grid md:grid-cols-2 mt-8  lg:grid-cols-3 gap-6'>
			{
				cards?.map(card =><InfoCard key={card._id} card={card}></InfoCard>)
			}
		</div>
	);
};

export default InfoCards;