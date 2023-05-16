import React, { useState } from 'react' //1st add {useState}
import './View.css'

function View() {
  const [toggle, setToggle] = useState(false) // 2nd add useState

  const products = [
    { id: '1', name: 'Original Wayfrare', price: 'R1200', image: 'https://images.ray-ban.com/is/image/RayBan/805289126577__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2' },
    { id: '2', name: 'Clubmaster Optics', price: 'R1500', image: 'https://images.ray-ban.com/is/image/RayBan/8053672195736__STD__shad__fr.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2' },
    { id: '3', name: 'Round Optics', price: 'R1100', image: 'https://images.ray-ban.com/is/image/RayBan/8056597641241__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2' },
    { id: '4', name: 'Eyeglasses Frame', price: 'R1999', image: 'https://images.ray-ban.com/is/image/RayBan/8056597123228__STD__shad__qt.png?impolicy=RB_Product&width=1024&bgc=%23f2f2f2' },
    
  ]

  return (
    <div className="windon-container1" >

      <button
        onClick={() => setToggle(!toggle)} // 3rd add setToggle and toggle from useState at as above
        class="view1">
        Show The View
      </button>
      
      <br /><br /><br /><br />

      {
        
        toggle && ( // 4th add {toggle }

          products.map(product => {
            return <div key={product.id} >
              <img src={product.image} className="windons" />
              <div className="bodys">
                <h5 className="tit">{product.name}</h5>
                <p className="tex">{product.price}</p>
                <a href="#" id="btns">GO <br /> SOMEWHERE</a>
              </div>
            </div>
          })

        )}

    </div>
  )
}

export default View;