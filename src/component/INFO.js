import React, { useState } from 'react';
import './INFO.css';

const INFO = () => {
  const [aVal, setA] = useState(0);
  const [bVal, setB] = useState(0);
  const [cVal, setC] = useState(0);
  const [dVal, setD] = useState(0);
  const [eVal, setE] = useState(0);
  const [fVal, setF] = useState(0);
  const [gVal, setG] = useState(0);
  const [hVal, setH] = useState(0);
  const [iVal, setI] = useState(0);
  const [responseData, setResponseData] = useState(null); // State variable to hold response data
  const callDataSaveApi = async (e) => {
    e.preventDefault();

    const data = {
      A: parseFloat(aVal),
      B: parseFloat(bVal),
      C: parseFloat(cVal),
      D: parseFloat(dVal),
      E: parseFloat(eVal),
      F: parseFloat(fVal),
      G: parseFloat(gVal),
      H: parseFloat(hVal),
      I: parseFloat(iVal),
    };

    try {
      const response = await fetch('http://localhost:3001/api/minroute/mincostCalculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setResponseData(result); // Set response data to state
    } catch (error) {
      console.error('Error saving data:', error.message);
    }
  };

  const handleIncrement = (setter) => {
    setter((prevValue) => prevValue + 1);
  };

  const handleDecrement = (setter) => {
    setter((prevValue) => prevValue - 1);
  };

  return (
    <div className='info-outer'>
      <div className='info-input'>
        <h3>INPUT DATA</h3>
        <input
          className='info-items'
          type='text'
          value={aVal}
          onChange={(e) => setA(e.target.value)}
        />
        <button onClick={() => handleDecrement(setA)}>−</button>
        <button onClick={() => handleIncrement(setA)}>+</button>
        <input
          className='info-items'
          type='text'
          value={bVal}
          onChange={(e) => setB(e.target.value)}
        />
        <button onClick={() => handleDecrement(setB)}>−</button>
        <button onClick={() => handleIncrement(setB)}>+</button>
        <input
          className='info-items'
          type='text'
          value={cVal}
          onChange={(e) => setC(e.target.value)}
        />
        <button onClick={() => handleDecrement(setC)}>−</button>
        <button onClick={() => handleIncrement(setC)}>+</button>
        <input
          className='info-items'
          type='text'
          value={dVal}
          onChange={(e) => setD(e.target.value)}
        />
        <button onClick={() => handleDecrement(setD)}>−</button>
        <button onClick={() => handleIncrement(setD)}>+</button>
        <input
          className='info-items'
          type='text'
          value={eVal}
          onChange={(e) => setE(e.target.value)}
        />
        <button onClick={() => handleDecrement(setE)}>−</button>
        <button onClick={() => handleIncrement(setE)}>+</button>
        <input
          className='info-items'
          type='text'
          value={fVal}
          onChange={(e) => setF(e.target.value)}
        />
        <button onClick={() => handleDecrement(setF)}>−</button>
        <button onClick={() => handleIncrement(setF)}>+</button>
        <input
          className='info-items'
          type='text'
          value={gVal}
          onChange={(e) => setG(e.target.value)}
        />
        <button onClick={() => handleDecrement(setG)}>−</button>
        <button onClick={() => handleIncrement(setG)}>+</button>
        <input
          className='info-items'
          type='text'
          value={hVal}
          onChange={(e) => setH(e.target.value)}
        />
        <button onClick={() => handleDecrement(setH)}>−</button>
        <button onClick={() => handleIncrement(setH)}>+</button>
        <input
          className='info-items'
          type='text'
          value={iVal}
          onChange={(e) => setI(e.target.value)}
        />
        <button onClick={() => handleDecrement(setI)}>−</button>
        <button onClick={() => handleIncrement(setI)}>+</button>
        <button className='info-items' type='submit' onClick={callDataSaveApi}>
          Submit
        </button>
      </div>
      {responseData && (
        <div className='response-container'>
          <h3>Response Data</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default INFO;
