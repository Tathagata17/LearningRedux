import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/Slices/Counter/index'


function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Count is {count}</h1>
        <div style={{display:"flex"}}>
          <button onClick={()=>{dispatch(increment())}}>
            Ifncrease
          </button>
          <button onClick={()=>{dispatch(decrement())}}>
            Decrease
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
