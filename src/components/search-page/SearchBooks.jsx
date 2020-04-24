import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../../BooksAPI'
import Book from '../Book';


const SearchBooks = ({updateBook, booksList}) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const updateQuery = () => {
    
    if(query!=='') {
      BooksAPI.search(query).then(books => {
        if(books.length > 0) {
          return setBooks(books)
      } else {
        return null; 
        }
      }) 
    } else {
      return null; 
    }
  }

  const bookShelf = (bookObj) => {
    for(let i = 0; i < booksList.length; i++){
      if(bookObj.id === booksList[i].id )
      return booksList[i].shelf
    }
    return "none"
  }
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/'>
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input 
            type="text"
            placeholder="Search by title or author"
            className='search-contacts'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              updateQuery()
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { books != null 
          && !books.hasOwnProperty('error') 
          && query!=='' 
          && books.map(book => 
            <li key={book.id}>
              {book.title}
              <Book
                bookShelf={bookShelf(book)}
                book={book}
                updateBook={updateBook}
              />
            </li>
          )}
        </ol>
      </div>
    </div>
  )
}
SearchBooks.propTypes = {
  updateBook: PropTypes.func.isRequired,
  booksList: PropTypes.array.isRequired, 
}
export default SearchBooks;
