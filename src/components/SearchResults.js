import React from 'react';
import '../styles/searchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results.</p>
        
    }
    return (
        <>
        {results.map((img, index) => {
            return (
                <img 
                className="search-result-item" 
                src={img}
                alt=""
                key={index} />
                )
            })}
        </>
    );
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.string),
}

export default SearchResults;