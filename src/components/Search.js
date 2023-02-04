import React, { useState } from 'react';
import '../styles/search.css';

const Search = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event);
    }
    return (
        <>
        <form className="search-form">
            <input type="text" className="search-box"
            onChange={(e) => setValue(e.target.value)}></input>
            <button className="search-btn"
            type="submit">Search</button>
        </form>
        </>
    )
}

export default Search;