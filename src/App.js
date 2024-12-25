import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const convertToUpperCase = () => setText(text.toUpperCase());
  const convertToLowerCase = () => setText(text.toLowerCase());
  const reverseText = () => setText(text.split('').reverse().join(''));

  const removeExtraSpaces = () => setText(text.replace(/\s+/g, ' ').trim());

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  const wordCount = text.trim().split(/\s+/).length;

  const spaceCount = (text.match(/\s/g) || []).length;

  const charCount = text.length;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Text Converter App</h1>
      
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text here..."
        rows="6"
        cols="50"
      />
      
      <div className="buttons">
        <button onClick={convertToUpperCase}>Convert to Uppercase</button>
        <button onClick={convertToLowerCase}>Convert to Lowercase</button>
        <button onClick={reverseText}>Reverse Text</button>
        <button onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
      </div>
      
      <h3>Converted Text:</h3>
      <p>{text}</p>
      
      <div className="info">
        <p>Word Count: {wordCount}</p>
        <p>Space Count: {spaceCount}</p>
        <p>Character Count: {charCount}</p>
      </div>
    </div>
  );
}

export default App;
