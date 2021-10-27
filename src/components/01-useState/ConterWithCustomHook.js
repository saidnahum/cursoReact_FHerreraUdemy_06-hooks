import React from 'react'
import { useCounter } from '../../hooks/useCounter'


export const ConterWithCustomHook = () => {

   const { state, increment, decrement, reset } = useCounter( 100 );

   return (
      <div className="p-20">
         <h1 className="text-3xl font-bold mb-5">Counter with Hook: {state}</h1>
         <hr />

         <button onClick={ () => increment(10) } className="p-3 bg-blue-400 text-white rounded-lg mt-5 mr-5">+1</button>
         <button onClick={ reset } className="p-3 bg-blue-400 text-white rounded-lg mt-5 mr-5">Reset</button>
         <button onClick={ () => decrement(10) } className="p-3 bg-blue-400 text-white rounded-lg mt-5">-1</button>
         
      </div>
   )
}
