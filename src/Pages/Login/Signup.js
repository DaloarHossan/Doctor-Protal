import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
	const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
	return (
		<div className='flex justify-center items-center my-16'>
			<div className='flex  flex-col justify-center py-8 px-16  shadow-xl rounded-lg items-center '>
				<h1 className='font-bold text-2xl'>Signup</h1>
			<form className='w-full'  onSubmit={handleSubmit(onSubmit)}>
			<label className="label">
    <span className="label-text">Name</span>
  </label>
      <input type='text' className="input input-bordered w-full" 
        {...register("name", { required: true })} 
        aria-invalid={errors.name ? "true" : "false"} 
      />
      {errors.name?.type === 'required' && <p className='text-red-500 mt-2' role="alert">Name is required</p>}
			<label className="label">
    <span className="label-text">Email</span>
  </label>
      <input type='email' className="input input-bordered w-full" 
        {...register("email", { required: true })} 
        aria-invalid={errors.email ? "true" : "false"} 
      />
      {errors.email?.type === 'required' && <p className='text-red-500 mt-2' role="alert">Email is required</p>}
			<label className="label">
    <span className="label-text">Password</span>
  </label>
      <input type='password' className="input input-bordered w-full " 
        {...register("password", { required: true })} 
        aria-invalid={errors.password ? "true" : "false"} 
      />
      {errors.password?.type === 'required' && <p className='text-red-500 mt-2' role="alert">Password is required</p>}
      <input type="submit" className="input input-bordered w-full bg-accent text-white mt-4" />
    </form>
	<p className='text-sm mt-2'>Already have an account?<Link to='/login' className='text-primary'>Please login</Link></p>
	<div className="divider">OR</div>
	<input type="submit" value='Continue with google' className="input uppercase input-bordered w-full  mt-4" />
		</div>
		</div>
	);
};

export default Signup;