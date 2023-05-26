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

  const buttons = ['need', 'inform', 'preference', 'question', 'general', 'all'];

  return (
    <div className="sbc-select-class-buttons">
      {buttons.map((buttonName) => (
        <button
          key={buttonName}
          className={`sbc-button ${
            selectedButton === buttonName ? 'sbc-selected' : ''
          } ${buttonName === 'all' ? 'sbc-all' : ''}`}
          onClick={() => handleButtonClick(buttonName)}
        >
          {buttonName.charAt(0).toUpperCase() + buttonName.slice(1)}
          {selectedButton === buttonName && (
            <span className="sbc-selected-text">Selected</span>
          )}
        </button>
      ))}
    </div>
  );
}

export default SelectClassButtons;
