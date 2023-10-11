import React from 'react'
import articleImage from '../../img/yoga2.jpg';
import './Yoga.css'


function Yoga() {
  return (
<div className="container-xxxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="section-title">
              <h1 className="display-2 text-dark mb-4 animated slideInDown custom-font">Yoga</h1>

              <div className="sec-title">
                  <h2>The success history of Viswakarma Vastu</h2>
                </div>
              <div className="underline"></div>

              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna. Tempor erat elitr rebum at clita.</p>
              <a href="#" className="btn btn-danger rounded-pill py-3 px-5">Read More</a>
            </div>
          </div>
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
            <img className="img-fluid equal-size" src={articleImage} alt="Featured Article" />
          </div>
        </div>
      </div>
    </div>  )
}

export default Yoga