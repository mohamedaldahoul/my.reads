import React from 'react'
import Header from './Header'
import BooksShelves from './BooksShelves';
import SearchOpener from './SearchOpener';

const Home = ({updateBook, booksList, openSearch }) => {
  return (
    <div className="list-books">
      <Header />
      <BooksShelves 
        booksList={booksList}
        updateBook={updateBook}
      />
      <SearchOpener openSearch={openSearch} />
    </div>
  )
}

export default Home;