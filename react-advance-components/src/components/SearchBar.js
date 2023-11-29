import React, { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from '../utils/searchSlice';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    const dispatch = useDispatch();
    const searchCache = useSelector((store) => store.search);

    useEffect(() => {

        // Adding Debouncing technique to improve performance by reducing API calls on keystrokes
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSearchSuggestions(searchCache[searchQuery])
            } else {
                getSuggestions();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    /*
    * 
    * key pressed 'i' in search box
    * - render the component
    * - useEffect();
    * - start timer => make api call after 200ms
    * 
    * key pressed "p" in search box
    * - destroy the component( it will call useEffect return method)
    * - render the component
    * - useEffect()
    * - start timer -> make api call after 200 ms (it is a new timer)

    */

    const getSuggestions = async () => {
        console.log("API CAll= ", searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        
        setSearchSuggestions(json[1]);

        // Adding search suggestions to the cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }));
    }
    return (
        <div className='search-container'>
            <div className='search-wrapper'>
                <label htmlFor='search-bar'>Search</label>
                <input className="w-1/2 border border-gray-400 p-2 rounded-s-full" type='text' id='search-bar' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div> 
            <div className='search-suggestion-container'>
                <div className='search-suggestion-wrapper'>
                    <ul>
                        {searchSuggestions.map((suggestion) => <li className="px-4 py-2 shadow-sm hover:bg-gray-100" key={suggestion}>{suggestion}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;