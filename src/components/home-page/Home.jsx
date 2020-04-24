import React from 'react'
import Header from './Header'
import BooksShelves from './BooksShelves';
import SearchOpener from './SearchOpener';

const Home = ({updateBook, booksList, openSearchPage }) => {
  return (
    <div className="list-books">
      <Header />
      <BooksShelves 
        booksList={booksList}
        updateBook={updateBook}
      />
      <SearchOpener openSearch={openSearchPage} />
    </div>
  )
}

export default Home;