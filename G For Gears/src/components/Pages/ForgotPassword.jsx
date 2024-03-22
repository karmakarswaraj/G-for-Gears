import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="sign" className="container mx-auto overflow-y-hidden" style={{height: "86vh"}} >
      <div className="flex items-center content-center justify-center h-full">
        <div className="w-full px-4 lg:w-4/12">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <h2 className="pt-5 text-4xl font-bold text-center text-gray-800">
                Forgot Password?
              </h2>
              <form className="my-5" onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder="Username"
                    style={{ transition: "all .15s ease" }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mt-6 text-center">
                  <button
                    className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="flex flex-wrap mt-6">
                <div
                className="flex justify-center w-full px-4 cursor-pointer">
                  <small>Resend?</small>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;

