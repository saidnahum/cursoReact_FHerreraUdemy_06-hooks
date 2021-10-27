import React, { useState } from 'react'

export const CounterApp = () => {

   const [state, setState] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30,
      counter4: 40
   });

   const {counter1, counter2} = state;

   return (
      <div className="p-20">
         <h1 className="text-3xl font-bold mb-5">Counter: {counter1}</h1>
         <h1 className="text-3xl font-bold mb-5">Counter: {counter2}</h1>
         <hr />

         <button className="p-3 bg-blue-400 text-white rounded-lg mt-5" onClick={ () => {
            setState({
               // ..state sirve para mantenar los otros valores del state y solo modificar el que se desee
               ...state,
               counter1: counter1 + 1
            })
         }}>
            +1
         </button>
      </div>
   )
}
