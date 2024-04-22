import React, { useState } from 'react';
import './App.css';
import './index.css';
import Navbar from './Components/Navbar'; // Import the Navbar component
import HomePage from './Components/Homepage';
import Login from './Components/Login';
import Signup from './Components/Signup';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let currentComponent;
  if (currentPage === 'home') {
    currentComponent = <HomePage />;
  } else if (currentPage === 'login') {
    currentComponent = <Login />;
  } else if (currentPage === 'signup') {
    currentComponent = <Signup />;
  }

  return (
    <div>
      <Navbar onPageChange={handlePageChange} />
      {currentComponent}
    </div>
  );
}

export default App;
