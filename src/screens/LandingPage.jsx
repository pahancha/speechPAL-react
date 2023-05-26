import React from 'react';
import './LandingPage.css';
import logo from './../assets/logo.png';
import usingPhoneOldWoman from './../assets/using-phone-old-woman.jpeg';
import availableAndroid from './../assets/available-android.png';
import availableIOS from './../assets/available-ios.jpeg';
import availableWeb from './../assets/available-web.webp';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <>
    <div className="landing-page">
      <div className="hero">
        <div className="hero-text">
          <img src={logo} alt="speechPAL logo" className="hero-logo" />
          <h1 className="title">speechPAL</h1>
          <h2 className="tagline">Empowering communication for people with language disorders through advanced machine learning.</h2>
        </div>
        <img src={usingPhoneOldWoman} alt="Old woman using phone" className="hero-image" />
      </div>

      <div className="content-wrapper">
        <div className="availability">
          <h3>Available on Web, Android, and iOS</h3>
          <div className="platforms">
            <img src={availableWeb} alt="Web Application" className="platform-icon" />
            <img src={availableAndroid} alt="Android Application" className="platform-icon-android" />
            <img src={availableIOS} alt="iOS Application" className="platform-icon" />
          </div>
        </div>

        <div className="technologies">
          <h3>Powered by Cutting-Edge Technologies</h3>
          <div className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Python" className="tech-icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" className="tech-icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="tech-icon" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg" alt="PyTorch" className="tech-icon" />
          </div>
        </div>
      </div>

    <Footer />
    </div>
    </>
  );
};

export default LandingPage;
