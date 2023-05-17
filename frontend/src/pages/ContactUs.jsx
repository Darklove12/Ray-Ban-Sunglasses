import React from 'react'
import Header from '../components/Header'
import '../pages/ContactUs.css'

const ContactUs = () =>  {
  return (
  <div>
<Header/>

<form>
<div className="form-group">
  <label for="email1">Email address</label>
  <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email"/>
  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div className="form-group">
  <label for="password1">Password</label>
  <input type="password" className="form-control" id="password1" placeholder="Password"/>
</div>

<div className="form-group">
  <label for="message">Message</label>
  <input type="message" className="form-control" id="message" placeholder="Message"/>
</div>
<div className="form-group form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
  <label className="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
)
}

 

export default ContactUs;