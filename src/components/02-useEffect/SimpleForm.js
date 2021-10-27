import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
      name: '',
      email: ''
   });

   const { name, email } = formState;

   useEffect(() => {
      //console.log('hey');
   }, []);

   useEffect(() => {
      //console.log('formState cambio');
   }, [formState]);

   useEffect(() => {
      //console.log('email cambio');
   }, [email]);

   const handleInputChange = ({target}) => {
      setFormState({
         ...formState,
         [ target.name ]: target.value
      });
      
   }

   return (
      <div className="p-20">
         <h1 className="text-3xl font-bolde mb-2">useEffect</h1>
         <hr/>

         <div>
            <input 
               type="text" 
               name="name" 
               placeholder="Nombre"
               autoComplete="off"
               value={ name }
               onChange={ handleInputChange }
               className="p-2 border mt-2 rounded"
            />
         </div>

         <div>
            <input 
               type="text" 
               name="email" 
               placeholder="example@exaple.com"
               autoComplete="off"
               value={ email }
               onChange={ handleInputChange }
               className="p-2 border mt-2 rounded"
            />
         </div>

         { name === '123' && <Message/>}

      </div>
   )
}
