import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
   return (
      <nav className="bg-gray-700 px-5 py-3 text-white">
         <ul className="flex container mx-auto items-center justify-between">
            <div>
               <h2 className="text-2xl font-bold"><NavLink to="/">useContext</NavLink></h2>
            </div>
            <div className="flex items-center space-x-5">
            <NavLink exact activeClassName="text-red-400 font-bold" className="text-gray-500" to="/">Home</NavLink>
            <NavLink exact activeClassName="text-red-400 font-bold" className="text-gray-500" to="/about">About</NavLink>
            <NavLink exact activeClassName="text-red-400 font-bold" className="text-gray-500" to="/login">Login</NavLink>
            </div>
         </ul>
      </nav>
   )
}
