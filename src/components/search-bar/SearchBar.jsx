import React from "react";
import "./SearchBar.css";
import searchIcon from '../../assets/search.svg';
import { useState } from "react";

const SearchBar = ({searchMovies}) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <header>
            <div className="search">
                <h2>Search Movies: </h2>
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <img src={searchIcon} alt="" onClick={() => searchMovies(searchTerm)}/>
            </div>
        </header>
    );
}

export default SearchBar;