// Prevodnik.jsx
import React, { useState } from 'react';
import './Prevodnik.css';

function bitsToBytes(bity) {
  return bity / 8;
}

function bytesToBits(bajty) {
  return bajty * 8;
}

function Prevodnik() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [inputUnit, setInputUnit] = useState('bity');
  const [outputUnit, setOutputUnit] = useState('bajty');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputUnitChange = (e) => {
    setInputUnit(e.target.value);
  };

  const handleOutputUnitChange = (e) => {
    setOutputUnit(e.target.value);
  };

  const handleConfirm = () => {
    let result;
    if (inputUnit === 'bity' && outputUnit === 'bajty') {
      result = bitsToBytes(inputValue);
    } else if (inputUnit === 'bajty' && outputUnit === 'bity') {
      result = bytesToBits(inputValue);
    }
    setOutputValue(result);
  };

  return (
    <div className="converter">
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <select value={inputUnit} onChange={handleInputUnitChange}>
        <option value="bity">Bity</option>
        <option value="bajty">Bajty</option>
      </select>
      <select value={outputUnit} onChange={handleOutputUnitChange}>
        <option value="bity">Bity</option>
        <option value="bajty">Bajty</option>
      </select>
      <button onClick={handleConfirm}>Potvrdit</button>
      <div className="output">{outputValue} {outputUnit}</div>
    </div>
  );
}

export default Prevodnik;
