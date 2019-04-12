import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import userService from '../../utils/userServices';

class SignupForm extends Component {

  state = {
    open: false,
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
        <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Signup
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          >
          <DialogTitle id="form-dialog-title">Signup</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To register with GOATaku please fill out the form below.
            </DialogContentText>
            <TextField
            type="text" 
            className="form-control" 
            placeholder="Name" 
            value={this.state.name} 
            name="name" 
            onChange={this.handleChange}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
              />
            <TextField
            type="email" 
            className="form-control" 
            placeholder="Email" 
            value={this.state.email} 
            name="email" 
            onChange={this.handleChange}
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            fullWidth
              />
            <TextField
            type="password" 
            className="form-control" 
            placeholder="password" 
            value={this.state.password} 
            name="password" 
            onChange={this.handleChange}
            autoFocus
            margin="dense"
            id="password"
            label="password"
            fullWidth
              />
            <TextField
            type="password" 
            className="form-control" 
            placeholder="Password" 
            value={this.state.passwordConf} 
            name="password" 
            onChange={this.handleChange}
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            fullWidth
              />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={this.isFormInvalid()} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
              </form>
      </div>
    );
  }
};

export default SignupForm;