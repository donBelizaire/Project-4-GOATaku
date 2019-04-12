import React, { Component } from 'react';
import SearchIndex from './components/Search/SearchIndex'
import NavIndex from './components/Nav/NavIndex'
// import  AnimePage  from './pages/AnimePage/AnimePage';
import './App.css';



class App extends Component {
  state = {
    // shows: [],
    // text: "",
    // anime: []
  };

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
      <h1>Hello GOATaku App</h1>
      <NavIndex/>
      <SearchIndex/>
      </div>
    )
  }

}

export default App;
