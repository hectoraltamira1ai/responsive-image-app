import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FullscreenImage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Change this line
  const { src, alt } = location.state || { src: '', alt: '' };

  const handleReturn = () => {
    navigate('/'); // Change this line
  };

  return (
    <div className="fullscreen-container">
      <button onClick={handleReturn} className="return-button">Return to Gallery</button>
      <img src={src} alt={alt} className="fullscreen-image" />
    </div>
  );
};

export default FullscreenImage;
