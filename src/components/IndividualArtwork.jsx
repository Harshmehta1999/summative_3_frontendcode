import React, { Component } from "react";
import Axios from "axios";
import { navigate } from "@reach/router";
import BookButton from "./BookButton";

export default class IndividualArtwork extends Component {
  constructor(props) {
    super(props);

    this.state = { artworks: [] };
  }

  componentDidMount() {
    Axios.get(`http://localhost:9000/api/artworks/${this.props.id}`).then(
      res => {
        console.log(res.data);
        this.setState({ artworks: res.data });
      },
      error => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (

        <div>

          <h2>hello</h2>
     
             {this.state.books.map((book, i) => {
              
            return <h2>  Book Title = {book.title}<br></br>Book Pages = {book.pages}<br></br>Book Isbn = {book.isbn}<br></br></h2>
        

          })}
      
        </div>
      
    );
  }
}
