import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

   const { user, setUser } = useContext(UserContext);

   const handleClic = () => {
      setUser({});
   }

   return (
      <>
         <h1 className="text-3xl font-bold mb-5">About Screen</h1>
         <hr />

         <pre>
            {JSON.stringify(user, null, 3)}
         </pre>

         <button 
            className="p-2 rounded-lg bg-yellow-500 text-white mt-5"
            onClick={ handleClic }
         >
            Logout
         </button>
      </>
   )
}
