import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import AllReducer from './Redux/Reducers/Index';

// //action returns an object
// const increment = ()=>{
//   return{type:'increment'} 
// }

// const decrement = ()=>{
//   return{type:'decrement'} 
// }

// //reducer
// let Counter = (state=0,action)=>{
//   switch (action.type){
//     case "increment" : {
//       return state+1;
//     }
//     case "decrement" :{
//       return state-1;
//     }
//   }
// } 



// //create redux store
// let Store = createStore(Counter)
// Store.subscribe(()=> console.log(Store.getState()))

// //dispatch redux  stores
// Store.dispatch(decrement())


const Store = createStore(AllReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={Store} >
  <App />
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
