import React from 'react';
import CaesarCipher from './components/CaesarCipher';
import MonoalphabeticCipher from './components/MonoalphabeticCipher';
import VigenereCipher from './components/VigenereCipher';
import VernamCipher from './components/VernamCipher';
import HillCipher from './components/HillCipher';
import PlayfairCipher from './components/PlayfairCipher';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Cipher Animations</h1>
      <CaesarCipher />
      <MonoalphabeticCipher />
      <VigenereCipher />
      <VernamCipher />
      <HillCipher />
      <PlayfairCipher />
    </div>
  );
}

export default App;
