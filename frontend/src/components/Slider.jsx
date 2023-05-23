import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

function Slider() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="imagefirst" 
          src="https://india.ray-ban.com/pub/media/wysiwyg/Rb_eyeglasses_clp_opti/18_RB_Website_Eyeglasses_Hero_Banner_Desktop.jpg"
          alt="First slide"
          
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="imagefirst"
          src="https://karenlockyer.com/wp-content/uploads/sites/11/2018/08/feature-image-ray-ban-1200x500.jpg"
          alt="Second slide"
          
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="imagefirst"
          src="https://www.oculux.co.za/wp-content/uploads/2022/10/ray-ban_sunglasses_sa.webp"
          alt=""
          
        />

        <Carousel.Item>
          <img
            className="imagefirst"
            src="https://www.wisconsinvision.com/Content/files/GenCart/ProductCatImages/Rayban-Kids-April.jpg"
            alt=""
            
          />
  
        </Carousel.Item>
      
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;