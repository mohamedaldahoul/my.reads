import React from 'react'
import { Link } from 'react-router-dom';

const SearchOpener = () => (
  <div className="open-search">
    <Link to='/search'>
      <button>
        Add a book
      </button>
    </Link>

  </div>
)

export default SearchOpener;
