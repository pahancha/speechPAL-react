import React, {useState} from 'react';
import SpeechRecognitionButton from '../components/SpeechRecognitionButton';
import TranscribedText from '../components/TranscribedText';
import SelectClassButtons from '../components/SelectClassButtons';



function RecordingScreen() {
  const [selectedContext, setSelectedContext] = useState("general:");


  return (
    <div>
      <SelectClassButtons selectedContext={selectedContext} setSelectedContext = {setSelectedContext}/>
      <SpeechRecognitionButton selectedContext={selectedContext}/>
      <TranscribedText />
    </div>

  );
}

export default RecordingScreen;
