import React, { useEffect, useState } from 'react';
import './EventRegistration.css'; 

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
  const div = document.createElement('div');
  div.id = 'aichatbot';
  document.body.appendChild(div);

  const existingScript = document.getElementById('chatbot-script');
  if (!existingScript) {
    const script = document.createElement('script');
    script.id = 'chatbot-script';
    script.defer = true;
    script.type = 'module';
    script.src = 'https://aichatbot.sendbird.com/index.js';
    document.body.appendChild(script);
  }

  window.chatbotConfig = ['57DD6C33-E58D-4AC8-B663-86754C01FB55', 'onboarding_bot', {
    apiHost: 'https://api-cf-ap-8.sendbird.com',
  }];

  return () => {
    document.body.removeChild(div);
  };
}, []);

  return (
    <section className="registration">
      <h2>Event Registration</h2>
      <p>Please fill out the form below to register for our upcoming events.</p>
      <form onSubmit={handleSubmit} className="registration-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Event Type:
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">Select an event</option>
            <option value="startup-showdown">Startup Showdown</option>
            <option value="speaker-session">Speaker Session</option>
            <option value="hackathon">Hackathon</option>
          </select>
        </label>
        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default EventRegistration;
