import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

const instance = axios.create({
  baseURL: "https://the-index-api.herokuapp.com"
});

class AuthorDetail extends Component {
  render() {
    const author = this.props.authors.find(
      author => author.id == this.props.match.params.authorID
    );
    const books = author.books.map(BookID => {
      return this.props.books.find(book => {
        return book.id === BookID;
      });
    });

    const authorName = `${author.first_name} ${author.last_name}`;
    return (
      <div className="author">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName}
          />
        </div>
        <BookTable books={author.books} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authorState.authors,
    books: state.bookState.books
  };
};
export default connect(mapStateToProps)(AuthorDetail);
