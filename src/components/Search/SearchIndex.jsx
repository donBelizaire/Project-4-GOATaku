import React, { Component } from 'react'
import axios from 'axios'
import ListIndex from '../List/ListIndex'
// import SearchSuggestions from './SearchSuggestions/SearchSuggestions';
// import SearchBar from '../Search/SearchBar/SearchBar'
import  GetAllShows from '../../services/GetAllShows/GetAllShows';
import SearchBar from './SearchBar/SearchBar';

const { API_KEYHEADER } = process.env
const HOST_URL = process.env

class SearchIndex extends Component {
  state = {
    shows: [],
    query: '',
    results: []
  }
    
    // SearchBar Code

  getInfo = () => {
      console.log(GetAllShows)
      axios.get(`${HOST_URL}?api_key=${API_KEYHEADER}&prefix=${this.state.query}&limit=7`)
      .then(({ data }) => {
          this.setState({
              results: data.data // MusicGraph returns an object named data, 
              // as does axios. So... data.data                             
          })
          console.log(data)
      })
  }

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = async (evt) => {
      evt.preventDefault()
      const results = await GetAllShows(this.state.query)
      this.setState({
        query: '',
        results: results
      })
    }

  // async componentDidMount() {
  //   const getAllShows = await GetAllShows();
  //   this.setState({ shows: GetAllShows.results });
  // }
// SearchBar: Not functional
    render() {
        return (
            <div className="SearchIndex">
                
                
                <SearchBar 
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                query={this.state.query}
                />
                <ListIndex 
                results={this.state.results}
                getInfo={this.getInfo}/>
                
            </div>
        )

    }

}
export default SearchIndex;