import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel2 from '../img/building.svg';
import carousel3 from '../img/marriage.svg';
import carousel4 from '../img/health.svg';

import './home.css';

function Home() {
  return (
    <div>
      <Carousel className='item' fade interval={2000} controls={false}>
        <Carousel.Item>
          <img src={carousel2} alt="First slide" />
          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center">
            <h2 className='p-3 styled-h2'>SCIENTIFIC VAASTHU- Find Solution<br/> Without Demolishing Your Building</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel3} alt="Second slide" />
          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center">
            <h2 className=' styled-h2'>Bring Health, Wealth, <br/>& Happiness In Your Life</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={carousel4} alt="Third slide" />
          <Carousel.Caption className="carousel-caption d-flex flex-column justify-content-center">
            <h2 className=' styled-h2'>Find Remedies for Your Blocked Marriage, <br/>Relationships, Money, Business, etc.</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
