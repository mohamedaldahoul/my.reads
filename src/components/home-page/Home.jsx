import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import BooksShelves from './BooksShelves';
import SearchOpener from './SearchOpener';

const Home = ({updateBook, booksList }) => {
  return (
    <div className="list-books">
      <Header />
      <BooksShelves 
        booksList={booksList}
        updateBook={updateBook}
      />
      <SearchOpener />
    </div>
  )
}

Home.propTypes = {
  updateBook: PropTypes.func.isRequired,
  booksList: PropTypes.array.isRequired, 
}

export default Home;