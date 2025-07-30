import React, { useState } from 'react';

function DiceRoller() {
  const [diceCount, setDiceCount] = useState('');
  const [results,setResults] = useState([]);

  const handleRoll = (e) => {
    e.preventDefault(); // prevent default form submission
    const count = parseInt(diceCount);
    if (isNaN(count) || count < 1 || count > 12) {
      alert("Please enter a number between 1 and 12");
      return;
    }

    const rolls = Array.from({ length: count }, () =>
      Math.floor(Math.random() * 6) + 1
    );
    setResults(rolls);
  };

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h1>🎲 Dice Roller</h1>
      <form onSubmit={handleRoll} style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
        <label htmlFor="diceInput">Number of dice (1–12):</label>
        <input
          id="diceInput"
          type="number"
          min="1"
          max="12"
          value={diceCount}
          onChange={(e) => setDiceCount(e.target.value)}
          style={{ padding: '6px', width: '60px', color: 'white', backgroundColor: '#333', border: '1px solid white' }}
        />
        <button type="submit">Roll</button>
      </form>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {results.map((value, index) => (
          <div key={index} style={{ border: '1px solid white', padding: '10px', textAlign: 'center', borderRadius: '8px' }}>
            <h3>{value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiceRoller;
