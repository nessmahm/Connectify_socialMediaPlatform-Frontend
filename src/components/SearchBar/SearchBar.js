import React from 'react'
import {findUserByName} from "./findUserByName";
import {useNavigate} from "react-router-dom";

function SearchBar({inputHandler, token ,searchText}) {
    const navigate = useNavigate();
    const handleSearchClick = async () => {
        const userId = await findUserByName(searchText, token);
        navigate(`/profil/${userId}`);
    }
    return (
      <div className="search-container">
          <input type="text" name="search" placeholder="Search..."   onChange={inputHandler}
                  className="search-input"  autoComplete="off" />
          <a className="search-btn">
              <i
                  className="fas fa-search"
                  onClick={handleSearchClick}
              ></i>
          </a>
      </div>
)
}

export default SearchBar
