import React from 'react'
import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';

const SearchBar = props => (
    <form>
    <input
      placeholder="Search for..."
      ref={input => props.search = input}
      onChange={props.handleInputChange}
    />
    <SearchSuggestions results= {props.state.results}/>
  </form>
)

export default SearchBar;