import React, { Component } from 'react'
import userService from '../../utils/userServices';

import NavBar from './NavBar/NavBar';


class NavIndex extends Component {

    state = {
    }


    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }
    
    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()});
    }
    async componentDidMount(){
        const user = userService.getUser();
        this.setState({ user });
    }
        render() {
        return (
            <div className="">

            <NavBar
                user={this.user}
                handleLogout={this.handleLogout} />

                
            </div>
        )
    }
}
export default NavIndex;                    