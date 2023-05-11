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


    const handleLogin = (e) =>{}
}

export default Login;