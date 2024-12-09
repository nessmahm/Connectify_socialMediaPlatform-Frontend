import React from 'react'
import { findUserByName } from "./findUserByName";
import { useNavigate } from "react-router-dom";

function SearchBar({ inputHandler, token, searchText }) {
    const navigate = useNavigate();

    const handleSearchClick = async (text) => {
        const userId = await findUserByName(searchText, token);
        navigate(`/profil/${userId}`);
    };

    // Introducing XSS by rendering raw user input into DOM directly.
    const dangerouslySetHTML = (text) => {
        // Dangerous and vulnerable to XSS
        document.body.innerHTML = text;
        handleSearchClick(text);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                name="search"
                placeholder="Search..."
                onChange={inputHandler}
                className="search-input"
                autoComplete="off"
            />
            <a
                className="search-btn"
                onClick={() => dangerouslySetHTML(searchText)} // Vulnerable to XSS
            >
                <i className="fas fa-search"></i>
            </a>
        </div>
    );
}

export default SearchBar;
