import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

   // Definir estado inicial
   const initialState = [{
      id: new Date().getTime(),
      desc: 'Aprender React',
      done: false
   }];

   const [ todos ] = useReducer(todoReducer, initialState)
   //console.log(todos);

   return (
      <div className="p-20">
         <h1 className="text-3xl font-bold mb-3">TodoApp <span className="text-base">({todos.length})</span></h1>
         <hr className="mb-5" />

         <div className="grid grid-cols-12">
            <div className="col-span-7">
               <ul>
                  {
                     todos.map((todo, index) => (
                        <li key={todo.id} className="flex items-center space-x-32">
                           <p className="text-center cursor-pointer">
                              {index +1}.- {todo.desc}
                           </p>
                           <button className="px-2 py-1 rounded-md bg-red-600 hover:bg-red-500 text-white">Borrar</button>
                        </li>
                     ))
                  }
               </ul>
            </div>

            <div className="col-span-5">
               <h4 className="text-2xl font-bolde mb-3">Agregar Tarea</h4>
               <hr />

               <form className="mt-5"> 
                  <input 
                     type="text" 
                     name="description"
                     placeholder="Agregar descripción"
                     autoComplete="off"
                     className="border px-3 py-2 rounded-lg mr-5 focus:outline-none w-full"
                  />
                  <button className="p-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white w-full mt-3">
                     Agregar
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}
