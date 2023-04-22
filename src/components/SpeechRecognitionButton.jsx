import React, { useState } from 'react';
import './SpeechRecognitionButton.css';

function SpeechRecognitionButton() {
  const [isRecording, setIsRecording] = useState(false);

  function handleButtonClick() {
    setIsRecording(!isRecording);
  }

  return (
    <div className="button-container">
      <button
        className={`speech-button ${isRecording ? 'recording' : ''}`}
        onClick={handleButtonClick}
      >
        {isRecording ? 'Stop' : 'Click here to speak'}
      </button>
    </div>
  );
}

export default SpeechRecognitionButton;
