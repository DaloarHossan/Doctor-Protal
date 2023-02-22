import React from "react";
import { useForm } from "react-hook-form";
import bg from "../../assets/images/appointment.png";
const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="py-6" style={{ backgroundImage: `url(${bg})` }}>
      <div className="my-8 text-center">
        <h3 className="text-secondary text-2xl">Contact Us</h3>
        <h2 className="text-white text-4xl">Stay connected with us</h2>
      </div>
      <div>
        <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
          <input type="email"
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"} className="input input-bordered w-full max-w-xs" placeholder="Email Address"
          />
          {errors.mail && <p style={{color:'red'}} role="alert">{errors.mail?.message}</p>}
		  <input type='text'
        {...register("subject", { required: true })} 
        aria-invalid={errors.subject ? "true" : "false"} className="input input-bordered w-full max-w-xs" placeholder="Subject"
      />
      {errors.firstName?.type === 'required' && <p style={{color:'red'}} role="alert">Subject is required</p>}
	  <textarea 
        {...register("message", { required: true })} 
        aria-invalid={errors.message ? "true" : "false"} className="textarea textarea-bordered textarea-lg w-full max-w-xs" placeholder="Your message" 
      />
      {errors.firstName?.type === 'required' && <p style={{color:'red'}} role="alert">Message is required</p>}

          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
