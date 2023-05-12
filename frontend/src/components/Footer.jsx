import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

function Footer() {
  return (
    <MDBFooter className='text-muted'>
  <section className='d-flex '>
    <div className='footer-container'>
      <h1 className="network">Get connected with us on social <a className="net">networks</a></h1>
    </div>

    <div>
      <a href='https://m.facebook.com' className='med-social'>
        <MDBIcon fab icon='facebook-f' />
      </a>
      <a href='https://twitter.com' className='med-social'>
        <MDBIcon fab icon='twitter' />
      </a>
      <a href='https://www.whatsapp.com' className='med-social'>
        <MDBIcon fab icon='whatsapp' />
      </a>
      <a href='https://www.instagram.com' className='med-social'>
        <MDBIcon fab icon='instagram' />
      </a>
      <a href='https://za.linkedin.com' className='med-social'>
        <MDBIcon fab icon='linkedin' />
      </a>
      <a href='https://github.com' className='med-social'>
        <MDBIcon fab icon='github' />
      </a>
    </div>
  </section>

  <section className=''>
    <MDBContainer className='text-center text-md-start mt-5'>
      <MDBRow className='mt-3'>
        <MDBCol className='auto'>
          <h6 className='text-uppercase fw-bold'>
            <MDBIcon className='me-3' />
            SHOP BY
          </h6>
          <p>
          All Sunglasses
          </p>
          <p>
          All Eyeglasses
          </p>
          <p>
          Customize
          </p>
          <p>
          Sunglasses
          </p>
          <p>
          Eyeglasses
          </p>
          <p>
          Lenses
          </p>
          <p>
          Gift Card
          </p>
        </MDBCol>

        <MDBCol  className='auto'>
          <h6 className='text-uppercase'>SHOPPING ONLINE</h6>
          <p>
            <a href='#!' className='text-reset'>
            Face Shape Guide
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
            Size Guide
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
            Special Offers
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
            Corporate Sales
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
            Prescription
            </a>
          </p>
          
        </MDBCol>

        <MDBCol className='auto'>
          <h6 className='text-uppercase fw-bold'>HOW CAN WE HELP?</h6>
          <p>
            <a href='#!' className='text-reset'>
            Get Support
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
            Track Orders
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
              Orders
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
            Gift Card Balance
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
            Ray-Ban Stories FAQ
            </a>
          </p>
          <p>
            <a href='#!' className='text-reset'>
            Contact Us
            </a>
          </p>
        </MDBCol>

        <MDBCol className='auto'>
          <h6 className='text-uppercase'>Contact</h6>
          <p>
            <MDBIcon  className='me' />
            Johannesburg, Gauteng
          </p>
          <p>
            <MDBIcon  className='me' />
            bsinukela17@gmail.com
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>

  <div className='text-center'>
    © 2023 Copyright 
    <h2 className="academy">
      The Digital Acadamy
    </h2>
  </div>
</MDBFooter>
)
}

export default Footer