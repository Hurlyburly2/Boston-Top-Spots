import React, { Component } from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import MyReviewTile from "../components/MyReviewTile";

class ReviewIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
<<<<<<< HEAD
=======
    this.handleEditReview = this.handleEditReview.bind(this);
  }
  handleEditReview(review_id) {
    return (window.location.href = `/reviews/${review_id}/edit`);
>>>>>>> 7a34ceacbaac832a228f7143b4de61f36f587918
  }

  handleDeleteReview(review_id) {
    let review_info = {
      review_id: review_id,
      to_get: "review_index"
    };
    fetch(`/api/v1/reviews/${review_id}`, {
      credentials: "same-origin",
      method: "DELETE",
      body: JSON.stringify(review_info),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ reviews: body.reviews });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
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
    let user = "Hey make some reviews";
    if (this.state.reviews.length > 0) {
      user = `${this.state.reviews[0].user.username}'s Reviews`;
    }
    let myReviews = this.state.reviews.map(review => {
      let handleDeleteReview = () => {
        this.handleDeleteReview(review.id);
      };
<<<<<<< HEAD
=======
      let handleEditReview = () => {
        this.handleEditReview(review.id);
      };
>>>>>>> 7a34ceacbaac832a228f7143b4de61f36f587918
      return (
        <MyReviewTile
          key={review.id}
          id={review.id}
          attraction_name={review.location.name}
          attraction_image={review.location.image_url}
          body={review.body}
          rating={review.rating}
          handleDeleteReview={handleDeleteReview}
<<<<<<< HEAD
=======
          handleEditReview={handleEditReview}
>>>>>>> 7a34ceacbaac832a228f7143b4de61f36f587918
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
