import React from 'react'

import { Navbar } from './Navbar';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
   return (
      <Router>
         <div>
            <Navbar/>
            <div className="container mx-auto mt-5">
               <Switch>
                  <Route path="/" component={ HomeScreen } exact/>
                  <Route path="/about" component={ AboutScreen } exact/>
                  <Route path="/login" component={ LoginScreen } exact/>
   
                  <Redirect to="/" />
               </Switch>
            </div>
         </div>
      </Router>
   )
}
