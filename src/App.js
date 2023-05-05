import './App.css';
import freeCodeCampLogo from './img/freeCodeCampLogo.png'
import Button from './componentes/Button.jsx';
import Display from './componentes/Screen.jsx';
import ClearButton from './componentes/ClearButton.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = val => {
    setInput(input + val);
};
  
  const calculate = () => {
    console.log(input);
    if(input){
    setInput(evaluate(input));
    }else{
      alert('Please input the values');
    }
  };

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-container'
      >
       <img
        src={freeCodeCampLogo}
       className='freeCodeCamp-logo' 
       alt = 'Logo empresa' /> 
      </div>
      <div className='calculator-container'>
        <Display input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
        <Button handleClick={addInput}>4</Button>
        <Button handleClick={addInput}>5</Button>
        <Button handleClick={addInput}>6</Button>
        <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
        <Button handleClick={addInput}>7</Button>
        <Button handleClick={addInput}>8</Button>
        <Button handleClick={addInput}>9</Button>
        <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
        <Button handleClick={calculate}>=</Button>
        <Button handleClick={addInput}>0</Button>
        <Button handleClick={addInput}>.</Button>
        <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
