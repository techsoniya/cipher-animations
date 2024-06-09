import React, { useState } from 'react';
import './MonoalphabeticCipher.css';

function monoalphabeticCipher(str, key) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let index = alphabet.indexOf(str[i]);
    result += index === -1 ? str[i] : key[index];
  }
  return result;
}

const MonoalphabeticCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('zyxwvutsrqponmlkjihgfedcba');
  const [output, setOutput] = useState('');
  const [steps, setSteps] = useState([]);

  const handleEncrypt = () => {
    const result = monoalphabeticCipher(input, key);
    setOutput(result);
    animateSteps(input, key);
  };

  const animateSteps = (str, key) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const newSteps = str.split('').map((char, i) => {
      let index = alphabet.indexOf(char);
      let end = index === -1 ? char : key[index];
      return { char, end };
    });
    setSteps(newSteps);
  };

  return (
    <div className="cipher-container">
      <h2>Monoalphabetic Cipher</h2>
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

export default MonoalphabeticCipher;
