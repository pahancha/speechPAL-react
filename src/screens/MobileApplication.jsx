import React from 'react';
import './MobileApplication.css';
import downloadApk from './../assets/download-apk.png';
import Footer from '../components/Footer';

const MobileApplication = () => {
  const handleClick = () => {
    window.open('https://drive.google.com/your-google-drive-link', '_blank');
  };

  return (
    <div className="mobile-application">
      <h1>Mobile Application</h1>
      <p>
        Our mobile application is designed to transcribe the speech of people
        with speech disorders and generate meaningful sentences out of them,
        making communication easier and more effective.
      </p>
      <h3 className='clickonH'>Click on the APK to download the APK</h3>
      <img
        src={downloadApk}
        alt="Download APK"
        className="download-apk"
        onClick={handleClick}
      />
      <Footer />
    </div>
  );
};

export default MobileApplication;
