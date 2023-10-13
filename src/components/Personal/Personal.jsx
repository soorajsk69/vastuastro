import React, { useState } from 'react';
import './Personal.css';

function Personal() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <section>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <img
                className="img-fluid"
                src="https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div>
                <div className="section-header text-center advertisers-service-sec">
                  <h2 className="fw-bold fs-1">
                    Kripesh
                    <span className="b-class-secondary"> Krishnan </span>
                  </h2>
                  <p className="sec-icon"><i className="fa-solid fa-gear"></i></p>
                </div>
              </div>
              <p className="mb-4" style={{ lineHeight: '2' }}>
                Kripesh Krishnan is a highly skilled and dedicated scientific Vaasthu consultant, renowned for his expertise in solving complex Vaasthu problems without the need for demolishing buildings.With a diploma in Vedic Vaasthusastra, he brings a deep understanding of traditional principles coupled with innovative approaches to transform spaces.Kripesh has pioneered a new era in Vedic Vaasthushastra, introducing fresh perspectives and creative solutions to age-old challenges. His unique methodology and problem-solving abilities have earned him recognition in the field, making him a sought-after expert in the realm of Vaasthu consulting.


                {showMore && (
                  <>
                    Apart from his proficiency in Vaasthu, Kripesh is also a certified yoga and meditation trainer, holding credentials from the National Skill Development Council. He believes in holistic well-being and seamlessly integrates his knowledge of yoga and meditation with Vaasthu practices, creating harmonious environments that promote both physical and mental wellness.
                    With a passion for transforming spaces and enriching lives, Kripesh Krishnan continues to make significant contributions to the world of Vedic Vaasthushastra and holistic living. His innovative approaches, coupled with his extensive knowledge and expertise, make him a respected figure in the realm of Vaasthu consulting and spiritual wellness.
                  </>
                )}
              </p>
              <a href="#read-more" className="btn btn-custom-color btn-md rounded-pill py-2 px-3" onClick={toggleShowMore}>
  {showMore ? 'Read Less' : 'Read More'}
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Personal;
