import React, { useState } from 'react';
import './VernamCipher.css';

function vernamCipher(str, key) {
  return str.split('').map((c, i) => 
    String.fromCharCode(c.charCodeAt(0) ^ key.charCodeAt(i))
  ).join('');
}

const VernamCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [steps, setSteps] = useState([]);

  const handleEncrypt = () => {
    const result = vernamCipher(input, key);
    setOutput(result);
    animateSteps(input, key);
  };

  const animateSteps = (str, key) => {
    const newSteps = str.split('').map((char, i) => {
      let end = String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i));
      return { char, end };
    });
    setSteps(newSteps);
  };

  return (
    <div className="cipher-container">
      <h2>Vernam Cipher</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <input
        type="text"
        value={key}
        onChange={e => setKey(e.target.value)}
        placeholder="Key"
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <div className="output">
        {steps.map((step, i) => (
          <span key={i} className="step">
            {step.char} ➜ {step.end}
          </span>
        ))}
      </div>
      <div className="result">Output: {output}</div>
    </div>
  );
};

export default VernamCipher;
