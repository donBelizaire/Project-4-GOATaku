import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import SignupPage from '../../../pages/SignupPage/SignupPage'


const NavBar = (props) => (
    <Router>
      <div>
        <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        {/* <span className='NavBar-welcome'>WELCOME, {props.user.name}</span> */}
      </div>
    :
      <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        <Route exact path="/login" component={LoginPage} />
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        <Route exact path="/signup" component={SignupPage} />
      </div>;

    </Router>
);

export default NavBar;