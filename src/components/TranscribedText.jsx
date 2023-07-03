// import React, { useContext } from 'react';
// import './TranscribedText.css';
// import { TranscribedTextContext } from '../TranscribedTextContext';

// function TranscribedText() {
//   const { transcribedText, setTranscribedText } = useContext(TranscribedTextContext);

//   const handleSentenceChange = (index, event) => {
//     const newSentences = [...transcribedText];
//     newSentences[index] = event.target.value.slice(0, 100);    
//     setTranscribedText(newSentences);
//   };

//   return (
//     <div className="text-container">
//       {transcribedText.length > 0 ? (
//         <ul>
//           {transcribedText.map((sentence, index) => (
//             <li key={index}>
//               <textarea
//                 className="transcribed-text editable"
//                 value={sentence}
//                 onChange={(event) => handleSentenceChange(index, event)}
//                 maxLength={100}               
//                 />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="transcribed-text"> <b>Transcribed speech will display here.</b> You <b>can edit</b> them to communicate exactly what you intended.</p>
//       )}
//     </div>
//   );
// }

// export default TranscribedText;

import React, { useContext } from 'react';
import './TranscribedText.css';
import { TranscribedTextContext } from '../TranscribedTextContext';

function TranscribedText() {
  const { transcribedText, setTranscribedText } = useContext(TranscribedTextContext);

  const handleSentenceChange = (index, event) => {
    const newSentences = [...transcribedText];
    newSentences[index] = event.target.value.slice(0, 100);
    setTranscribedText(newSentences);
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
<div className="text-container">
  {transcribedText.length > 0 ? (
    <ul>
      {transcribedText.map((sentence, index) => (
        <li key={index}>
          <textarea
            className="transcribed-text editable"
            value={sentence}
            onChange={(event) => handleSentenceChange(index, event)}
            maxLength={100}
          />
          <button className='speak-button' onClick={() => speakText(sentence, 'default')}>Speak 🗣️🔊</button>
        </li>
      ))}
    </ul>
  ) : (
    <p className="transcribed-text">
      <b>Transcribed speech will display here.</b> You <b>can edit</b> them to communicate exactly what you intended.
    </p>
  )}
</div>
  );
}

export default TranscribedText;
