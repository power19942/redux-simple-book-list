import React, { Component } from 'react';
import BooksList from './components/BooksList';
import BookDetail from './components/BookDetail';
export default class App extends Component {
  render() {
    return (
      <div>
        <BooksList/>
        <BookDetail/>
      </div>
    );
  }
}
