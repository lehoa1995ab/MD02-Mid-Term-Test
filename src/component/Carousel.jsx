import Carousel from 'react-bootstrap/Carousel';
import slider_1 from '../img/slider_1.jpg';
import slider_2 from '../img/slider_2.jpg';
import slider_3 from '../img/slider_3.jpg';

function Carousel1() {
  return (
    <Carousel
    style={{
      textAlign:"center",
      marginTop: "4rem",
      marginBottom: "6rem",
      width:'87%',
      marginLeft:"auto",
      marginRight:"auto",
      borderTopLeftRadius: '9px',

    }}
    >
      <Carousel.Item interval={1000}
      style={{ 
      }}
      >
        <img
          className="d-block w-100"
          src={slider_1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={slider_2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider_3}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;