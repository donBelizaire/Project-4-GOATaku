import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import SignupPage from '../../../pages/SignupPage/SignupPage'



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  // logo: {
  //   height: 100,
  //   whidth: 100,

  // },
};
  
class NavBar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
  const { anchorEl } = this.state;
  // const { classes } = this.state;

  return (
    <Router>
    {/* <div className={classes.root}> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton >
            <MenuIcon />
          </IconButton>
          <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {/* <MenuItem onClick={props.handleLogout}>LOG OUT</MenuItem> */}
        </Menu>
          {/* <Typography variant="h6" color="inherit" className={classes.grow}> */}
            <img className="logo" src="https://imgur.com/UImBo2k.png" alt="GOATaku"/>
          {/* </Typography> */}
          
          <span color="inherit">
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            <Route exact path="/login" component={LoginPage} />
              &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            <Route exact path="/signup" component={SignupPage} />
          </span>;
        </Toolbar>
      </AppBar>
    {/* </div> */}

    </Router>
  );
}
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar)