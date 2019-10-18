import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';



const Login = (props) => {
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
    axiosWithAuth()
    .post(`/api/login`, credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
      props.history.push(`/colors`)
    })
    .catch(err => console.log(err))
    
  }

  return (
    <form className='login-form-container' onSubmit={handleSubmit}>
      <div className='form-box'>
        <h1>Welcome!</h1>
        <h3>Please log in</h3>
        <input type='text' name='username' onChange={handleChange}></input>
        <input type='password' name='password' onChange={handleChange}></input>
        <button>Log in</button>
      </div>
        
    </form>
  );
};

export default Login;
