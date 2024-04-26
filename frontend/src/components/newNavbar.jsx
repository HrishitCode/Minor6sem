import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ onPageChange }) => {
  const { loginWithRedirect } = useAuth0();
  const handleButtonClick = () => {
    if (loginWithRedirect) {
      loginWithRedirect();
    }
  };
  return (
    <nav style={{ backgroundColor: 'black', paddingTop: '0.6rem', paddingBottom: '0.6rem' }} className="flex justify-between items-center text-white p-4">
      <a 
        href="/" 
        className="text-white text-3xl font-semibold relative arizonia-regular"
        style={{ fontFamily: '"Arizonia", cursive', paddingLeft: '25px' }} // Add padding to the left
      >
        <span className="relative transition-colors duration-300 delay-200 group-hover:text-white" style={{ color: 'green' }}>BitVerify</span>
      </a>
      <div className="flex space-x-10 items-center">
        <a 
          href="#_" 
          onClick={handleButtonClick}
          className="relative inline-flex items-center justify-center px-10 py-3 overflow-hidden font-mono font-semibold tracking-tighter text-white bg-transparent rounded-lg group" // Adjusted padding here
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative text-1.5xl">Login</span>
        </a>
        <a 
          href="#_" 
          onClick={handleButtonClick}
          className="relative inline-flex items-center  justify-center px-10 py-3 overflow-hidden font-mono font-semibold tracking-tighter text-white bg-transparent rounded-lg group" // Adjusted padding here
          style={{ marginRight: '20px', paddingRight: '30px' }} // Add padding to the right
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-900 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative text-1.5xl">Sign Up</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;