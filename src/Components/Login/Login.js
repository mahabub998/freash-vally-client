import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';





const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } }

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handelGoogleSingIn = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var { displayName, email } = result.user;
        const singInUser = { name: displayName, email }
        setLoggedInUser(singInUser)
        history.replace(from)

      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
  }

  return (
    <div>
      <button onClick={handelGoogleSingIn}>Google Sign In</button>
    </div>
  );
};

export default Login;