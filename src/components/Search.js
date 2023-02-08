import React, { useState } from 'react';
import getImage from '../requests/getImage';
import '../styles/search.css';
import PropTypes from 'prop-types';

const Search = ({setSearchResults}) => {
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const images = await getImage(value);
        console.log(images);
        setSearchResults(images);
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

Search.propTypes = {
    setSearchResults: PropTypes.func,
}

export default Search;