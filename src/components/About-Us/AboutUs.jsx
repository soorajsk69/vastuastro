import React from 'react'

import './AboutUs.css'

function AboutUs() {
  return (

    <>
   <section id="about">
        <div>
          <div className="section-header about text-center advertisers-service-sec">
            <h2 className="fw-bold fs-1">
              About
              <span className="b-class-secondary"> Us </span>
            </h2>
            <p className="sec-icon"><i className="fa-solid fa-gear"></i></p>
          </div>
        </div>
        <section className="about-section">
  
          <div className="container">
  
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>The success history of Viswakarma Vastu</h2>
                  </div>
                  <div className="text">
                    I am Rahul Yaduvanshi works at Css3 Transition since last 3 years. We are here to provide touch notch solution for your website or web application that helps you to make your website look attractive & efficient in handling by creating useful plugins that you need.
                  </div>
                  <div className="text">
                    We are here to serve you next level tutorial that currently in trend to match you with your expertise. Css3 transition is a learning website. where you can find many good quality content related to web development and tutorials about plugins. here we are using html, html5, css, css3, jquery & javascript along with inspirational UI design layout by professionals by using Photoshop and adobe illustrator.
                  </div>
                  <div className="btn-box">
                    <a href="#" className="theme-btn btn-style-one">Contact Us</a>
                  </div>
                </div>
              </div>
  
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="author-desc">
                    <h2>Kripesh Krishnan</h2>
                    <span>Astrologer</span>
                  </div>
                  <figure className="image-1">
                    <a href="#" className="lightbox-image" data-fancybox="images">
                      <img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
  
          </div>
        </section>
   </section>
    </>
  )
}

export default AboutUs