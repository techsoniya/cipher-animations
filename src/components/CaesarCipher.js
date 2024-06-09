import React, { useState } from 'react';
import './CaesarCipher.css';

function caesarCipher(str, shift) {
  return str.replace(/[a-z]/gi, c => {
    let start = c <= 'Z' ? 65 : 97;
    return String.fromCharCode((c.charCodeAt(0) - start + shift) % 26 + start);
  });
}

const CaesarCipher = () => {
  const [input, setInput] = useState('');
  const [shift, setShift] = useState(3);
  const [output, setOutput] = useState('');
  const [steps, setSteps] = useState([]);

  const handleEncrypt = () => {
    const result = caesarCipher(input, shift);
    setOutput(result);
    animateSteps(input, shift);
  };

  const animateSteps = (str, shift) => {
    const newSteps = str.split('').map((char, i) => {
      let start = char <= 'Z' ? 65 : 97;
      let end = String.fromCharCode((char.charCodeAt(0) - start + shift) % 26 + start);
      return { char, end };
    });
    setSteps(newSteps);
  };

  return (
    <div className="cipher-container" >
      <h2>Caesar Cipher</h2>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <input
        type="number"
        value={shift}
        onChange={e => setShift(parseInt(e.target.value))}
        placeholder="Shift"
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

export default CaesarCipher;
