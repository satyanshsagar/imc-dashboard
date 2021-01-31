import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import './Landing.css'


function ExpertiseCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <Carousel className="carousel--container2" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={900}>
            <img
              className="d-block  carousel--image2"
              src="resources/nursing.png"
              alt="First slide"
            />
            <Carousel.Caption className="carousel--caption">
              <h5 className="carousel--heading">NURSING</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={900}>
            <img
              className="d-block  carousel--image2"
              src="resources/petroleum.png"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel--caption">
              <h5 className="carousel--heading">OIL MINING</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={900}>
            <img
              className="d-block  carousel--image2"
              src="resources/construction.png"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel--caption">
              <h5 className="carousel--heading">CONSTRUCTION</h5>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
    </div>
  );
}


export default ExpertiseCarousel
