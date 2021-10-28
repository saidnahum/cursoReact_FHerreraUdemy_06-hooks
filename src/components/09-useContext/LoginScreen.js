import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import { UserContext } from './UserContext'


export const LoginScreen = () => {

   const { setUser } = useContext(UserContext);
   
   const newUser = {
      id: 1,
      name: 'Said'
   }

   const history = useHistory();

   return (
      <>
         <h1 className="text-3xl font-bold mb-5">Login Screen</h1>
         <hr />

         <button 
            className="p-2 rounded-lg bg-blue-500 text-white mt-5"
            onClick={() => {setUser(newUser); history.push("/")}}
         >
            Login
         </button>
      </>
   )
}
