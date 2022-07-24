import React from 'react'
import './Search.css';
import SearchIcon from "@mui/icons-material/Search";

function Search({show}) {
  return (
    <>
    <div className={show ? 'search search__show':'search'}>
        <div className="search__top">
          <SearchIcon />
          <input type="text" placeholder='Search...' />
        </div>
    </div>
    </>
  )
}

export default Search