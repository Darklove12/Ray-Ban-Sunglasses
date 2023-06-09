import React, { useState } from 'react'
import '../App.css'
import { Link } from "react-router-dom";
import './Register.css'

const Register = () => {

  const [input, setInput] = useState
    ({
      name: "",
      email: "",
      password: ""
    })

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("user", JSON.stringify(input))
    console.log(input)
  }
  return (

    <div>
      
          <div className="cent-container">
            <div className="row">
              <div className="column">
                <div className="carde">
                  <div className="carde-body">
                    <h2 className="textz-uppercase">Create an account</h2> 
                
                    <form onSubmit={handleSubmit} // it works well with a button
                    >
                      <div className="form">
                        <input name="name"  // name is the name that is used when the value is passed
                        value={input.name}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                          type="text" // defines a single-line text field

                          id="form" className="form-control" // ClassName property that can by called on an element to get/set its class
                          />
                        <label className="form-label" htmlFor="form">Your Name</label>
                      </div>

                      <div className="form">
                        <input
                          name='email' // name is the name that is used when the value is passed
                          defaultValue={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                          type="text" id="form3" className="form-control" />
                        <label className="form-label" htmlFor="form3">Your Email</label>
                      </div>

                      <div className="form">
                        <input name="password" defaultValue={input.password} // replace value to defaultValue, because unable to type in an input field by value property
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        type="password" id="form1" className="form-control"
                        />

                        <label className="form-label" htmlFor="form1">Password</label>
                      </div>

                      <div className="form">
                        <input type="password" id="form3" className="form-control" />
                        <label className="form-label" htmlFor="form3">Repeat your password</label>
                      </div>

                      <div className="content-center">
                        <button type='submit' className="buton">Register</button>
                      </div>

                      <p className="texts-center">Have already an account?
                        <Link to="/Profile" className="text-body">
                          <p className='log'>Login here</p>
                        </Link>
                      </p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Register