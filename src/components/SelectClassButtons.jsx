import React, { useState, useEffect } from 'react';
import './SelectClassButtons.css';

function SelectClassButtons() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [context, setContext] = useState('');

  useEffect(() => {
    console.log(context);
  }, [context]);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setContext(buttonName);
  };

  return (
    <div className="sbc-select-class-buttons">
      <button
        className={`sbc-button ${
          selectedButton === 'need' ? 'sbc-selected' : ''
        }`}
        onClick={() => handleButtonClick('need')}
      >
        Need
        {selectedButton === 'need' && <span className="sbc-selected-text">Selected</span>}
      </button>
      <button
        className={`sbc-button ${
          selectedButton === 'inform' ? 'sbc-selected' : ''
        }`}
        onClick={() => handleButtonClick('inform')}
      >
        Inform
        {selectedButton === 'inform' && <span className="sbc-selected-text">Selected</span>}
      </button>
      <button
        className={`sbc-button ${
          selectedButton === 'preference' ? 'sbc-selected' : ''
        }`}
        onClick={() => handleButtonClick('preference')}
      >
        Preference
        {selectedButton === 'preference' && <span className="sbc-selected-text">Selected</span>}
      </button>
      <button
        className={`sbc-button ${
          selectedButton === 'question' ? 'sbc-selected' : ''
        }`}
        onClick={() => handleButtonClick('question')}
      >
        Question
        {selectedButton === 'question' && <span className="sbc-selected-text">Selected</span>}
      </button>
      <button
        className={`sbc-button ${
          selectedButton === 'general' ? 'sbc-selected' : ''
        }`}
        onClick={() => handleButtonClick('general')}
      >
        General
        {selectedButton === 'general' && <span className="sbc-selected-text">Selected</span>}
      </button>

      <button
        className={`sbc-button sbc-all ${
          selectedButton === 'all' ? 'sbc-selected' : ''
        }`}
        onClick={() => handleButtonClick('all')}
      >
        All
        {selectedButton === 'all' && <span className="sbc-selected-text">Selected</span>}
      </button>
    </div>
  );
}

export default SelectClassButtons;
