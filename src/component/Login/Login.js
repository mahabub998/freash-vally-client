import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../logos/Group 1329.png';
import googleIcon from '../logos/google.png';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);

            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    const mainDivStyle = {
        textAlign: 'center',
        backgroundColor: '#E6F0FF',
        height: '620px',
        paddingTop: '3%',
    }
    const loginStyle = {
        width: '40%',
        height: '350px',
        backgroundColor: '#fff',
        margin: '0 auto',
        marginTop: '5%',
        paddingTop: '100px',
        border: '3px solid #DDD2D2'
    }
    const LoginBtnStyle = {
        width: '60%',
        borderRadius: '20px',
        fontWeight: 'bold',
        border: '2px solid #67A7FD',
        marginTop: '10px',
        marginBottom: '10px',
        paddingRight: '45px'

    }
    return (
        <div style={mainDivStyle}>
            <div>
            <Link to="/Home"><img style={{ width: '20%' }} src={logo} alt="logo" /></Link>
            </div>
            <div style={loginStyle}>
                <h5>Login With</h5>
                <button style={LoginBtnStyle} onClick={handleGoogleSignIn}><img style={{ width: '40px', marginRight: '30px' }} src={googleIcon} alt="googleIcon" /> Continue with Google</button>
                <p>Don't have an account? <span style={{ color: '#67A7FD' }}>Create an account</span></p>
            </div>
        </div>
    );
};

export default Login;