import React, { Component } from 'react'
import ReviewTile from '../components/ReviewTile'

class ReviewsContainer extends Component {
  constructor(props) {
    this.state = {

    }
  }

  render() {
    let reviews = this.props.reviews.map(review => {
      return (
        <ReviewTile
          key={review.id}
          id={review.id}
          body={review.body}
          rating={review.rating}
        />
      )
    }
    return (
      <div>
        {reviews}
      </div>
    )
  }
}

export default ReviewsContainer
