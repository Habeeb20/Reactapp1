import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form style={{marginTop: "9%" }} className="searchform" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input 
      id='search'
      role='searchbox'
      type="text"
      placeholder='search items' 
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>
      
      
    </form>
  )
}

export default SearchItem
