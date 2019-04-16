import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './LoginPage.css';
import userService from '../../utils/userServices';

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default LoginPage;


// import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// // import { Link } from 'react-router-dom';
// // import './LoginPage.css';
// import userService from '../../utils/userServices';

// class LoginPage extends Component {
  
//   state = {
//     email: '',
//     pw: '',
//     open: false,
//   };
    
  
//   handleChange = (e) => {
//     this.setState({
//       // Using ES2015 Computed Property Names
//       [e.target.name]: e.target.value
//     });
//   }
  
//   handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await userService.login(this.state);
//       // Let <App> know a user has signed up!
//       this.props.handleSignupOrLogin();
//       // Successfully signed up - show GamePage
//       this.props.history.push('/');
//     } catch (err) {
//       // Use a modal or toast in your apps instead of alert
//       alert('Invalid Credentials!');
//     }
//   }
//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };



//   render() {
//     return (
//       <div>
//           <form onSubmit={this.handleSubmit}>
//         <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//           Login
//         </Button>
//         <Dialog
//           open={this.state.open}
//           onClose={this.handleClose}
//           aria-labelledby="form-dialog-title"
//           >
//           <DialogTitle id="form-dialog-title">Login</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Welcome to GOATaku please enter your email and password below for the full site.
//             </DialogContentText>

//             <TextField
//               onChange={this.handleChange}
//               value={this.state.email}
//               className="form-control"
//               autoFocus
//               margin="dense"
//               id="name"
//               label="Email"
//               type="email"
//               fullWidth
//               />
//             <TextField
//               onChange={this.handleChange}
//               value={this.state.pw}
//               className="form-control"
//               autoFocus
//               margin="dense"
//               id="name"
//               label="Password"
//               type="password"
//               fullWidth
//               />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button type="submit" onClick={this.handleSubmit} color="primary">
//               Submit
//             </Button>
//           </DialogActions>
//         </Dialog>
//               </form>
//       </div>
//     );
//   }
// };

// export default LoginPage;
