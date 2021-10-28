import React, { useEffect, useReducer, useState } from 'react'
import { todoReducer } from './todoReducer';

// Definir estado inicial
const init = () => {
   // return [{
   //    id: new Date().getTime(),
   //    desc: 'Aprender React',
   //    done: false
   // }]

   return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

   const [todos, dispatch] = useReducer(todoReducer, [], init);
   const [inputValue, setInputValue] = useState('');
   //console.log(todos);

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( todos ))
   }, [todos]);

   const handleDelete = (todoId) => {
      const action = {
         type: 'delete',
         payload: todoId
      }

      dispatch(action);
   }

   const handleToggle = (todoId) => {
      dispatch({
         type: 'toggle',
         payload: todoId
      })
   }

   const handleInputChange = (e) => {
      e.preventDefault();
      setInputValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if(inputValue.length >0) {
         e.preventDefault();

      const newTodo = {
         id: new Date().getTime(),
         desc: inputValue,
         done: false
      }

      const action = {
         type: 'add',
         payload: newTodo
      }

      dispatch(action);
      setInputValue('');
      }
   }



   return (
      <div className="p-20">
         <h1 className="text-3xl font-bold mb-3">TodoApp <span className="text-base">({todos.length})</span></h1>
         <hr className="mb-5" />

         <div className="grid grid-cols-12 px-32 py-10">
            <div className="col-span-7">
               <ul>
                  {
                     todos.map((todo, index) => (
                        <li key={todo.id} className="flex items-center justify-between mb-3 ">
                           <p 
                              className={`text-center cursor-pointer ${todo.done && 'line-through'}`} 
                              onClick={() => handleToggle(todo.id)}
                           
                           >
                              {index + 1}.- {todo.desc}
                           </p>
                           <button 
                              className="px-2 py-1 rounded-md bg-red-600 hover:bg-red-500 text-white mr-60"
                              onClick={() => handleDelete(todo.id)}
                           >
                              Borrar
                           </button>

                        </li>
                     ))
                  }
               </ul>
            </div>

            <div className="col-span-5">
               <h4 className="text-2xl font-bolde mb-3">Agregar Tarea</h4>
               <hr />

               <form className="mt-5" onSubmit={handleSubmit}>
                  <input
                     type="text"
                     name="description"
                     placeholder="Agregar descripción"
                     autoComplete="off"
                     className="border px-3 py-2 rounded-lg mr-5 focus:outline-none w-full"
                     value={inputValue}
                     onChange={handleInputChange}
                  />
                  <button
                     className="p-2 rounded-md bg-blue-500 hover:bg-blue-400 text-white w-full mt-3"
                     type="submit"
                  >
                     Agregar
                  </button>
               </form>
            </div>
         </div>
      </div>
   )
}
