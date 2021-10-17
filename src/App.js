import React, { createContext, useState,useEffect } from "react";
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
import { PropagateLoader } from "react-spinners";
import PreLoader from "./Components/PreLoader/PreLoader";
import Slider from "./Components/Slider/Slider";
// import Slider from './Components/Slider/Slider.js';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //     setLoading(true);
  //     const timing = setTimeout(() => {
  //         setLoading(false);
  //     }, 3000);

  //     return () => clearTimeout(timing);
  // }, []);

  // if (loading) {
  //     return (
  //       <div className="spinner-border Spinner_align text-align-center" role="status ">
  //       <span class="visually-hidden">Loading...</span>
  //     </div>
  //     );
  // }

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      
        <Navbar />
        <Slider />
        <Switch>
          <Route path="/Home" >
            
            <Home />
            <PreLoader />
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
