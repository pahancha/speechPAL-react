import React from 'react';
import SpeechRecognitionButton from './components/SpeechRecognitionButton';
import TranscribedText from './components/TranscribedText';
import { TranscribedTextProvider } from './TranscribedTextContext';

function App() {
  return (
    <TranscribedTextProvider>
      <div className="App">
        <SpeechRecognitionButton />
        <TranscribedText />
      </div>
    </TranscribedTextProvider>
  );
}

export default App;
