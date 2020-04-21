import React from 'react'

const SearchOpener = ({openSearch}) => {
  return (
    <div className="open-search">
      <button onClick={openSearch}>Add a book</button>
    </div>
  )
}

export default SearchOpener;
