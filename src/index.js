import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ChatbotLoader = () => {
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

  return null;
};

root.render(
  <React.StrictMode>
    <ChatbotLoader />
    <App />
  </React.StrictMode>
);

reportWebVitals();
