import React from 'react';
import './HowTo.css';
import Footer from '../components/Footer';

const HowTo = () => {
  return (
    <div className="how-to">
      <h1>How to Use speechPAL</h1>
      
      <div className="how-to-section">
        <h2>How to use the web application?</h2>
        <ol>
          <li>Click the "Web Application" tab in the navigation bar.</li>
          <li>Click on the big "Click here to speak" button.</li>
          <li>Click the button again to stop recording and see the transcribed text.</li>
        </ol>
      </div>
      
      <div className="how-to-section">
        <h2>How to use the mobile application?</h2>
        <ol>
          <li>Go to the "Mobile Application" tab in the navigation menu.</li>
          <li>Click on the "Download APK" button to download the application.</li>
          <li>Install the application on your Android device.</li>
          <li>Open the app and click on the "Click here to speak" button.</li>
          <li>Click the button again to stop recording and see the transcribed text.</li>
        </ol>
      </div>
    <Footer />
    </div>
  );
};

export default HowTo;
