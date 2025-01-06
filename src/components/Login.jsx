

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate(); // Initialize navigate for navigation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      const { user } = res.data; // Extract the user data
      console.log(res.data);

      if (user.role === "user") {
        toast.success("User login success");
        document.getElementById("my_modal_2").close();
        setTimeout(() => {
          localStorage.setItem("Users", JSON.stringify(user));
          navigate("/course"); // Navigate to the home page for regular users
        }, 1000);
      } else  {
        toast.success("Admin login success");
        document.getElementById("my_modal_2").close();
        setTimeout(() => {
          localStorage.setItem("Users", JSON.stringify(user));
          navigate("/admindashboard"); // Navigate to the admin dashboard
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
   
      <div>
  {/* The dialog element should not be nested inside a <p> */}
  <dialog id="my_modal_2" className="modal">
    <div className="modal-box">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById("my_modal_2").close()}
        >
          ✕
        </Link>

        <h3 className="font-bold text-lg">Login</h3>
        {/* Email */}
        <div className="mt-4 space-y-2">
          <span>Email</span>
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        {/* Password */}
        <div className="mt-4 space-y-2">
          <span>Password</span>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="w-80 px-3 py-1 border rounded-md outline-none"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>

        {/* Button */}
        <div className="flex justify-around mt-6">
          <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
            Login
          </button>
          <p>
            Not registered?{" "}
            <Link to="/signup" className="underline text-blue-500 cursor-pointer">
              Signup
            </Link>
          </p>
        </div>
      </form>
    </div>
  </dialog>
</div>
  
    
      
        )};
export default Login;
