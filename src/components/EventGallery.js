import React from 'react';
import './EventGallery.css'; 
import image1 from './assets/event1.jpg';
import image2 from './assets/event2.png';
import image3 from './assets/event3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

const EventGallery = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <section className="gallery">
      <h2>Event Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={Event ${index + 1}} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventGallery;
