import React, { useEffect } from 'react';
import './EventGallery.css'; 
import image1 from './assets/event1.jpg';
import image2 from './assets/event2.png';
import image3 from './assets/event3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

const EventGallery = () => {
  useEffect(() => {
    const div = document.createElement('div');
    div.id = 'aichatbot';
    document.body.appendChild(div);

    window.chatbotConfig = ['57DD6C33-E58D-4AC8-B663-86754C01FB55', 'onboarding_bot', {
      apiHost: 'https://api-cf-ap-8.sendbird.com',
    }];

    const script = document.createElement('script');
    script.defer = true;
    script.type = 'module';
    script.src = 'https://aichatbot.sendbird.com/index.js';

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    return () => {
      document.body.removeChild(div);
      firstScript.parentNode.removeChild(script);
    };
  }, []);

  const images = [image1, image2, image3, image4, image5];

  return (
    <section className="gallery">
      <h2>Event Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div key={index} className="gallery-item">
            <img src={src} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventGallery;
