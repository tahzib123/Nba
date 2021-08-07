import React from 'react';
import './SearchBar.css';

const SearchBar = ( {searchChange} ) => {
  return (
     <form>
        <input type = "search" id = "searchBox" placeholder = "Search for a player" className = "searchBox" onKeyPress ={searchChange}/>

        <button type='button' onClick = {searchChange} className = "submitButton">Submit</button> 
     </form>
  );
  
}

export default SearchBar;