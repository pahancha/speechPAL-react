import React from 'react';
import SpeechRecognitionButton from './components/SpeechRecognitionButton';
import TranscribedText from './components/TranscribedText';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { TranscribedTextProvider } from './TranscribedTextContext';
import LandingPage from './screens/LandingPage';
import Header from './components/Header';
import WebApplication from './screens/WebApplication'
import MobileApplication from './screens/MobileApplication'
import HowTo from './screens/HowTo'
import ReadPaper from './screens/ReadPaper'

function App() {
  return (
    <TranscribedTextProvider>
      <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/web-app" element={<WebApplication />} />
          <Route path="/mobile-app" element={<MobileApplication />} />
          <Route path="/how-to-use" element={<HowTo />} />
          <Route path="/read-paper" element={<ReadPaper />} />
        </Routes>
      </div>
    </Router>
    </TranscribedTextProvider>
  );
}

export default App;
