import React, { useState } from "react";


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log(credentials)
  }

  const handleSubmit = e => {
    e.preventDefault();
    //axios with auth
    
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name='username' onChange={handleChange}></input>
        <input type='password' name='password' onChange={handleChange}></input>
        <button>Log in</button>
    </form>
  );
};

export default Login;
