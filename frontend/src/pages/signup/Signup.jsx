import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "./Checkbox";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const handleCheckboxChange =(gender)=>{
	setInput({...input, gender})

  }

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Sign Up <span className="text-blue-500"> ChatApp</span>
          </h1>

          <form onSubmit={handlesubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-accent">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full input input-bordered  h-10"
                value={input.fullName}
                onChange={(e) =>
                  setInput({ ...input, fullName: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label p-2 ">
                <span className="text-base label-text text-accent">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="johndoe"
                className="w-full input input-bordered h-10"
                value={input.userName}
                onChange={(e) =>
                  setInput({ ...input, userName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-accent">Gender</span>
              </label>
              <Checkbox  onCheckBox={handleCheckboxChange} selectedGender={input.gender}/>
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-accent">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
            </div>

            <div>
              <label className="label">
                <span className="text-base label-text text-accent">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full input input-bordered h-10"
                value={input.confirmPassword}
                onChange={(e) =>
                  setInput({ ...input, confirmPassword: e.target.value })
                }
              />
            </div>

            <Link
              className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
              to="/login"
            >
              Already have an account?
            </Link>

            <div>
              <button className="btn btn-block btn-sm mt-2 border border-slate-700">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
