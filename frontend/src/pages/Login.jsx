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

  const handleLogin = (e) => {
    e.preventDefault();

    const loggeduser = JSON.parse(localStorage.getItem("user"));

    if (input.email === loggeduser.email && // check if user is available in Local Storage
      input.password === loggeduser.password) {
      localStorage.setItem("loggedin", true) // to show your name in Page

      nav('/home') // navigate to homepage after login successfully
    }
    else {
      alert('No Found')
    }
  };

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="card-body">
                <h2 className="text-uppercase">Login</h2>
                <form onSubmit={handleLogin}>

                  <div className="form-outline">
                    <input name="email" defaultValue={input.email}
                      onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                      type="email" id="form3" className="form-control" />

                    <label className="form-label" htmlFor="form3">Your Email</label>
                  </div>

                  <div className="form-outline">
                    <input name="password" defaultValue={input.password} //
                      onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                      type="password" id="form1" className="form-control"
                    />
                    <label className="form-label" htmlFor="form1">Password</label>
                  </div>

                  <div className="content-center">
                    <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                  </div>

                  <p className="text-center">Don't have an account?
                  <Link to="/login"
                      className="text-body"><i>Register here</i>
                    </Link>
                  </p>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      login
    </div>
  )

}

export default Login;