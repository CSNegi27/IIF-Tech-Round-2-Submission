import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
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

  return (
    <section className="about">
      <h2>About Us</h2>
      <p>
        Welcome to XYZ Company, a platform dedicated to funding and nurturing innovative startups. We believe that great ideas deserve a chance to flourish, and our mission is to empower entrepreneurs to turn their visions into reality.
      </p>
      
      <h3>Our Mission</h3>
      <p>
        To provide startups with the resources, guidance, and funding necessary to succeed in today’s competitive market.
      </p>

      <h3>Our Vision</h3>
      <p>
        To be a leading incubator for startups globally, fostering innovation and creating sustainable businesses that positively impact society.
      </p>

      <h3>Our Values</h3>
      <ul>
        <li>Innovation: We encourage creative thinking and out-of-the-box solutions.</li>
        <li>Integrity: We act with honesty and uphold strong moral principles.</li>
        <li>Collaboration: We believe in the power of teamwork and community.</li>
        <li>Excellence: We strive for excellence in everything we do.</li>
      </ul>

      <h3>Meet Our Team</h3>
      <p>
        Our dedicated team of professionals comes from diverse backgrounds, bringing a wealth of experience in entrepreneurship, investment, and business development.
      </p>
      <ul>
        <li><strong>Chaitanya</strong> - CEO & Founder</li>
        <li><strong>Vaibhav</strong> - Manager</li>
        <li><strong>Riya</strong> - Marketing Head</li>
      </ul>
      <h3>Our Journey</h3>
      <p>
        Founded in 2023, XYZ Company has successfully supported numerous startups in various sectors, including technology, healthcare, and sustainability. We take pride in watching our startups grow and make a difference in the world.
      </p>
    </section>
  );
};

export default AboutUs;
