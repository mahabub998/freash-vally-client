import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/Home"><img style={{ width: '35%' }} className="img-fluid" src={logo} alt="" /></Link>

            <div className="navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav" style={{ marginRight: '10%' }}>
                    <Link to="/Home" style={{ paddingRight: '10%' }} className="nav-link active">Home</Link>
                    <Link to="/volunteerActivities" style={{ paddingRight: '10%' }} className="nav-link">My Activities</Link>
                    <Link to="/register"><button style={{ marginRight: '5%' }} className="btn btn-primary" type="button">Register</button></Link>
                    <Link to="/admin"><button style={{ marginRight: '15%' }} className="btn btn-primary" type="button">Admin</button></Link>
                </div>
            </div>
        </nav>

    );
};

export default Header;