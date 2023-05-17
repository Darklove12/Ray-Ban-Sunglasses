import React from 'react'
import './Sell.css'
function Sell(props) {
  return (
    <>
      <div class="card-image" >
        <img src={props.image} className="cards-image" alt="..." />
      </div>
    </>
  );
}


export default Sell;