import React, {useState} from 'react'

const Book = ({book, updateBook, bookShelf} ) => {
  const [shelf, setShelf] = useState(bookShelf)  
  const handleChange = (e) => {
    setShelf(e.target.value)    
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
            backgroundImage: `url(${book.hasOwnProperty('imageLinks')? book.imageLinks.thumbnail:""})`
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
      <div className="book-authors">{book.hasOwnProperty('authors') ? book.authors.join(' & '):[]}</div>
    </div>
  )
}
export default Book;