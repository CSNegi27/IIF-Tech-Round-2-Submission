import React, { useEffect, useState } from 'react';
import './ContactUs.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    <section className="contact">
      <h2>Contact Us</h2>
      <p>
        We would love to hear from you! Please fill out the form below or reach us through our social media channels.
      </p>

      <div className="contact-info">
        <h3>Get in Touch</h3>
        <p><strong>Email:</strong> info@xyzcompany.com</p>
        <p><strong>Phone:</strong> +91 9897127123</p>
        <p><strong>Location:</strong> 123 Startup Avenue, Innovation City, New Delhi</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
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
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-media">
        <h3>Follow Us</h3>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
