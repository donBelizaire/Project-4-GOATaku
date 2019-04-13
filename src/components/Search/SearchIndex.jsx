import React, { Component } from 'react'
import axios from 'axios'
import ListIndex from '../List/ListIndex'
import SearchSuggestions from './SearchSuggestions/SearchSuggestions';
// import SearchBar from '../Search/SearchBar/SearchBar'
// import  GetAllShows from './services/GetAllShows/GetAllShows';

const { API_KEYHEADER } = process.env
const HOST_URL = process.env

class SearchIndex extends Component {
  state = {
    query: '',
    results: []
  }
    
    // SearchBar Code

    getInfo = () => {
        console.log('getInfo'   )
        axios.get(`${HOST_URL}?api_key=${API_KEYHEADER}&prefix=${this.state.query}&limit=7`)
        .then(({ data }) => {
            this.setState({
                results: data.data // MusicGraph returns an object named data, 
                // as does axios. So... data.data                             
            })
        })
    }

    handleInputChange = () => {
        this.setState({
        query: this.search.value
        }, () => {
        if (this.state.query && this.state.query.length > 1) {
            if (this.state.query.length % 2 === 0) {
            this.getInfo()
            }
        } else if (!this.state.query) {
        }
      })
    }

    handleSubmit = evt => {
        evt.preventDefault()
        const newStateArray = [...this.state.results, {query: this.state.query}]
        this.setState({
          query: '',
          results: newStateArray
        })
      }

//       async componentDidMount() {
//     const getAllShows = await GetAllShows();
//     this.setState({ shows: GetAllShows.results });
//   }
// SearchBar: Not functional
    render() {
        return (
            <div className="SearchIndex">
                
                <SearchSuggestions results={this.state.results} />
                <button type= "submit" >Search</button>
                <form 
                onSubmit={this.handleSubmit}>
                <input
                placeholder="Search for..."
                ref={input => this.search = input}
                onChange={this.handleInputChange}
                />
                </form>
                <ListIndex 
                results={this.state.results}
                getInfo={this.getInfo}/>
                
            </div>
        )

    }

}
export default SearchIndex;