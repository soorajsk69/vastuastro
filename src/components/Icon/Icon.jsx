import React from 'react';
import './Icon.css'; // Import your CSS file for styling

function Icon() {
  return (
    <div className="floating-icons">
      <div className="icon">
        <i className="fa fa-whatsapp whatsapp" aria-hidden="true"></i>
      </div>
      <div className="icon-phone">
        <i className="fa fa-phone phone" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Icon;
