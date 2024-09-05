import React from 'react';
import { useNavigate } from 'react-router-dom'; // Change this line
import './ImageComponent.css';

const ImageComponent = ({ src, alt }) => {
  const navigate = useNavigate(); // Change this line

  const handleClick = () => {
    navigate('/fullscreen', { state: { src, alt } }); // Change this line
  };

  return (
    <div className="zoom-img" onClick={handleClick}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageComponent;
