import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import AddEvents from "./Components/AddEvents/AddEvents";
import CheckOut from "./Components/CheckOut/CheckOut";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
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
          <Route path="/ManageProducts">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
