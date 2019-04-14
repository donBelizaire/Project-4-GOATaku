import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import SearchSuggestions from '../SearchSuggestions/SearchSuggestions';
// import SearchIndex from '../SearchIndex'

const styles = {
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: 8,
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
  };

// SearchBar: not functional
function SearchBar(props) {
    const { classes } = props;

return (
      <form onSubmit={props.handleSubmit}>
      <Paper className={classes.root} elevation={1}>
        <IconButton className={classes.iconButton} aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <InputBase 
        name="query"
        type="text"
        className={classes.input} 
        placeholder="Search for..." 
        // ref={<SearchSuggestions/>}
        onChange={props.handleInputChange}
        value={props.query}/>
        <IconButton 
        type="submit" 
        className={classes.iconButton} 
        aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
      {/* <SearchSuggestions /> */}
      </form>
    );
  }


  SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SearchBar);