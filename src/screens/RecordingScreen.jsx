import React from 'react';
import SpeechRecognitionButton from '../components/SpeechRecognitionButton';
import TranscribedText from '../components/TranscribedText';
import SelectClassButtons from '../components/SelectClassButtons';



function RecordingScreen() {


  return (
    <div>
      <SelectClassButtons />
      <SpeechRecognitionButton />
      <TranscribedText />
    </div>

  );
}

export default RecordingScreen;
