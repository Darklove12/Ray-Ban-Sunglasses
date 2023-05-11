import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header from '../components/Header'
import { Link } from "react-router-dom";
import './Profile.css'

function Form() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div>
      <Header />
      <>
        <Button variant="primary" id='btn' onClick={handleShow}>
          LOGIN
        </Button>
        <div id="images1">
        <img src="https://www.thefashionisto.com/wp-content/uploads/2022/08/Ray-Ban-Back-to-School-Campaign-2022-002.jpg" className='image-first' alt="" />
        <img src="https://www.thefashionisto.com/wp-content/uploads/2022/08/Ray-Ban-Back-to-School-Campaign-2022-003.jpg" className='image-second' alt="" />
        <img src="https://www.thefashionisto.com/wp-content/uploads/2022/08/Ray-Ban-Back-to-School-Campaign-2022-005.jpg" className='image-three' alt="" />
        <img src="https://www.thefashionisto.com/wp-content/uploads/2022/08/Ray-Ban-Back-to-School-Campaign-2022-006.jpg" className='image-five'alt="" />
        </div>
        <p className='words'>
        At its best, sartorial trends have evolved with a new, comfortable, functional, fresh, and modern consciousness. <br />
        There is a stronger emphasis on unisex styles and a more seamless fusion of the retro and the new. The new campaign from Ray-Ban, <br />
        the iconic eyewear brand, expresses this ethos with youthful boldness and purpose. 
        </p>
        <Offcanvas show={show} onHide={handleClose} backdrop="static">
          <Offcanvas.Header closeButton>
            <h2 className='head'><u>Pr</u>ofile</h2>
            <i class="bi bi-person-circle"></i>
          </Offcanvas.Header>
          {/* ------------------------------------------------------------------------------ */}

          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' />
            <br /><br />
            <label htmlFor="email">E-mail</label>
            <input type="text" id='email' />
            <div className="reg">
              <button type='submit' className="btn-1">LogIn</button>
            </div>

            <p className="account">Don't have an account? 
                      <Link to="/register"
                        className=""><side id="open">Register here</side>
                      </Link>
                      </p>

          </form>

          {/* ------------------------------------------------------------------------------ */}

        </Offcanvas>
      </>
    </div>
  );
}

export default Form;