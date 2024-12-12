import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn)

  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="py-5 font-bold text-3xl">{isSignIn ? 'Sign In': 'Sign Up'}</h1>
        {!isSignIn && <input
          type="text"
          placeholder="First Name"
          className="p-2 my-4 w-full bg-gray-700"
        />}
        {!isSignIn && <input
          type="text"
          placeholder="Last Name"
          className="p-2 my-4 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button className="bg-red-800 p-2 my-4 w-full">{isSignIn ? 'Sign In': 'Sign Up'}</button>
        <p className="p-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn ? 'New to Netflix? Sign up now': 'Already Registered! Sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
