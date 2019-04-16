import React, { Component } from 'react';
import SearchIndex from './components/Search/SearchIndex'
import NavBar from './components/Nav/NavBar/NavBar'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import userService from './utils/userServices'
import tokenService from './utils/tokenService'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import  AnimePage  from './pages/AnimePage/AnimePage';
import './App.css';




class App extends Component {
  state = {
    // shows: [],
    // text: "",
    // anime: []
  };

  handleLogout = () => {
    console.log('Logout')
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

  // handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   })
  // }



  // Anime API Code
  // getAnime = (idx) => {
  //   return this.state.anime[idx];
  // }


  // async componentDidMount() {
  //   const getAllShows = await GetAllShows();
  //   this.setState({ shows: GetAllShows.results });
  // }

  render() {
    return (
      <div className="App">
      <Router>
      <NavBar 
      user={this.user}
      handleLogout= {this.handleLogout}/>

      <Route exact path='/signup' render={({ history }) => 
            <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          </Router>
      {/* <NavIndex/> */}
      <SearchIndex/>
      </div>
    )
  }

}

export default App;
