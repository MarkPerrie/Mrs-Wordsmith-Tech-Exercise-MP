import React, { ChangeEvent, useState } from 'react';
import './App.css';
import newLogo from './new-logo.png'
import { numberConverter } from './numberConverter';

function App() {
  const [input, changeInput] = useState<number>(0);

  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeInput(e.target.valueAsNumber)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={newLogo} className="App-logo" alt="logo" />
        <p>
          Input a whole number over 1 to convert it to roman flavoured numbers
        </p>
        <form>
          <div className='input-div'>
            <label>Number:</label>
            <input
              className='number-input'
              type="number"
              min="0"
              value={input}
              onChange={onNumberChange}
            />         
          </div>
        </form>

        <p>{numberConverter(input)}</p>
      </header>
    </div>
  );
}

export default App;
