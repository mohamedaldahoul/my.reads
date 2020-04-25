import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'


import * as BooksAPI from './BooksAPI'
import SearchBooks from './components/search-page';
import Home from './components/home-page';
import ErrorPage from './components/error-page'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    booksList: [],
  }

  fetchBooks = () => BooksAPI.getAll()
    .then((response) => this.setState({  
        booksList: response 
      })
    )

  componentDidMount() {
    this.fetchBooks();
    }

  updateBookShelf = (book, shelf) => BooksAPI.update(book, shelf)
    .then(() => this.fetchBooks())
  
  openSearchPage = () => this.setState({ showSearchPage: true })

  closeSearchPage = () => this.setState({ showSearchPage: false })

  render() {
    const {booksList} = this.state;
    const HomePage = () => (
      <Home
        booksList={booksList}
        updateBook={this.updateBookShelf}
        openSearch={this.openSearchPage} 
      /> 
    )

    const SearchPage = () => (
      <SearchBooks
        booksList={booksList}
        updateBook={this.updateBookShelf} 
        closeSearch={this.closeSearchPage}
      />
    )

    return (
      <div className="app">
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/search' component={SearchPage}/>
        <Route component={ErrorPage} />
      </div>
    )
  }
}

export default BooksApp
