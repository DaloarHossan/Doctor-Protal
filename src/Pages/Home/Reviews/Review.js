import React from "react";

const Review = ({ review }) => {
  const { img, comment, name, location } = review;
  return (
    <div className="">
      <p className="py-4 px-6">{comment}</p>
      <div className="card card-side px-6 bg-base-100 shadow-md">
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{location}</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
