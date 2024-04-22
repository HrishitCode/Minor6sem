//import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

const Login = () => {
 
  const handleLogin = () => {
    
    console.log('Login logic goes here');
  };

  return (
    <div>
      <h2>Login</h2>
      
     
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
