import React, { Component } from "react";
import ReviewTile from "../components/ReviewTile";

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // debugger
    let reviews = this.props.reviews.map(review => {
      let handleClick = () => {
        this.props.handleDeleteReview(review.id);
      };
      return (
        <ReviewTile
          key={review.id}
          id={review.id}
          body={review.body}
          rating={review.rating}
          username={review.reviewer.username}
          profile_photo={review.reviewer.profile_photo.url}
          score={review.score}
          handleDeleteReview={handleClick}
          currentUser={this.props.currentUser}
          handleVote={this.props.handleVote}
        />
      );
    });
    return (
      <div>
        <h3 className="attr-review-header">Attraction Reviews:</h3>
        <ul>{reviews}</ul>
      </div>
    );
  }
}

export default ReviewsContainer;
