import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import google from "../../../src/image/google.png";
import "./Login.css";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handelGoogleSingIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var { displayName, email } = result.user;
        const singInUser = { name: displayName, email };
        setLoggedInUser(singInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
  };

  const style = {
    border: "1px solid black",
    borderRadius: "10px 0px 10px 0 ",
  };
  return (
    <div className="mt-5 text-center mb-5 login_area ">
      <h3 className="text-center mb-3">Login With</h3>
      <div className="justify-content-center row mb-3">
        <div style={style} className="col-md-3 text-center">
          <img width="30%" className="img-fluid" src={google} alt="" />
          <button className="btn btn-success" onClick={handelGoogleSingIn}>
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
