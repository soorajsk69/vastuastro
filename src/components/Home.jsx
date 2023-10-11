import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import caro1 from '../img/carousel-1.jpg';
import caro2 from '../img/carousel-2.jpg';
import './home.css';

export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={caro1} alt="First slide" />
          <Carousel.Caption>
            <h1>First slide label laskaako</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="read-more-button">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={caro2} alt="Second slide" />
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="read-more-button">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={caro1} alt="Third slide" />
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <button className="read-more-button">Read More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
