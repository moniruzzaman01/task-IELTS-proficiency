import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" flex justify-center items-center min-h-[60vh] ">
      <div className=" w-full md:w-1/2 lg:w-1/2">
        <h2 className=" text-white text-3xl font-bold mb-10 ">Signup here</h2>
        <form onSubmit={""} action="">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered input-primary block mx-auto rounded-full h-10 w-full px-5 mb-5"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered input-primary block mx-auto rounded-full h-10 w-full px-5 mb-5"
            required
          />
          <input
            type="text"
            name="pass"
            placeholder="Password"
            className="input input-bordered input-primary block mx-auto rounded-full h-10 w-full px-5 mb-5"
            required
          />
          <p className=" text-left mb-5">
            Have an account?{" "}
            <Link className=" underline" to="/login">
              Login
            </Link>
          </p>
          <button className=" h-10 btn-primary px-10 rounded-full font-bold uppercase ">
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
