import React from 'react'
import * as BooksAPI from './BooksAPI'
import Header from '../src/components/Header'
import './App.css'
import BooksShelves from './components/BooksShelves';
import SearchBooks from './components/SearchBooks';
import SearchOpener from './components/SearchOpener';

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

  componentDidMount() {
    BooksAPI.getAll()
      .then((response) => { 
        console.log(response);
        
        this.setState(() => ({  booksList: response }))
    })
  }
  

  openSearchPage = () => this.setState({ showSearchPage: true })

  closeSearchPage = () => this.setState({ showSearchPage: false })

  render() {
    const {booksList} = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks closeSearch={this.closeSearchPage} />
        ) : (
          <div className="list-books">
            <Header />
            <BooksShelves 
              booksList={booksList}
            />
            <SearchOpener openSearch={this.openSearchPage} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
