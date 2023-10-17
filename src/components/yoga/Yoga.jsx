import React from 'react';
import articleImage from '../../img/yoga1.jpg';
import './Yoga.css';

function Yoga() {
  return (
    <div className="container-xxxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="section-title">
              <h1 className="display-2 text-dark mb-4 animated slideInDown custom-font">Yoga</h1>

              <div className="sec-title">
                <h2>Discover Serenity: Yoga Meditation with Kripesh Krishna</h2>
              </div>
              <div className="underline"></div>

              <p className="mb-4">
                Welcome to a sanctuary of tranquility and self-discovery. At Kripesh Krishna's Yoga Meditation, we invite you on a transformative journey, embracing the ancient art of Yoga Meditation. Guided by Kripesh Krishna, a revered Yoga and Meditation expert, our sessions are crafted to help you find inner peace, balance, and spiritual enlightenment in the midst of life's chaos.
              </p>
              {/* <a href="#" className="btn btn-danger rounded-pill py-3 px-5">Read More</a> */}
            </div>
          </div>
          <div className="col-lg-5 wow fadeIn" data-wow-delay="0.5s">
            <img className="img-fluid equal-size" src={articleImage} alt="Featured Article" />
          </div>
        </div>
        <div>
        <p className=" p-1">
               <h6> Our Yoga Meditation Sessions:</h6>
                <span className="bold-uppercase">Mindful Breathing and Pranayama:</span> Embark on a journey of conscious breathing, calming the mind, and enhancing self-awareness. Kripesh's expert guidance in Pranayama techniques will help you connect with your breath, promoting relaxation and mental clarity.
                <span className="bold-uppercase">Guided Meditation for Inner Peace:</span> Experience the serenity of guided meditation, where Kripesh gently leads you into the depths of your being. These sessions are designed to reduce stress, boost mindfulness, and cultivate a sense of profound peace within.
                <span className="bold-uppercase">Chakra Balancing and Energy Healing:</span> Explore the subtle energies within your body through chakra balancing techniques. Kripesh's expert knowledge allows you to harmonize your energy centers, promoting emotional stability and vitality.
                <span className="bold-uppercase">Yoga Nidra for Deep Relaxation:</span> Delve into the art of conscious relaxation with Yoga Nidra. Kripesh's soothing voice guides you into a state of deep rest, releasing tension, and revitalizing your body and mind.
                <span className="bold-uppercase">Spiritual Enlightenment and Self-Realization:</span> Embark on a spiritual journey guided by Kripesh Krishna's profound insights. Discover the path to self-realization, inner wisdom, and profound spiritual growth through meditation and yogic philosophy.
              </p> 
              <p><h5><b>Why Choose Kripesh Krishna's Yoga Meditation:</b></h5>
At Kripesh Krishna's Yoga Meditation, we offer more than just meditation sessions. We offer a sanctuary, a safe space where you can explore the depths of your consciousness, heal from within, and find the peace you've been seeking. Kripesh's gentle guidance and deep understanding of the human psyche create an environment where transformation is not just possible but inevitable.</p>
<p><b>Ready to Begin Your Journey?</b>
Join us in the realm of Yoga Meditation, where tranquility meets transformation. Let Kripesh Krishna be your guide, illuminating the path to inner peace and spiritual awakening. Embrace the serenity within. Contact us today and start your transformative journey with Kripesh Krishna's Yoga Meditation.</p>
        </div>
      </div>
    </div>
  );
}

export default Yoga;
