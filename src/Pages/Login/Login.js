import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
  const {register,formState: { errors },handleSubmit} = useForm();
  const {signIn,googleSignIn}=useContext(AuthContext);
  const [loginError,setLoginError] =useState('');
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.form?.pathname || '/';
  const handelLogin = data => {
	console.log(data);
  setLoginError('');
  signIn(data.email, data.password)
  .then(result=>{
    const user=result.user;
    console.log(user);
    navigate(from,{replace: true})
  })
  .catch(err => {
    console.error(err);
    if(err){
      setLoginError('Incorrect your password or user');
    }
    
  })
};
const handelGoogle = ()=>{
  googleSignIn();
}
  return (
    <div className="flex justify-center items-center my-16">
      <div className="flex  flex-col justify-center w-96 py-8 px-16  shadow-xl rounded-lg items-center ">
        <h1 className="font-bold text-2xl">Login</h1>
        <form className="w-full" onSubmit={handleSubmit(handelLogin)}>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", { required: 'Email is required' , pattern: {
				value: /\S+@\S+\.\S+/,
				message: "Entered value does not match email format"
			  }})}
          />
          {errors.email && (
            <p className="text-red-600 mt-2" >
              {errors.email.message}
            </p>
          )}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full "
            {...register("password", { required: 'Password is required',minLength:{value:6,message:'Password must be at least 6 characters'} })}
           
          />
          {errors.password && (
            <p className="text-red-600 mt-2">
              {errors.password.message}
            </p>
          )}

          <span className="label-text-alt">Forget Password?</span>

          <input
            type="submit" value='Login'
            className="btn  w-full btn-accent text-white mt-4"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p className="text-sm mt-2">
          New to Doctor Portal?
          <Link to="/signup" className="text-primary">
            Create an Account
          </Link>
        </p>
        <div className="divider">OR</div>
		<button onClick={handelGoogle} className="btn btn-outline w-full">Continue with google</button>
      </div>
    </div>
  );
};

export default Login;
