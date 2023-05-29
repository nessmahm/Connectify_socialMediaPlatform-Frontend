import React, {useState} from 'react'

function SearchBar({inputHandler}) {

    return (
      <div className="search-container">
          <input type="text" name="search" placeholder="Search..."   onChange={inputHandler}
                  className="search-input"  autoComplete="off" />
          <a href="src/components#" className="search-btn">
              <i className="fas fa-search"></i>
          </a>
      </div>
)
}

export default SearchBar
