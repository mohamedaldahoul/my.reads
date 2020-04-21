import React from 'react'
import Book from './Book'

const BooksShelves = ({booksList}) => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {booksList
                .filter(book => book.shelf === 'currentlyReading')
                .map( book => 
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                )}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {booksList
                .filter(book => book.shelf === 'wantToRead')
                .map( book => 
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                )}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {booksList
                .filter(book => book.shelf === 'read')
                .map( book => 
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksShelves;
