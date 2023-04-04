import React, { useState } from 'react';
import './TableGenerator.css';

function TableGenerator() {
  const [number, setNumber] = useState(0);
  const [table, setTable] = useState([]);

  const generateTable = (num) => {
    const newTable = [];
    for (let i = 1; i <= 10; i++) {
      newTable.push(num * i);
    }
    setTable(newTable);
  }

  const handleInputChange = (event) => {
    const inputNum = parseInt(event.target.value);
    if (!isNaN(inputNum)) {
      setNumber(inputNum);
      generateTable(inputNum);
    }
  }

  return (
    <div className="table-generator-container">
      <label htmlFor="number-input" className="label">Enter a number:</label>
      <input id="number-input" type="number" value={number === 0 ? '' : number} onChange={handleInputChange} placeholder="e.g. 9" className="input" />
      {table.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">Number</th>
              <th className="table-header">Result</th>
            </tr>
          </thead>
          <tbody>
            {table.map((result, index) => (
              <tr key={index}>
                <td className="table-cell">{`${number} X  ${index+1}`}</td>
                <td className="table-cell">{result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableGenerator;
