import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Signup = () => {
  const {register,formState: { errors },handleSubmit} = useForm();
  const [signUpError,SetSignupError] = useState('');
  const {createUser,updateUser,googleSignIn}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  const from=location.state?.form?.pathname || '/';
  const handelSignup = (data) => {
    console.log(data);
    SetSignupError('');
    createUser(data.email, data.password)
    .then(result=>{
      const user=result.user;
      toast.success('User Successfully created!');
      const userInfo={
        displayName: data.name
      };
      updateUser(userInfo);
      console.log(user);
    })
    .catch(err => {
      console.log(err.message);
      if(err){
      SetSignupError('email already in use')
      }
    });
  
  };
  const handelGoogle=()=>{
    googleSignIn();
    navigate(from,{replace:true});
}

  return (
    <div className="flex justify-center items-center my-16">
      <div className="flex  flex-col justify-center w-96 py-8 px-16  shadow-xl rounded-lg items-center ">
        <h1 className="font-bold text-2xl">Signup</h1>
        <form className="w-full" onSubmit={handleSubmit(handelSignup)}>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            {...register("name", {
              required: "Name is required",
              pattern: { value: /^[A-Za-z]+$/i, message: "Enter real name" },
              maxLength: { value: 20, message: "Maximum 20 character" },
              minLength: { value: 3, message: "Minimum 3 character" },
            })}
          />
          {errors.name && (
            <p className="text-red-500 mt-2">{errors.name.message}</p>
          )}
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="text-red-500 mt-2" role="alert">
              {errors.email.message}
            </p>
          )}
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full "
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 mt-2">{errors.password?.message}</p>
          )}
          <input
            type="submit"
            value="Signup"
            className="btn btn-accent w-full  text-white mt-4"
          />
          <div>
            {
              signUpError && <p className="text-red-600">{signUpError}</p>
            }
          </div>
        </form>
        <p className="text-sm mt-2">
          Already have an account?
          <Link to="/login" className="text-primary">
            Please login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button onClick={handelGoogle} className="btn btn-outline w-full">Continue with google</button>
      </div>
    </div>
  );
};

export default Signup;
