import React, { Component } from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import MyReviewTile from "../components/MyReviewTile";

class ReviewIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/reviews")
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          reviews: body.reviews
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let user = "";
    if (this.state.reviews.length > 0) {
      user = `${this.state.reviews[0].user.username}'s Reviews`;
    }
    let myReviews = this.state.reviews.map(review => {
      return (
        <MyReviewTile
          key={review.id}
          id={review.id}
          attraction_name={review.location.name}
          attraction_image={review.location.image_url}
          body={review.body}
          rating={review.rating}
        />
      );
    });

    return (
      <div>
        <div className="review-index-title">
          <h1>{user}</h1>
        </div>
        <ul>{myReviews}</ul>
      </div>
    );
  }
}

export default ReviewIndexContainer;
