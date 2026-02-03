import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useMatch } from "react-router-dom";
import { LOGO, SignOut_LOGO } from '../utils/Constants';

const Header = () => {
  
  const navigate=useNavigate();
  const isBrowsePage = useMatch("/browse");
  const handleSignOut=()=>{
    navigate("/")
  }

  return (
    <div className='absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
        <img className='w-44'
        src={LOGO} alt="logo"></img>

      <div className='flex p-2'>
        { isBrowsePage &&
        <button className='font-bold text-white' onClick={handleSignOut}>
          <img className='w-10 h-10' src={SignOut_LOGO}
            alt="sign-out"></img> Sign Out
          </button>
         }
      </div>

    </div>
  )
}

export default Header;