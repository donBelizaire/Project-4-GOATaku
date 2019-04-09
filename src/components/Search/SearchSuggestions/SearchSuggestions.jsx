import React from 'react'

// SearchSuggestions: Not functional
const SearchSuggestions = (props) => {
    const options = props.results.map(r => (
      <li key={r.id}>
        {r.name}
      </li>
    ))
    return <ul>{options}</ul>
  }

export default SearchSuggestions;