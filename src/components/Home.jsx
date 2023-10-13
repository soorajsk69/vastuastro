import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel2 from '../img/car2.jpg';
import sci from '../img/scientific.jpg';
import './home.css';

function Home() {
  return (
    <div>
      <Carousel className='item' fade interval={2000} controls={false}>
        <Carousel.Item>
          <img src={sci} alt="First slide" />
          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center">
            <h2 className='p-3 styled-h2'>SCIENTIFIC VAASTHU- Find Solution Without Demolishing Your Building</h2>
            <a href="" className="btn btn-custom-color rounded-pill py-2 px-3 mt-3">
              Read More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel2} alt="Second slide" />
          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center">
            <h2 className=' styled-h2'>Bring Health, Wealth, and Happiness In Your Life</h2>
            <a href="" className="btn btn-custom-color rounded-pill py-2 px-3 mt-3">
              Read More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={sci} alt="Third slide" />
          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center">
            <h2 className=' styled-h2'>Find Remedies for Your Blocked Marriage, Relationships, Money, Business, etc.</h2>
            <a href="" className="btn btn-custom-color rounded-pill py-2 px-3 mt-3">
              Read More
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
