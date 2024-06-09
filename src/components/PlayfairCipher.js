import React, { useState } from 'react';
import './PlayfairCipher.css';

const generateKeyMatrix = (key) => {
  let matrix = [];
  let alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ'; // 'J' is typically merged with 'I'
  let used = {};
  key = key.toUpperCase().replace(/J/g, 'I') + alphabet;
  key.split('').forEach(c => {
    if (!used[c] && c !== 'J' && matrix.length < 25) {
      used[c] = true;
      matrix.push(c);
    }
  });
  return matrix;
};

const playfairCipherEncrypt = (text, keyMatrix) => {
  let output = '';
  text = text.toUpperCase().replace(/J/g, 'I').replace(/[^A-Z]/g, '');
  if (text.length % 2 !== 0) text += 'X'; // padding

  for (let i = 0; i < text.length; i += 2) {
    let a = text[i];
    let b = text[i + 1];
    let aIndex = keyMatrix.indexOf(a);
    let bIndex = keyMatrix.indexOf(b);
    let aRow = Math.floor(aIndex / 5), aCol = aIndex % 5;
    let bRow = Math.floor(bIndex / 5), bCol = bIndex % 5;

    if (aRow === bRow) {
      output += keyMatrix[aRow * 5 + (aCol + 1) % 5];
      output += keyMatrix[bRow * 5 + (bCol + 1) % 5];
    } else if (aCol === bCol) {
      output += keyMatrix[((aRow + 1) % 5) * 5 + aCol];
      output += keyMatrix[((bRow + 1) % 5) * 5 + bCol];
    } else {
      output += keyMatrix[aRow * 5 + bCol];
      output += keyMatrix[bRow * 5 + aCol];
    }
  }
  return output;
};

const PlayfairCipher = () => {
  const [input, setInput] = useState('');
  const [key, setKey] = useState('KEYWORD');
  const [output, setOutput] = useState('');

  const handleEncrypt = () => {
    const keyMatrix = generateKeyMatrix(key);
    const result = playfairCipherEncrypt(input, keyMatrix);
    setOutput(result);
  };

  return (
    <div className="cipher-container">
      <h2>Playfair Cipher</h2>
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
      <div className="result">Output: {output}</div>
    </div>
  );
};

export default PlayfairCipher;
