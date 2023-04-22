import React, { useState } from 'react';
import SpeechRecognitionButton from '../components/SpeechRecognitionButton';
import TranscribedText from '../components/TranscribedText';

function RecordingScreen() {
  const [transcribedText, setTranscribedText] = useState('Transcribed speech will display here.');

  function handleStartRecording(isRecording) {
    if (isRecording) {
      console.log('Recording started');
    } else {
      console.log('Recording stopped');
    }
  }

  return (
    <div>
      <SpeechRecognitionButton onStartRecording={handleStartRecording} />
      <TranscribedText text={transcribedText} />
    </div>
  );
}

export default RecordingScreen;
