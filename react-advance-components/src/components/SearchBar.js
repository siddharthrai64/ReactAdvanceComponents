import React, { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constant';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    useEffect(() => {
        getSuggestions();
    }, [searchQuery]);

    const getSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSearchSuggestions(json[1]);
    }
    return (
        <div className='search-container'>
            <div className='search-wrapper'>
                <label htmlFor='search-bar'>Search</label>
                <input type='text' id='search-bar' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div> 
            <div className='search-suggestion-container'>
                <div className='search-suggestion-wrapper'>
                    <ul>
                        {searchSuggestions.map((suggestion) => <li key={suggestion}>{suggestion}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;