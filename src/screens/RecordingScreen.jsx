import React, { useState } from 'react';
import SpeechRecognitionButton from '../components/SpeechRecognitionButton';
import TranscribedText from '../components/TranscribedText';

function RecordingScreen() {
  const [transcribedText, setTranscribedText] = useState('');

  function handleTranscription(text) {
    setTranscribedText(text);
  }

  return (
    <div>
      <SpeechRecognitionButton onTranscription={handleTranscription} />
      <TranscribedText text={transcribedText} />
    </div>
  );
}

export default RecordingScreen;
