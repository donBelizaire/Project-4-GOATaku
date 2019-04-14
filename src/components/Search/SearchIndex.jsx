import React, { Component } from 'react'
import ListIndex from '../List/ListIndex'
// import SearchSuggestions from './SearchSuggestions/SearchSuggestions';
import  GetAllShows from '../../services/GetAllShows/GetAllShows';
import SearchBar from './SearchBar/SearchBar';


class SearchIndex extends Component {
  state = {
    shows: [],
    query: '',
    results: []
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