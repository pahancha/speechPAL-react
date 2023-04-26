import React from 'react';
import SpeechRecognitionButton from '../components/SpeechRecognitionButton';
import TranscribedText from '../components/TranscribedText';

function RecordingScreen() {

  return (
    <div>
      <SpeechRecognitionButton />
      <TranscribedText />
    </div>
  );
}

export default RecordingScreen;
