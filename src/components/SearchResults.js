import React from 'react';
import '../styles/searchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p className='no-results'>No results.</p>
        
    }
    return (
        <div className='search-results'>
            {results.map((img, index) => {
                return (
                    <img 
                    className="search-result-item" 
                    src={img}
                    alt=""
                    key={index}
                    data-testid="result-item" />
                    )
                })}
         </div>
    );
}

SearchResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.string),
}

export default SearchResults;