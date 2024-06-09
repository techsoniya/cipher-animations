import React, { useState } from 'react';
import './VigenereCipher.css';

function vigenereCipher(str, key) {
  let keyIndex = 0;
  return str.replace(/[a-z]/gi, c => {
    let start = c <= 'Z' ? 65 : 97;
    let k = key[keyIndex % key.length];
    keyIndex++;
    return String.fromCharCode((c.charCodeAt(0) - start + (k.toLowerCase().charCodeAt(0) - 97)) % 26 + start);
  });
}

const VigenereCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('key');
  const [output, setOutput] = useState('');
  const [steps, setSteps] = useState([]);

  const handleEncrypt = () => {
    const result = vigenereCipher(input, key);
    setOutput(result);
    animateSteps(input, key);
  };

  const animateSteps = (str, key) => {
    const newSteps = str.split('').map((char, i) => {
      let start = char <= 'Z' ? 65 : 97;
      let k = key[i % key.length];
      let end = String.fromCharCode((char.charCodeAt(0) - start + (k.toLowerCase().charCodeAt(0) - 97)) % 26 + start);
      return { char, end };
    });
    setSteps(newSteps);
  };

  return (
    <div className="cipher-container">
      <h2>Vigenère Cipher</h2>
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

export default VigenereCipher;
