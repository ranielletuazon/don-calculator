import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  return (
    <div>
      <h1 className='name'>Peter Don H. Dela Vega IT-3A</h1>
      <div className="container">
        <div className="calculator">
          <form action="">
            <div className="display">
              <input type="text" value={value} />
            </div>
            <div>
              <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="3"  onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="*" onClick={e => setValue(value + e.target.value)} />
            </div>
            <div>
              <input type="button" value="C" onClick={e => setValue('')/*c*/} />
              <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="=" className="equal" onClick={e => setValue(eval(value))} />
              <input type="button" value="÷" onClick={e => setValue(value + e.target.value)} />
            </div>
          </form>
        </div>
        <div className='new-button'>
          <input type='button' value={"DELA VEGA"} onClick={e => setValue('PETER DON H. DELA VEGA')}/>
        </div>
      </div>
    </div>
  );
}

export default App;
