import React from 'react';
import './Contact.css';

function Contact() {
  const iconStyle = {
    margin: '10px', // Adjust the margin as per your preference
  };

  return (
    <div className="container-xxl contact py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <p className="fs-3  fw-medium fst-italic text-prim">Contact Us</p>
            <h1 className="display-6">If You Have Any Query, Please Contact Us</h1>
          </div>
          <div className="row g-5 mb-5 ">
            <div className="col-md-4 col-sm-12 text-center mb-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="btn-square mx-auto d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-envelope fa-3x icon" style={iconStyle}></i>
              </div>
              <p className="contact-info me-3">dsskjshfk@gmail.com</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center mb-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="btn-square mx-auto d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-phone-volume fa-3x icon" style={iconStyle}></i>
              </div>
              <p className="contact-info">3124256744</p>
            </div>
            <div className="col-md-4 col-sm-12 text-center wow fadeInUp" data-wow-delay="0.5s">
              <div className="btn-square mx-auto d-flex align-items-center justify-content-center">
                <i className="fa-solid fa-location-dot fa-3x icon" style={iconStyle}></i>
              </div>
              <p className="contact-info">sfskfskfhnmnm</p>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-8 mx-auto wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="mb-4">Need a functional contact form?</h3>
              <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code, and you're done.</p>
              <form>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '120px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-danger rounded-pill py-3 px-5" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
