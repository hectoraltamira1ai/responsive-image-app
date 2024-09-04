import React from 'react';
import ImageComponent from './components/ImageComponent';
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';

const App = () => {
  const images = [
    { src: image1, alt: 'Image 1' },
    { src: image2, alt: 'Image 2' },
    { src: image3, alt: 'Image 3' },
    { src: image4, alt: 'Image 4' },
    { src: image5, alt: 'Image 5' },
    { src: image6, alt: 'Image 6' },
    ];

  return (
    <div className="app-container">
      <h1>Responsive Image Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <ImageComponent key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </div>
  );
};

export default App;
