import './counter.css';
import { useState } from 'react';

function Counter(props) {
  // 1. state counterValue, useState
  const [counterValue, setCounterValue] = useState(0);
  // susikurti counterClass state
  // const [counterClass, setCounterClass] = useState('');

  // kai turim reiksme kuri tiesiogiai priklauso nuo kitos reiksme, galim naudoti
  // infered/caclulated value
  let counterClassInfered = counterValue >= 5 ? 'high' : '';

  // const counterValue = stateArr[0];
  // const setCounterValue = stateArr[1];
  // 2. increaseHandler, decreaseHandler fn kurios didins ir mazins skaitliuka
  function incrementHandler() {
    setCounterValue((prevCounterValue) => {
      return prevCounterValue + 1;
    });
  }

  function decrementHandler() {
    // jei sk lygus 0 nutraukiam fn vygdyma
    if (counterValue === 0) return;
    setCounterValue((prevValue) => prevValue - 1);
  }

  // let reiksme = 10;
  // reiksme++; // === reiksme = reiksme + 1
  // reksme + 1; //  reksme + 1

  // kai reiksme virsija 5 uzdedam counter__value prideti klase high

  return (
    <div className='counter card'>
      {/* <h3>{props.children ? props.children : 'Counter'}</h3> */}
      <h3>{props.children || 'Counter'}</h3>
      <h2
        className={`counter__value ${counterClassInfered} ${
          counterValue < 0 ? 'low' : ''
        }`}
      >
        {counterValue}
      </h2>
      <div className='control'>
        <button onClick={incrementHandler}>+</button>
        <button onClick={() => setCounterValue(0)}>reset</button>
        {counterValue > 0 && (
          <button disabled={counterValue === 0} onClick={decrementHandler}>
            -
          </button>
        )}
      </div>
    </div>
  );
}
export default Counter;
