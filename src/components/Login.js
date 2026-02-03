import React, { useRef, useState } from 'react'
import Header from './Header';
import Validate from '../utils/Validate';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [isSignIn,setIsSignIn]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);
  const navigate=useNavigate();

  const email=useRef(null);
  const password=useRef(null);
  const handleButtonClick=()=>{
    const message=Validate(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message)
      return;
    navigate("/browse");
  }
  const toggleSignIn=()=>{
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Header/>
     <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg" alt="bg-img"></img>
     </div>

     <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isSignIn? "Sign In":"Sign Up"}</h1>
      {!isSignIn&&<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
      <input ref={email} type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-700'/>
      <input ref={password} type='password' placeholder='password' className='p-4 my-4 w-full bg-gray-700'/>
      <p className='text-red-700 font-bold'>{errorMessage}</p>
      <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
        {isSignIn? "Sign In":"Sign Up"}
      </button>
      <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign up now":"Already Registered? Sign In Now"}</p>
     </form>
    </div> 
  )
};

export default Login;