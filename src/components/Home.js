import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <h1>Empowering Innovation</h1>
        <p>Funding startups that change the world.</p>
        <a href="/register" className="cta-button">Join Our Next Event</a>
      </header>

      <section className="features">
        <h2>What We Do</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Startup Showdowns</h3>
            <p>Compete for funding and mentorship in our exciting pitch competitions.</p>
          </div>
          <div className="feature-card">
            <h3>Speaker Sessions</h3>
            <p>Learn from industry experts and successful entrepreneurs.</p>
          </div>
          <div className="feature-card">
            <h3>Hackathons</h3>
            <p>Collaborate with teams to innovate solutions in a time-limited environment.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Startups Say</h2>
        <div className="testimonial">
          <p>"XYZ Company gave us the support we needed to turn our idea into reality!"</p>
          <cite>- Hardik Singh, Founder of Tech Innovations</cite>
        </div>
        <div className="testimonial">
          <p>"The mentorship and funding we received were invaluable!"</p>
          <cite>- Priya Mishra, CEO of HealthTech</cite>
        </div>
      </section>
    </div>
  );
};

export default Home;
