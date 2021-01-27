import React, { useReducer } from "react";
import reducer from './reducers/calcReducer';
import "./styles.css";

const initialState = {
  currentValue: 0,
  memory: 0
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleAddTwo = e => {
    e.preventDefault();
    dispatch({ type: 'ADD', payload: 2 })
  }

  const handleSubTwo = e => {
    e.preventDefault();
    dispatch({ type: 'SUBTRACT', payload: 2 })
  }

  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR', payload: 0 })
  }

  return (
    <div className="App">
      <textarea rows="1" value={state.currentValue} id="total" type="text" name="ans"></textarea>
      <br />
      <button type="button" className="btn" onClick={handleAddTwo}> 
        +2
      </button>
      <button type="button" className="btn" onClick={handleSubTwo}> 
        -2
      </button>
      <button type="button" className="btn" onClick={handleClear}> 
        CLEAR
      </button>
    </div>
  );
}
