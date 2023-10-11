import React from 'react';
import './Footer.css'; // Import your custom CSS styles

const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" id='contact'>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="text-primary mb-4">Our Office</h4>
            <p className="mb-2"><i className="material-icons text-primary me-3">location_on</i>123 Street, New York, USA</p>
           <p className="mb-2"><i className="material-icons text-primary me-3">phone</i> +012 345 67890</p>

            <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@example.com</p>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-custom-color rounded-circle me-2" href=""><i className="fa fa-twitter"></i></a>
              <a className="btn btn-square btn-custom-color rounded-circle me-2" href=""><i className="fa fa-facebook-f"></i></a>
              <a className="btn btn-square btn-custom-color rounded-circle me-2" href=""><i className="fa fa-youtube"></i></a>
              <a className="btn btn-square btn-custom-color rounded-circle me-2" href=""><i className="fa fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-primary mb-4">Quick Links</h4>
            <a className="btn btn-link" >About Us</a>
            <a className="btn btn-link" href="">Contact Us</a>
            <a className="btn btn-link" href="">Our Services</a>
            <a className="btn btn-link" href="">Terms & Condition</a>
            <a className="btn btn-link" href="">Support</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-primary mb-4">Business Hours</h4>
            <p className="mb-1">Monday - Friday</p>
            <h6 className="text-light">09:00 am - 07:00 pm</h6>
            <p className="mb-1">Saturday</p>
            <h6 className="text-light">09:00 am - 12:00 pm</h6>
            <p className="mb-1">Sunday</p>
            <h6 className="text-light">Closed</h6>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-primary mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative w-100">
              <input className="form-control bg-transparent w-100 py-4   ps-6 pe-7" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-custom-color py-2 position-absolute top-0 end-0 mt-1  me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
