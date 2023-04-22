import React from 'react';
import './TranscribedText.css';

function TranscribedText(props) {
  return (
    <div className="text-container">
      <p className="transcribed-text">{props.text || 'Transcribed speech will display here.'}</p>
    </div>
  );
}

export default TranscribedText;
