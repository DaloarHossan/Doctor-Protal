import React from "react";
import icon from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const reviews=[
	{
	_id:1,
	img:people1,
	name:'Winson Harry',
	location:'California',
	comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
   },
	{
	_id:2,
	img:people2,
	name:'Winson Harry',
	location:'California',
	comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
   },
	{
	_id:3,
	img:people3,
	name:'Winson Harry',
	location:'California',
	comment:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
   }
];

const Reviews = () => {
  return (
    <div className="mt-8 md:mt-24 md:px-16 px-4">
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl text-secondary py-3">Testimonial</h3>
          <h2 className="text-4xl ">What Our Patient Says</h2>
        </div>
        <div>
          <img src={icon} alt="" className="md:w-48 w-24" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 my-24">
		{
			reviews.map(review=> <Review key={review._id} review={review}></Review>)
		}
      </div>
    </div>
  );
};

export default Reviews;
