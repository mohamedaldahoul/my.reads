import React from 'react';

const ErrorPage = ({location}) => (
  <div className="bookshelf-books">
    <h3>Couldn't find the page for <code>{location.pathname}</code></h3>
  </div>
)

export default ErrorPage;
