import React, { useState } from 'react';
import getImage from '../requests/getImage';
import '../styles/search.css';

const Search = ({setSearchResults}) => {
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImage(value));
    }
    return (
        <>
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" className="search-box"
            onChange={(e) => setValue(e.target.value)} />
            <button className="search-btn"
            type="submit">Search</button>
        </form>
        </>
    )
}

export default Search;