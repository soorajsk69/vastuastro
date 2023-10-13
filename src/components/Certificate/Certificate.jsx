import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Certificate.css';
import certi1 from '../../assets/img/certi1.jpeg';
import cert2 from '../../assets/img/cert2.jpeg';
import cert3 from '../../assets/img/cert3.jpeg';

function Certificate() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleNext = () => {
    if (index < 3) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <div className="container-fluid product py-5 my-5">
        <div>
          <div className="section-header text-center advertisers-service-sec">
            <h2 className="fw-bold fs-1">
              <span className="b-class-secondary"> Certificate </span>
            </h2>
          </div>
        </div>
        <div className="container py-5">
          <div
            className="section-title text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '700px' }}
          >
            <div className="sec-title">
              <h2>The success history of Viswakarma Vastu</h2>
            </div>
          </div>
          <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={certi1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cert2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={cert3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <ol className="carousel-indicators custom-carousel-indicators">
            <li
              onClick={() => setIndex(0)}
              className={index === 0 ? "active" : ""}
            />
            <li
              onClick={() => setIndex(1)}
              className={index === 1 ? "active" : ""}
            />
            <li
              onClick={() => setIndex(2)}
              className={index === 2 ? "active" : ""}
            />
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
