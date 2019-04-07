import React, { Component } from 'react';
import List from './components/List/List'
// import SearchBar from './components/SearchBar/SearchBar'
// import  GetAllShows from './services/GetAnime/GetAnime';
// import  AnimePage  from './pages/AnimePage/AnimePage';
import './App.css';
// import { Route, Router, Link } from 'react-router-dom';



class App extends Component {
  state = {
    // query: '',
    // results: [],
    // anime: []
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  // SearchBar Code
  // getInfo = () => {
  //   axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
  //     .then(({ data }) => {
  //       this.setState({
  //         results: data.data // MusicGraph returns an object named data, 
  //                            // as does axios. So... data.data                             
  //       })
  //     })
  // }

  // handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   }, () => {
  //     if (this.state.query && this.state.query.length > 1) {
  //       if (this.state.query.length % 2 === 0) {
  //         this.getInfo()
  //       }
  //     } 
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

      <h1>Hello App</h1>
      {/* <SearchBar /> */}
      <List />
      </div>



          // Anime API code
      // <div className="App">
      //   <header className="App-header">G.O.A.Taku</header>
      // <Router>
      //     <Route exact path='/' render={() => 
      //       <section>
      //         {this.state.anime.map((anime, idx) => 
      //           <Link
      //             to={`/anime/${idx}`}
      //             key={anime.name}
      //           >
      //             {anime.name}
      //           </Link>
      //         )}
      //       </section>
      //     }/>
      //     <Route path='/anime/:idx' render={(props) => 
      //       <AnimePage
      //         {...props}
      //         getAnime={this.getAnime}
      //       />
      //     }/>
      //   </Router>
      // </div>
    )
  }

}

export default App;
