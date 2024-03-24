import React, { useState } from "react";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [signedUp, setSignedUp] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  


  return (
    <div
      id="sign"
      className="container px-4 mx-auto"
      style={{ minHeight: "86vh" }}
    >
      <div className="flex items-center content-center justify-center h-full">
        <div className="w-full px-4 lg:w-4/12">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 border-0 rounded-lg shadow-lg">
            <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
              <h1 className="pt-5 text-4xl font-bold text-center text-gray-800">
                Create an Account
              </h1>
              <form className="my-5" onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-1 text-xs font-bold text-gray-700 uppercase"
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
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white rounded shadow focus:outline-none focus:shadow-outline"
                    placeholder="Password"
                    style={{ transition: "all .15s ease" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-6 text-center">
                  <button
                    className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-900 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none"
                    type="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
