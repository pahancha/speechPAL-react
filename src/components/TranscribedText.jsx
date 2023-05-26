import React ,{ useContext }from 'react';
import './TranscribedText.css';
import { TranscribedTextContext } from '../TranscribedTextContext';


function TranscribedText() {
  const { transcribedText } = useContext(TranscribedTextContext);


  return (
    <div className="text-container">
      <p className="transcribed-text">{transcribedText || 'Transcribed speech will display here.'}</p>
    </div>
  );
}

export default TranscribedText;
