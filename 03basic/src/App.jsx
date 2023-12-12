import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const TextUtils = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(outputText);
    alert('Text copied to clipboard!');
  };

  const handleUpperCase = () => {
    setOutputText(inputText.toUpperCase());
  };

  const handleLowerCase = () => {
    setOutputText(inputText.toLowerCase());
  };

  return (
    <div>
      <h2>Text Utils</h2>
      <div>
        <label htmlFor="textInput">Enter Text:</label>
        <textarea
          id="textInput"
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <button onClick={handleCopyText}>Copy Text</button>
        <button onClick={handleUpperCase}>Convert to Uppercase</button>
        <button onClick={handleLowerCase}>Convert to Lowercase</button>
      </div>
      <div>
        <label htmlFor="outputText">Output Text:</label>
        <textarea
          id="outputText"
          value={outputText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default TextUtils;

