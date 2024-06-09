import React, { useState } from 'react';
import './HillCipher.css';

function hillCipher(str, matrix) {
  // Basic implementation for 2x2 Hill Cipher
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    let char1 = str.charCodeAt(i) - 65;
    let char2 = str.charCodeAt(i + 1) - 65;
    let encrypted1 = (matrix[0][0] * char1 + matrix[0][1] * char2) % 26;
    let encrypted2 = (matrix[1][0] * char1 + matrix[1][1] * char2) % 26;
    result += String.fromCharCode(encrypted1 + 65) + String.fromCharCode(encrypted2 + 65);
  }
  return result;
}

const HillCipher = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const matrix = [[2, 3], [1, 4]];  // Example key matrix

  const handleEncrypt = () => {
    const result = hillCipher(input, matrix);
    setOutput(result);
  };

  return (
    <div className="cipher-container">
      <h2>Hill Cipher</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <div className="result">Output: {output}</div>
    </div>
  );
};

export default HillCipher;
