import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment } from "./Redux/Actions/Increment";
import { Decrement } from "./Redux/Actions/Decrement";
import { IsLoggedIn } from "./Redux/Actions/IsLogged";



function App() {
  const Counter = useSelector(state =>state.Counter)
  const IsLogged = useSelector(state =>state.IsLogged)
  const Dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{Counter}</h1>
      <button onClick={()=>{Dispatch(Increment(5))}}>+</button>
      <button onClick={()=>{Dispatch(Decrement())}}>-</button>
      <button onClick={() =>{Dispatch(IsLoggedIn())}}>Toggle</button>
      {IsLogged ? <h3>Valuable Info</h3> : ''}
    </div>
  );
}


export default App;
