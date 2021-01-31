import Carousel from 'react-bootstrap/Carousel'
 import React from 'react'
 import './style.css'


function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
        <Carousel className="carousel--container" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={900}>
          <img
            className="d-block  carousel--image"
            src="resources/vidhansoudha.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel--caption">
            <h5 className="carousel--heading">FIND YOUR PERFECT JOB OVERSEAS</h5>
          </Carousel.Caption>
        </Carousel.Item>

          <Carousel.Item interval={900}>
            <img
              className="d-block  carousel--image"
              src="resources/CABIN_01.jpeg"
              alt="First slide"
            />
            <Carousel.Caption className="carousel--caption">
              <h5 className="carousel--heading">FIND YOUR PERFECT JOB OVERSEAS</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={900}>
            <img
              className="d-block  carousel--image"
              src="resources/CABIN_02.jpeg"
              alt="Second slide"
            />
            <Carousel.Caption className="carousel--caption">
              <h5 className="carousel--heading">FIND YOUR PERFECT JOB OVERSEAS</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={900}>
            <img
              className="d-block  carousel--image"
              src="resources/CABIN_03.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel--caption">
              <h5 className="carousel--heading">FIND YOUR PERFECT JOB OVERSEAS</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={900}>
            <img
              className="d-block  carousel--image"
              src="resources/CABIN_04.jpeg"
              alt="Third slide"
            />
            <Carousel.Caption className="carousel--caption">
              <h5 className="carousel--heading">FIND YOUR PERFECT JOB OVERSEAS</h5>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
    </div>
  );
}


export default ControlledCarousel
