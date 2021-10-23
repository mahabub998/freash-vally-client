import React from "react";
import Laundry from "../CategoryProduct/Laundry/Laundry";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fruit from "../CategoryProduct/Furits/Fruit";
import "./Home.css";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import CheckOut from './../CheckOut/CheckOut';
import Login from './../Login/Login';
import Meat from './../CategoryProduct/Meat/Meat';

const Home = () => {
  return (
    <div className="sidebar pb-1">
    <Router>
      <div>
        <div className="row">
          <div className="col-md-2 sideBar_color">
            <div className="categoryBody pt-5 text-center">
              <ul>
                <li className="category">
                  <Link to="/home/laundry">Laundry</Link>
                </li>
                <li className="category">
                  <Link to="/home/fruit">Fruit</Link>
                </li>

                <li className="category">
                  <Link to="/home/meat">Meat</Link>
                </li>
                <li className="category">
                  <Link to="/admin/manageServices">Manage Services</Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{ backgroundColor: "#d8e2dc" }}
            className="col-md-10 option2"
          >
            <Switch>
              <Route exact path="/">
                <Laundry />
              </Route>
              <Route exact path="/home">
                <Laundry />
              </Route>
              <Route path="/home/laundry">
                <Laundry />
              </Route>
              <Route path="/home/fruit">
                <Fruit />
              </Route>
              <Route path="/home/meat">
              <Meat />
            </Route>
              <PrivateRoute path="/CheckOut/:productId">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
    </div>
  );
};

export default Home;
