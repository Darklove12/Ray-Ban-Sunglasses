import '../App.css'
import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  const nav = useNavigate();

  const [input, setInput] = useState //  check if name is exist to let login
    ({
      email: "",
      password: ""
    })

    const handleLogin = (e) =>{
      e.preventDefault();

      const loggeduser = JSON.parse(localStorage.getItem("user"));
  
      if (input.email === loggeduser.email && // check if user is available in Local Storage
        input.password ===  loggeduser.password )
      {
        localStorage.setItem("loggedin", true) // to show your name in Page
  
        nav('/home') // navigate to homepage after login successfully
      }
      else
      {
        alert('No Found')
      }
    };
  
    return (
      <div>
         
      </div>
    )
     
}

export default Login;