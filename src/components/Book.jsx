import React, {useState} from 'react'
import * as BooksAPI from '../BooksAPI'

const Book = ({book, updateBook} ) => {
  const [shelf, setShelf] = useState(book.shelf)
  console.log(updateBook);
  
  const handleChange = (e) => {
    setShelf(e.target.value)
    console.log('value', e.target.value);
    
    updateBook(book, e.target.value);
  } 
  return (
    <div className="book">
      <div className="book-top">
        <div 
          className="book-cover" 
          style={{ 
            width: 128, 
            height: 193, 
            backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}></div>
        <div className="book-shelf-changer">
          <select value={shelf} onChange={handleChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  )
}
export default Book;