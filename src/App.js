import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import AddEvents from './Components/AddEvents/AddEvents';
import CheckOut from './Components/CheckOut/CheckOut';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageProducts from './Components/ManageProducts/ManageProducts';




export const  UserContext = createContext();


function App() {
 const  [loggedInUser,setLoggedInUser] = useState({});
  return (
<UserContext.Provider value ={ [loggedInUser,setLoggedInUser]}>
  <p>Name : {loggedInUser.email}</p>
    <Router>
      <Header />
      <Switch>
        <Route path="/Home"> 
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addEvents">
          <AddEvents></AddEvents>
        </Route>
        <PrivateRoute path="/CheckOut/:productId">
         <CheckOut></CheckOut>
        </PrivateRoute>
        <Route path="/login">
      <Login />
        </Route>
        <PrivateRoute path="/ManageProducts">
         <ManageProducts></ManageProducts>
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
   
  );
}

export default App;
