import React from 'react'
import './SearchBox.css'

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2 search'> 
            <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder="Search Robots" onChange={searchChange}/>
        </div>
    )
}

export default SearchBox;
