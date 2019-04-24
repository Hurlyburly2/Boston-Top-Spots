import React, { Component } from "react";
import ReviewTile from "../components/ReviewTile";

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {

    }
=======
    this.state = {};
>>>>>>> origin/add_showpage_and_tests
  }

  render() {
    debugger;
    let reviews = this.props.reviews.map(review => {
      return (
        <ReviewTile
          key={review.id}
          id={review.id}
          body={review.body}
          rating={review.rating}
          user={review.user_id}
        />
<<<<<<< HEAD
      )
    });
    return (
      <div>
        {reviews}
      </div>
    )
=======
      );
    });

    return <div>{reviews}</div>;
>>>>>>> origin/add_showpage_and_tests
  }
}

export default ReviewsContainer;
