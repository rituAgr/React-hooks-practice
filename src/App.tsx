import React from 'react';
import './App.css';
import Counter_useState from './counter_useState/Counter_useState'
import Allpost from "./useEffect_func/Allpost";
import ApiCall_useReducer from "./useReducer_func/ApiCall_useReducer";
import ApiCall from "./useContext_api/ApiCall";
import Component1 from "./customHooks/Component1";

function App() {
  return (
    <div className="App">
      {/*<Counter_useState/>*/}
      {/*  <Allpost/>*/}
      {/*  <ApiCall_useReducer/>*/}
      {/*  <ApiCall/>*/}
        <Component1/>
    </div>
  );
}

export default App;
